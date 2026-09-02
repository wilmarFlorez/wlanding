export const capabilities = [
  {
    title: "AI Agents",
    description:
      "Agentes que consultan información, clasifican solicitudes, preparan respuestas, proponen acciones o escalan excepciones para revisión humana. Útiles cuando una operación depende de interpretar entradas repetitivas y decidir qué sigue.",
  },
  {
    title: "Automation & Workflows",
    description:
      "Flujos que reducen pasos manuales entre personas y procesos: validaciones, asignaciones, actualizaciones, recordatorios y seguimiento de tareas. Útiles cuando el trabajo se repite, se retrasa o se pierde entre canales.",
  },
  {
    title: "Integrations",
    description:
      "Conexiones entre sistemas, fuentes de información y canales de trabajo para que los datos necesarios estén disponibles donde se toman decisiones. Útiles cuando la operación depende de copiar, reconciliar o perseguir información dispersa.",
  },
  {
    title: "AI-powered Software",
    description:
      "Software interno e interfaces operativas que reúnen contexto, reglas y acciones en un punto de trabajo. Útiles cuando una necesidad no se resuelve conectando herramientas existentes y requiere una experiencia propia.",
  },
] as const;

export const problems = [
  [
    "Información dispersa",
    "Datos relevantes repartidos entre correos, hojas de cálculo, chats y sistemas que no conversan entre sí.",
  ],
  [
    "Coordinación manual",
    "Personas que persiguen actualizaciones, confirman tareas o trasladan contexto entre equipos.",
  ],
  [
    "Decisiones repetibles",
    "Revisiones frecuentes que siguen reglas, contexto o criterios que pueden hacerse visibles y consistentes.",
  ],
  [
    "Excepciones sin visibilidad",
    "Novedades que se detectan tarde o no llegan a la persona que debe actuar.",
  ],
  [
    "Sistemas desconectados",
    "Herramientas que contienen partes del proceso, pero obligan a copiar, comparar o conciliar información manualmente.",
  ],
] as const;

export const workSteps = [
  [
    "Entender el contexto",
    "Reviso el proceso actual, las personas involucradas, la información disponible, las excepciones y los sistemas que ya existen.",
  ],
  [
    "Definir la intervención",
    "Identifico qué conviene simplificar, automatizar, asistir con IA, conectar o construir desde cero.",
  ],
  [
    "Diseñar y construir",
    "Convierto la intervención en flujos, interfaces y software que permitan operar con claridad.",
  ],
  [
    "Integrar y medir",
    "Conecto la solución con el entorno necesario y defino qué señales permiten observar su funcionamiento.",
  ],
] as const;

export const demos = [
  {
    title: "Gestión de novedades de transporte",
    problem:
      "Una novedad llega por mensaje, llamada o correo y el equipo debe buscar contexto antes de avisar y actualizar varios lugares.",
    intervention:
      "Un flujo podría reunir contexto, identificar excepciones y preparar una actualización para revisión o acción operativa.",
    systems: "Mensajería, correo y TMS",
    signal: "Asignación y trazabilidad de cierre",
  },
  {
    title: "Validación documental",
    problem:
      "Los documentos llegan por distintos medios y el equipo debe revisar si están completos y corresponden al servicio correcto.",
    intervention:
      "Un flujo podría organizar la información requerida y dirigir los casos que necesitan confirmación humana.",
    systems: "Correo y almacenamiento documental",
    signal: "Casos que requieren revisión humana",
  },
  {
    title: "Actualización y comunicación de estados",
    problem:
      "Una actualización operativa debe registrarse en varias herramientas y comunicarse a diferentes personas.",
    intervention:
      "Un flujo podría conectar eventos con los sistemas y canales donde equipos o clientes necesitan visibilidad.",
    systems: "TMS, CRM y mensajería",
    signal: "Tiempo entre evento y actualización",
  },
] as const;

export const faqs = [
  [
    "¿Solo trabajas con empresas de logística?",
    "No. Logística y operaciones son mi especialización y foco comercial actual. También puedo trabajar en problemas operativos y de información de otras industrias cuando existe encaje.",
  ],
  [
    "¿Necesito llegar con una solución de IA definida?",
    "No. La conversación puede comenzar con un proceso manual, información dispersa, coordinación difícil o sistemas desconectados. La solución se define a partir del contexto.",
  ],
  [
    "¿Todo proyecto requiere un AI Agent?",
    "No. Un agente es una de las capacidades posibles. Según el caso, puede ser más apropiado automatizar un flujo, integrar sistemas o construir una interfaz operativa.",
  ],
  [
    "¿Puedes trabajar con los sistemas que ya usamos?",
    "La evaluación considera los sistemas, fuentes de información y canales que ya sostienen la operación. Las integraciones o una construcción nueva se definen según lo que el contexto permita.",
  ],
  [
    "¿Las demostraciones son proyectos de clientes?",
    "No. Freight Pilot está identificado como proyecto propio y demo funcional desplegada. Las otras demostraciones están etiquetadas como demos conceptuales: ilustran un enfoque posible y no representan implementaciones ni resultados de clientes.",
  ],
] as const;
