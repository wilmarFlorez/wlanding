export type Locale = "es" | "en";

type Project = {
  name: string;
  summary: string;
  problemLabel: string;
  problem: string;
  decisionsLabel: string;
  decisions: readonly string[];
  technologyLabel: string;
  technology: string;
  statusLabel: string;
  status: string;
  link?: { label: string; href: string };
};

type LandingContent = {
  capabilities: readonly { title: string; description: string }[];
  workSteps: readonly (readonly [string, string])[];
  faqs: readonly (readonly [string, string])[];
  experience: readonly { company: string; role: string; period: string; summary: string }[];
  projects: readonly Project[];
  header: { homeLabel: string; navLabel: string; experience: string; projects: string; capabilities: string; contact: string; languageLabel: string; languageName: string; languageHref: string };
  hero: { role: string; title: string; lede: string; focusLabel: string; experience: string };
  experienceTitle: string;
  experienceIntro: string;
  projectsTitle: string;
  projectsIntro: string;
  capabilityTitle: string;
  capabilityIntro: string;
  processTitle: string;
  faqTitle: string;
  newTab: string;
  logistics: { imageAlt: string; title: string; description: string; context: string; items: readonly string[]; project: string };
  contact: { eyebrow: string; title: string; description: string; formTitle: string; formDescription: string };
  form: { name: string; email: string; company: string; role: string; message: string; website: string; unavailable: string; privacy: string; sending: string; submit: string; success: string; error: string };
  whatsapp: { label: string; message: string };
};

