export const problems = [
  [
    "El estado de un servicio se obtiene preguntando en varios lugares.",
    "Para responder qué pasó con una carga, el equipo debe llamar, escribir o revisar diferentes canales antes de tener contexto.",
  ],
  [
    "Las novedades llegan sin un flujo de seguimiento claro.",
    "Un retraso, cambio o incidente se reporta por distintos medios y requiere perseguir información hasta cerrarlo.",
  ],
  [
    "Actualizar estados repite el mismo trabajo en varias herramientas.",
    "El equipo registra un evento en el sistema, en un reporte y luego lo comunica a otras personas.",
  ],
  [
    "La información de una operación queda dispersa.",
    "Un mensaje, un documento y la actualización del servicio terminan en fuentes separadas, sin un contexto común.",
  ],
  [
    "Validar datos o documentos frena el siguiente paso.",
    "La operación debe comprobar manualmente si la información está completa, corresponde al servicio y puede avanzar.",
  ],
  [
    "La coordinación depende demasiado de quién sabe a quién preguntar.",
    "El proceso funciona por experiencia individual en lugar de reglas, contexto compartido y responsables visibles.",
  ],
] as const;

export const solutions = [
  [
    "Flujos para gestión de novedades",
    "Para centralizar reportes, reunir contexto, clasificar casos, asignar responsables y mantener trazabilidad hasta el cierre.",
  ],
  [
    "Automatización de estados y comunicaciones",
    "Para convertir eventos operativos en actualizaciones, alertas o comunicaciones preparadas desde el contexto correcto.",
  ],
  [
    "Procesamiento y validación documental",
    "Para extraer información, detectar faltantes, validar condiciones definidas y llevar a revisión humana los casos que lo requieren.",
  ],
  [
    "Asistentes y orquestación interna",
    "Para consultar información autorizada, guiar tareas, coordinar acciones entre sistemas y escalar excepciones.",
  ],
] as const;

export const processSteps = [
  [
    "Delimitamos el proceso",
    "Partimos de un flujo concreto que consume tiempo, genera reprocesos o deja a la operación sin visibilidad. No necesitas llegar con una solución definida.",
  ],
  [
    "Definimos qué vale la pena resolver",
    "Reviso frecuencia, volumen, pasos manuales, errores, coordinación, información disponible e impacto operativo. No todo problema requiere IA ni una solución a medida.",
  ],
  [
    "Diseño la solución y la forma de integrarla",
    "Defino el flujo futuro, reglas, excepciones, supervisión humana y conexión con los sistemas que ya utiliza el equipo cuando corresponde.",
  ],
  [
    "Construyo, integro y mido",
    "Desarrollo la solución, la conecto con el entorno acordado y definimos cómo observar su efecto sobre el proceso. No entrego solo recomendaciones.",
  ],
] as const;

export const demos = [
  {
    title: "Gestión de novedades de transporte",
    problem:
      "Una novedad llega por mensaje, llamada o correo y el equipo debe buscar contexto, avisar a las personas correctas y actualizar varios lugares.",
    current: ["WhatsApp, llamada o correo", "Búsqueda manual", "Mensajes a responsables", "Registro y seguimiento"],
    proposed: ["Clasificar", "Reunir contexto", "Asignar o escalar", "Actualizar", "Notificar"],
    agent:
      "Interpretar el reporte, reunir contexto autorizado y proponer el siguiente paso; los casos ambiguos o de alto impacto se escalan.",
    systems: "WhatsApp, correo, TMS, tablero operativo o sistema de tickets.",
    metric: "Tiempo hasta asignación, contexto completo y trazabilidad de cierre.",
  },
  {
    title: "Validación documental",
    problem:
      "Los documentos llegan por distintos medios y el equipo debe revisar manualmente si están completos y corresponden al servicio correcto.",
    current: ["Correo o carpeta", "Descarga", "Revisión manual", "Registro del resultado"],
    proposed: ["Clasificar", "Extraer datos", "Validar reglas", "Revisión humana", "Registrar"],
    agent:
      "Leer información no estructurada, detectar faltantes y explicar por qué un documento requiere revisión.",
    systems: "Correo, almacenamiento documental, TMS y ERP.",
    metric: "Tiempo de revisión, documentos completos y casos que requieren intervención humana.",
  },
  {
    title: "Actualización y comunicación de estados",
    problem:
      "Una actualización operativa debe registrarse en varias herramientas y comunicarse a diferentes personas, lo que retrasa la visibilidad del estado real.",
    current: ["Evento operativo", "Confirmación", "Actualización manual", "Comunicación"],
    proposed: ["Validar contexto", "Actualizar o confirmar", "Registrar excepción", "Notificar"],
    agent:
      "Interpretar eventos en texto libre y solicitar validación cuando no exista certeza suficiente.",
    systems: "TMS, CRM, correo, WhatsApp y herramientas internas.",
    metric: "Tiempo entre evento y actualización, y solicitudes manuales de estado.",
  },
] as const;

export const faqs = [
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
  [
    "¿Cuánto cuesta?",
    "Depende del proceso, la complejidad de integración y lo que se necesita construir. El formato y alcance de la conversación o evaluación inicial aún están por definir.",
  ],
] as const;
