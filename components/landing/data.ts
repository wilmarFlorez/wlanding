export const problems = [
  [
    "La información y el trabajo se duplican entre sistemas.",
    "El contexto se busca, registra o comunica más de una vez para que el proceso avance.",
  ],
  [
    "La coordinación y las excepciones dependen de alguien.",
    "La ejecución exige perseguir respuestas, pasar contexto y saber a quién consultar cuando algo cambia.",
  ],
  [
    "Las decisiones repetibles consumen atención de especialistas.",
    "Clasificar, validar, buscar, responder o actualizar se repite bajo reglas que pueden explicitarse.",
  ],
  [
    "El flujo existe, pero no se puede observar ni mejorar.",
    "Sin un punto claro de seguimiento, cuesta entender qué ocurre, dónde se detiene y qué conviene cambiar.",
  ],
] as const;

export const demos = [
  {
    title: "Gestión de novedades de transporte",
    problem:
      "Una novedad llega por mensaje, llamada o correo y el equipo debe buscar contexto, avisar a las personas correctas y actualizar varios lugares.",
    current: ["WhatsApp, llamada o correo", "Búsqueda manual", "Mensajes a responsables", "Registro y seguimiento"],
    proposed: ["IA: clasifica + reúne contexto", "Asignar o escalar", "Actualizar y notificar"],
    systems: "WhatsApp, correo, TMS, tablero operativo o sistema de tickets.",
    metric: "Tiempo hasta asignación y trazabilidad de cierre.",
  },
  {
    title: "Validación documental",
    problem:
      "Los documentos llegan por distintos medios y el equipo debe revisar manualmente si están completos y corresponden al servicio correcto.",
    current: ["Correo o carpeta", "Descarga", "Revisión manual", "Registro del resultado"],
    proposed: ["IA: extrae y valida", "Revisión humana", "Registrar resultado"],
    systems: "Correo, almacenamiento documental, TMS y ERP.",
    metric: "Tiempo de revisión y casos que requieren intervención humana.",
  },
  {
    title: "Actualización y comunicación de estados",
    problem:
      "Una actualización operativa debe registrarse en varias herramientas y comunicarse a diferentes personas, lo que retrasa la visibilidad del estado real.",
    current: ["Evento operativo", "Confirmación", "Actualización manual", "Comunicación"],
    proposed: ["IA: valida contexto", "Confirmación humana si aplica", "Actualizar y notificar"],
    systems: "TMS, CRM, correo, WhatsApp y herramientas internas.",
    metric: "Tiempo entre evento y actualización, y solicitudes manuales.",
  },
] as const;

export const faqs = [
  [
    "¿Necesito cambiar mis sistemas actuales o usar IA?",
    "No necesariamente. Se parte del proceso y de las herramientas existentes; puede requerir integración, automatización, IA, rediseño o una combinación.",
  ],
  [
    "¿Qué pasa si los datos están desordenados?",
    "No se necesitan datos perfectos para revisar el problema. Sí se debe entender qué información existe, dónde está y qué tan confiable es para el flujo.",
  ],
] as const;