export const content: Record<Locale, LandingContent> = {
  es: {
    capabilities: [
      { title: "Applied AI y workflows con LLM", description: "Diseño flujos donde los modelos interpretan información o proponen acciones dentro de límites explícitos, con reglas deterministas y escalamiento humano cuando el proceso lo requiere." },
      { title: "Backend con Python", description: "Construyo APIs y servicios con Python, FastAPI y PostgreSQL, organizados para que la lógica, los datos y las integraciones puedan evolucionar sin mezclarse." },
      { title: "Frontend de producto", description: "Desarrollo interfaces con TypeScript y React/Next.js para convertir procesos complejos en herramientas claras, accesibles y mantenibles." },
      { title: "Integraciones y eventos", description: "Conecto APIs, webhooks, canales de mensajería y sistemas existentes para mantener el contexto y mover información entre etapas de una operación." },
    ],
    workSteps: [],
    faqs: [],
    experience: [
      { company: "Roomly", role: "AI Product Engineer", period: "Feb 2025 - presente", summary: "Construcción integral de un producto conversacional: definición de arquitectura, backend, integraciones, workflows con IA y despliegue para validación." },
      { company: "Elenas", role: "Senior Frontend Engineer", period: "Ene 2022 - Jun 2024", summary: "Desarrollo y evolución de producto frontend dentro de un equipo de ingeniería, con foco en interfaces, arquitectura y calidad de implementación." },
      { company: "Elenas", role: "Mid Frontend Developer", period: "Nov 2020 - Dic 2021", summary: "Implementación de funcionalidades de producto y mantenimiento de aplicaciones frontend en colaboración con diseño, producto y backend." },
      { company: "Easy Case Legal", role: "Mid Frontend Developer", period: "Ene 2020 - Oct 2020", summary: "Desarrollo frontend de producto, integración con servicios y resolución de necesidades de interfaz para una plataforma legal." },
      { company: "Freelance", role: "Software Developer", period: "Feb 2017 - Ene 2020", summary: "Diseño y desarrollo de soluciones web para proyectos independientes, desde la definición técnica hasta su entrega." },
    ],
    projects: [
      { name: "Roomly", summary: "Producto propio construido y desplegado, actualmente en validación. No se presenta como una solución con clientes, usuarios activos o resultados comerciales demostrados.", problemLabel: "Problema abordado", problem: "Coordinar conversaciones operativas por WhatsApp sin perder contexto, control del flujo ni la posibilidad de intervención humana.", decisionsLabel: "Decisiones técnicas", decisions: ["Workflows conversacionales deterministas", "Uso controlado de LLM", "Escalamiento a operadores humanos", "Arquitectura por capas y webhooks"], technologyLabel: "Tecnologías", technology: "FastAPI, PostgreSQL y WhatsApp Business API.", statusLabel: "Estado real", status: "Construido y desplegado; en etapa de validación." },
      { name: "Freight Pilot", summary: "Demo de portafolio para operaciones de transporte terrestre. Ilustra cómo combinar IA, reglas y revisión humana sin presentarse como un producto comercial validado.", problemLabel: "Problema abordado", problem: "Preparar información de solicitudes de cotización que llega en texto libre, conservando trazabilidad y haciendo visibles los datos faltantes o ambiguos.", decisionsLabel: "Decisiones técnicas", decisions: ["Extracción de información con IA", "Validación mediante reglas deterministas", "Revisión humana de excepciones", "Registro del texto, incidencias y correcciones"], technologyLabel: "Tecnologías", technology: "Next.js, FastAPI y PostgreSQL.", statusLabel: "Estado real", status: "Demo desplegada. No calcula precios, genera cotizaciones ni asigna vehículos; no es un proyecto de cliente ni un producto comercial validado.", link: { label: "Explorar Freight Pilot", href: "https://freight-pilot-flame.vercel.app/" } },
    ],
    header: { homeLabel: "Wilmar Florez Samudio, inicio", navLabel: "Navegación principal", experience: "Experiencia", projects: "Proyectos", capabilities: "Capacidades", contact: "Contacto", languageLabel: "Cambiar el idioma a inglés", languageName: "EN", languageHref: "/en" },
    hero: { role: "Full-Stack & Applied AI Engineer", title: "Construyo productos, automatizaciones y software con IA", lede: "Ingeniero de software con experiencia en producto, frontend, backend e integraciones. Combino TypeScript, React, Python y FastAPI para convertir procesos complejos en herramientas que puedan operarse y mantenerse.", focusLabel: "Tecnologías y áreas principales", experience: "Ver experiencia y proyectos" },
    experienceTitle: "Experiencia construyendo producto",
    experienceIntro: "He trabajado en equipos de producto y en proyectos propios, con responsabilidades que abarcan frontend, backend, arquitectura e integraciones.",
    projectsTitle: "Proyectos técnicos",
    projectsIntro: "Dos ejemplos concretos de cómo convierto procesos operativos en software, con límites y estado claramente indicados.",
    capabilityTitle: "Capacidades profesionales",
    capabilityIntro: "Un perfil full-stack orientado a producto, con IA aplicada cuando aporta al flujo y no como una capa aislada.",
    processTitle: "Cómo trabajo",
    faqTitle: "Preguntas frecuentes",
    newTab: "abre en una nueva pestaña",
    logistics: { imageAlt: "Camión de carga en carretera", title: "Logística y operaciones", description: "Exploro cómo el software puede aportar claridad y control a los procesos de logística y transporte.", context: "Áreas", items: [], project: "Ver proyectos" },
    contact: { eyebrow: "Roles y colaboraciones", title: "Quiero conversar sobre un rol o colaboración", description: "Si buscas sumar un Full-Stack & Applied AI Engineer a un equipo, cubrir un contrato o explorar una colaboración profesional, escríbeme por este formulario.", formTitle: "Cuéntame sobre el rol o colaboración.", formDescription: "Responderé al correo que registres para entender el contexto y cómo podría aportar." },
    form: { name: "Nombre", email: "Correo", company: "Empresa", role: "Cargo", message: "¿Qué rol o colaboración quieres conversar?", website: "Sitio web", unavailable: "La verificación de seguridad no está disponible.", privacy: "Cloudflare procesa la verificación de seguridad. Usaré tu información únicamente para responder a tu consulta.", sending: "Enviando...", submit: "Enviar mensaje", success: "Recibí tu mensaje. Te responderé por correo.", error: "No fue posible enviar el mensaje. Inténtalo nuevamente." },
    whatsapp: { label: "Escribir a Wilmar por WhatsApp", message: "Hola, vi tu portafolio y quiero conversar sobre un rol o colaboración." },
  },
  en: {
    capabilities: [
      { title: "Applied AI and LLM workflows", description: "I design workflows where models interpret information or suggest actions within explicit boundaries, supported by deterministic rules and human escalation when the process requires it." },
      { title: "Backend with Python", description: "I build APIs and services with Python, FastAPI, and PostgreSQL, structured so business logic, data, and integrations can evolve independently." },
      { title: "Product frontend", description: "I develop interfaces with TypeScript and React/Next.js that turn complex processes into clear, accessible, and maintainable tools." },
      { title: "Integrations and events", description: "I connect APIs, webhooks, messaging channels, and existing systems to preserve context and move information across an operation." },
    ],
    workSteps: [],
    faqs: [],
    experience: [
      { company: "Roomly", role: "AI Product Engineer", period: "Feb 2025 - present", summary: "End-to-end construction of a conversational product, including architecture, backend, integrations, AI workflows, and deployment for validation." },
      { company: "Elenas", role: "Senior Frontend Engineer", period: "Jan 2022 - Jun 2024", summary: "Frontend product development and evolution within an engineering team, focused on interfaces, architecture, and implementation quality." },
      { company: "Elenas", role: "Mid Frontend Developer", period: "Nov 2020 - Dec 2021", summary: "Product feature implementation and frontend application maintenance in collaboration with design, product, and backend teams." },
      { company: "Easy Case Legal", role: "Mid Frontend Developer", period: "Jan 2020 - Oct 2020", summary: "Frontend product development, service integration, and interface implementation for a legal platform." },
      { company: "Freelance", role: "Software Developer", period: "Feb 2017 - Jan 2020", summary: "Web solution design and development for independent projects, from technical definition through delivery." },
    ],
    projects: [
      { name: "Roomly", summary: "A self-initiated product that has been built and deployed and is currently under validation. It is not presented as having clients, active users, or demonstrated commercial results.", problemLabel: "Problem addressed", problem: "Coordinate operational conversations through WhatsApp without losing context, workflow control, or the ability for a human operator to intervene.", decisionsLabel: "Technical decisions", decisions: ["Deterministic conversational workflows", "Controlled use of LLMs", "Escalation to human operators", "Layered, webhook-driven architecture"], technologyLabel: "Technologies", technology: "FastAPI, PostgreSQL, and WhatsApp Business API.", statusLabel: "Current status", status: "Built and deployed; currently under validation." },
      { name: "Freight Pilot", summary: "A portfolio demo for ground transportation operations. It shows how AI, rules, and human review can work together without presenting itself as a commercially validated product.", problemLabel: "Problem addressed", problem: "Prepare quotation request information received as free-form text while retaining traceability and surfacing missing or ambiguous data.", decisionsLabel: "Technical decisions", decisions: ["AI-powered information extraction", "Deterministic rule-based validation", "Human review of exceptions", "Original text, issue, and correction records"], technologyLabel: "Technologies", technology: "Next.js, FastAPI, and PostgreSQL.", statusLabel: "Current status", status: "Deployed demo. It does not calculate prices, generate quotes, or assign vehicles; it is not a client project or a commercially validated product.", link: { label: "Explore Freight Pilot", href: "https://freight-pilot-flame.vercel.app/" } },
    ],
    header: { homeLabel: "Wilmar Florez Samudio, home", navLabel: "Main navigation", experience: "Experience", projects: "Projects", capabilities: "Capabilities", contact: "Contact", languageLabel: "Switch language to Spanish", languageName: "ES", languageHref: "/" },
    hero: { role: "Full-Stack & Applied AI Engineer", title: "I build AI-powered products, automations, and software", lede: "Software engineer with experience across product, frontend, backend, and integrations. I combine TypeScript, React, Python, and FastAPI to turn complex processes into tools that can be operated and maintained.", focusLabel: "Core technologies and disciplines", experience: "View experience and projects" },
    experienceTitle: "Experience building products",
    experienceIntro: "I have worked in product teams and on self-initiated projects, with responsibilities spanning frontend, backend, architecture, and integrations.",
    projectsTitle: "Technical projects",
    projectsIntro: "Two concrete examples of how I turn operational processes into software, with their limits and current status clearly stated.",
    capabilityTitle: "Professional capabilities",
    capabilityIntro: "A product-oriented full-stack profile, applying AI when it supports the workflow rather than treating it as an isolated layer.",
    processTitle: "How I work",
    faqTitle: "Frequently asked questions",
    newTab: "opens in a new tab",
    logistics: { imageAlt: "Cargo truck on a road", title: "Logistics and operations", description: "I explore how software can bring clarity and control to logistics and transportation processes.", context: "Areas", items: [], project: "View projects" },
    contact: { eyebrow: "Roles and collaborations", title: "I want to discuss a role or collaboration", description: "If you are looking to add a Full-Stack & Applied AI Engineer to a team, fill a contract, or explore a professional collaboration, use this form to reach me.", formTitle: "Tell me about the role or collaboration.", formDescription: "I will reply to the email you provide to understand the context and how I could contribute." },
    form: { name: "Name", email: "Email", company: "Company", role: "Role", message: "What role or collaboration would you like to discuss?", website: "Website", unavailable: "Security verification is not available.", privacy: "Cloudflare processes the security verification. I will use your information only to respond to your inquiry.", sending: "Sending...", submit: "Send message", success: "I received your message. I will reply by email.", error: "Your message could not be sent. Please try again." },
    whatsapp: { label: "Message Wilmar on WhatsApp", message: "Hi, I saw your portfolio and would like to discuss a role or collaboration." },
  },
};

export function whatsappUrl(locale: Locale) {
  return `https://wa.me/573184323342?text=${encodeURIComponent(content[locale].whatsapp.message)}`;
}
