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

export const faqs = [
  [
    "¿Colaboras como freelancer o dentro de un equipo?",
    "Ambas opciones. Puedo trabajar de forma independiente en una iniciativa concreta o sumar capacidad a un equipo de producto y tecnología, según lo que el contexto requiera.",
  ],
  [
    "¿Solo trabajas con empresas de logística?",
    "No. Logística y operaciones son mi especialización y foco comercial actual. También puedo trabajar en problemas de producto, operaciones e información de otras industrias cuando existe encaje.",
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
] as const;
