const SHEET_NAME = "leads-wilmar-landing";
const NOTIFICATION_EMAIL = "wflorez52@gmail.com";

const HEADERS = ["Fecha", "Nombre", "Correo", "Empresa", "Cargo", "Mensaje"];

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

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    const createdAt = new Date().toISOString();
    sheet.appendRow([
      createdAt,
      safeCell(name),
      safeCell(email),
      safeCell(company),
      safeCell(role),
      safeCell(message),
    ]);

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
