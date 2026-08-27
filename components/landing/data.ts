export const problems = [
  [
    "La información está repartida entre personas, canales y sistemas.",
    "El contexto necesario para actuar no está en un solo lugar ni llega con la misma forma.",
  ],
  [
    "Un proceso sigue vivo porque alguien recuerda cómo coordinarlo.",
    "La ejecución depende de perseguir respuestas, pasar contexto y saber a quién consultar.",
  ],
  [
    "Las decisiones repetibles consumen atención de especialistas.",
    "Clasificar, validar, buscar, responder o actualizar se repite bajo reglas que pueden explicitarse.",
  ],
  [
    "Las excepciones no tienen un recorrido claro.",
    "Un cambio, incidente o dato faltante se mueve entre responsables sin suficiente trazabilidad.",
  ],
  [
    "Los sistemas no comparten el trabajo que ya se hizo.",
    "La misma información se registra, interpreta o comunica más de una vez para avanzar.",
  ],
  [
    "El flujo existe, pero no se puede observar ni mejorar.",
    "Sin un punto claro de seguimiento, cuesta entender qué ocurre, dónde se detiene y qué conviene cambiar.",
  ],
] as const;

export const solutions = [
  [
    "Flujos operativos y de excepción",
    "Para ordenar reportes, reunir contexto, asignar responsables y mantener el recorrido visible hasta el cierre.",
  ],
  [
    "Automatización e integraciones",
    "Para mover información entre sistemas, activar tareas y evitar que los equipos repitan pasos previsibles.",
  ],
  [
    "Procesamiento de información",
    "Para extraer, validar, clasificar y preparar datos o documentos para la decisión correcta, incluida la revisión humana.",
  ],
  [
    "Interfaces y asistentes internos",
    "Para dar a las personas una forma útil de consultar contexto, avanzar tareas y escalar incertidumbre con control.",
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
    "¿Solo trabajas en logística?",
    "No. Logística y operaciones son una especialización visible, en particular transporte terrestre y 3PL. El trabajo también puede partir de problemas equivalentes en otros contextos operativos o de producto.",
  ],
  [
    "¿Necesito tener un proyecto de IA definido?",
    "No. Se puede empezar por un proceso que genera fricción. La tecnología se decide después de entender el caso.",
  ],
  [
    "¿Necesito cambiar mis sistemas actuales?",
    "No necesariamente. El diseño evalúa cómo conectarse con las herramientas y canales existentes cuando sea pertinente.",
  ],
  [
    "¿Qué pasa si los datos están desordenados?",
    "No se necesitan datos perfectos para revisar el problema. Sí se debe entender qué información existe, dónde está y qué tan confiable es para el flujo.",
  ],
  [
    "¿La solución siempre utiliza agentes de IA?",
    "No. Puede requerir automatización, integración, IA, rediseño de proceso o una combinación. Se elige el mecanismo que tenga sentido.",
  ],
] as const;
