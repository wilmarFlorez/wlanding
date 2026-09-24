const SHEET_NAME = "leads-wilmar-landing";
const NOTIFICATION_EMAIL = "wflorez52@gmail.com";

const CONTACT_HEADERS = ["Fecha", "Nombre", "Correo", "Empresa", "Cargo", "Mensaje"];
const ATTRIBUTION_HEADERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "gclid",
  "gbraid",
  "landing_url",
  "captured_at",
];
const HEADERS = [...CONTACT_HEADERS, ...ATTRIBUTION_HEADERS];
const ATTRIBUTION_LIMITS = {
  utm_source: 256,
  utm_medium: 256,
  utm_campaign: 256,
  utm_content: 256,
  gclid: 512,
  gbraid: 512,
  landing_url: 2048,
  captured_at: 40,
};

function doPost(event) {
  try {
    const data = JSON.parse(event.postData?.contents || "{}");
    const sharedSecret = PropertiesService.getScriptProperties().getProperty(
      "LEADS_SHARED_SECRET",
    );

    if (!sharedSecret) {
      return response({ success: false, error: "missing_secret" });
    }

    if (data.secret !== sharedSecret) {
      return response({ success: false, error: "invalid_secret" });
    }

    const allowedFields = [
      "secret",
      "name",
      "email",
      "company",
      "role",
      "message",
      "attribution",
    ];
    if (
      !data ||
      Array.isArray(data) ||
      Object.keys(data).some((field) => !allowedFields.includes(field))
    ) {
      return response({ success: false, error: "invalid_fields" });
    }

    const name = requiredText(data.name, 120);
    const email = requiredText(data.email, 254);
    const company = optionalText(data.company, 160);
    const role = optionalText(data.role, 160);
    const message = requiredText(data.message, 5000);
    const attribution = normalizeAttribution(data.attribution);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response({ success: false, error: "invalid_email" });
    }

    const spreadsheetId =
      PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");

    if (!spreadsheetId) {
      throw new Error("Falta configurar SPREADSHEET_ID.");
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet =
      spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    ensureHeaders(sheet);

    const createdAt = new Date().toISOString();
    const rowHeaders = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getDisplayValues()[0];
    const values = {
      Fecha: createdAt,
      Nombre: name,
      Correo: email,
      Empresa: company,
      Cargo: role,
      Mensaje: message,
      ...attribution,
    };
    const row = Array(rowHeaders.length).fill("");

    rowHeaders.forEach((header, index) => {
      if (Object.prototype.hasOwnProperty.call(values, header)) {
        row[index] = safeCell(values[header]);
      }
    });
    sheet.appendRow(row);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto de ${emailSubject(name)}`,
      body: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Empresa: ${company || "No indicada"}`,
        `Cargo: ${role || "No indicado"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    return response({ success: true });
  } catch (error) {
    return response({
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

function doGet() {
  return response({ success: true, message: "Endpoint activo." });
}

function requiredText(value, maxLength) {
  const text = optionalText(value, maxLength);
  if (!text) {
    throw new Error("Campo obligatorio inválido.");
  }
  return text;
}

function optionalText(value, maxLength) {
  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value !== "string") {
    throw new Error("Campo inválido.");
  }

  const text = value.trim();
  if (text.length > maxLength) {
    throw new Error("Campo demasiado largo.");
  }

  return text;
}

function normalizeAttribution(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  const attribution = {};
  Object.entries(ATTRIBUTION_LIMITS).forEach(([field, maxLength]) => {
    const fieldValue = value[field];
    if (
      typeof fieldValue !== "string" ||
      fieldValue.trim().length === 0 ||
      fieldValue.length > maxLength
    ) {
      return;
    }

    if (field === "landing_url" && !isValidLandingUrl(fieldValue)) {
      return;
    }

    if (field === "captured_at" && !isValidIsoDate(fieldValue)) {
      return;
    }

    attribution[field] = fieldValue;
  });

  return attribution;
}

function isValidLandingUrl(value) {
  if (value !== value.trim() || value.includes("?") || value.includes("#")) {
    return false;
  }

  const match = /^https?:\/\/(\[[0-9a-f:.]+\]|[^/?#:\s\\]+)(?::(\d{1,5}))?(?:\/[^?#]*)?$/i.exec(
    value,
  );
  return Boolean(
    match &&
      !match[1].includes("@") &&
      (match[2] === undefined || Number(match[2]) <= 65535),
  );
}

function isValidIsoDate(value) {
  const match =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-](\d{2}):(\d{2}))$/.exec(
      value,
    );
  if (!match || Number.isNaN(Date.parse(value))) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const daysInMonth = [
    31,
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return (
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= daysInMonth[month - 1] &&
    Number(match[4]) <= 23 &&
    Number(match[5]) <= 59 &&
    Number(match[6]) <= 59 &&
    (match[7] === undefined ||
      (Number(match[7]) <= 23 && Number(match[8]) <= 59))
  );
}

function ensureHeaders(sheet) {
  const lastColumn = sheet.getLastColumn();
  if (sheet.getLastRow() === 0 || lastColumn === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    return;
  }

  const existingHeaders = sheet
    .getRange(1, 1, 1, lastColumn)
    .getDisplayValues()[0];
  const missingHeaders = HEADERS.filter((header) => !existingHeaders.includes(header));

  if (missingHeaders.length > 0) {
    sheet
      .getRange(1, lastColumn + 1, 1, missingHeaders.length)
      .setValues([missingHeaders]);
  }

  sheet.setFrozenRows(1);
}

function safeCell(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function emailSubject(value) {
  return value.replace(/[\r\n]/g, " ");
}

function response(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
