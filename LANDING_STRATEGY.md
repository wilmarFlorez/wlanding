# Landing Strategy vigente

**Última actualización:** 2026-09-14
**Fuente de verdad:** implementación actual en `app/` y `components/landing/`.

## 1. Propósito actual

La landing es el portafolio personal bilingüe de **Wilmar Florez Samudio**. Su función principal es demostrar capacidad técnica y experiencia para:

- contratación como `Full-Stack & Applied AI Engineer`;
- roles de producto e ingeniería;
- contratos y colaboraciones profesionales;
- derivación de empresas interesadas en automatización operativa hacia NuTeam.

No es actualmente una landing exclusiva de logística ni una página de venta directa de una oferta propia de automatización. La logística es una especialización visible dentro del portafolio y el canal comercial para automatización es NuTeam.

## 2. Posicionamiento vigente

### Mensaje principal

> Construyo productos, automatizaciones y software con IA, desde la arquitectura hasta producción.

### Rol

`Full-Stack & Applied AI Engineer`.

### Propuesta

Wilmar combina producto, frontend, backend, arquitectura, workflows con LLM e integraciones para convertir procesos complejos en herramientas que puedan operarse y mantenerse.

### Capacidades que deben permanecer visibles

- TypeScript y React.
- Python y FastAPI.
- PostgreSQL.
- Workflows con LLM y applied AI.
- APIs, webhooks, canales de mensajería e integraciones.
- Frontend de producto y backend orientado a evolución.

La IA es una capacidad aplicada al flujo, no una promesa de que toda solución requiere agentes o modelos.

## 3. Audiencias

### Primaria

- Equipos que buscan incorporar un ingeniero full-stack con experiencia en producto y applied AI.
- Empresas o líderes que evalúan una colaboración técnica concreta.
- Visitantes provenientes de LinkedIn, GitHub, Upwork u otros canales profesionales.

### Secundaria

- Empresas con procesos operativos que quieren explorar automatización.
- Especialmente organizaciones de logística y transporte terrestre.
- Prospectos que deben continuar la conversación comercial en NuTeam, no en esta landing personal.

## 4. Recorrido implementado

La página se compone en `components/landing/LandingPage.tsx` con este orden:

1. `Header`: navegación a experiencia, proyectos, capacidades, NuTeam y contacto; selector de idioma y CTA de contacto.
2. `Hero`: nombre, rol, propuesta principal, tecnologías y enlaces a experiencia y NuTeam.
3. `Experience`: trayectoria profesional en Roomly, Elenas, Easy Case Legal y trabajo freelance.
4. `Demos`: proyectos técnicos con problema, decisiones, tecnologías, estado real y enlace cuando existe.
5. `Capabilities`: applied AI, backend con Python, frontend de producto e integraciones/eventos.
6. `NuTeam`: frontera entre el portafolio personal y la iniciativa comercial de automatización.
7. `ContactSection`: contacto para roles y colaboraciones, más enlace comercial a NuTeam.
8. `Footer`: nombre, rol, año, LinkedIn y GitHub.
9. `WhatsAppButton`: acceso directo a WhatsApp con mensaje predefinido para roles o colaboraciones.

### Componentes existentes pero no incluidos en el recorrido actual

`HowIWork.tsx` y `FAQ.tsx` existen, pero `LandingPage.tsx` no los renderiza y sus arreglos de contenido están vacíos (`workSteps` y `faqs`). No deben describirse como secciones publicadas hasta conectarlos al recorrido y completar su copy.

## 5. Copy publicado en español

### Hero

- Nombre: `Wilmar Florez Samudio`.
- Rol: `Full-Stack & Applied AI Engineer`.
- Título: `Construyo productos, automatizaciones y software con IA, desde la arquitectura hasta producción`.
- Descripción: `Ingeniero de software con experiencia en producto, frontend, backend e integraciones. Combino TypeScript, React, Python y FastAPI para convertir procesos complejos en herramientas que puedan operarse y mantenerse.`
- CTA primario: `Ver experiencia y proyectos`.
- CTA secundario: `Automatizar un proceso con NuTeam`.

### Experiencia

La sección comunica experiencia construyendo producto y aclara que el trabajo abarca equipos de producto y proyectos propios. Los registros publicados son:

- Roomly, `AI Product Engineer`, feb 2025 - presente.
- Elenas, `Senior Frontend Engineer`, ene 2022 - jun 2024.
- Elenas, `Mid Frontend Developer`, nov 2020 - dic 2021.
- Easy Case Legal, `Mid Frontend Developer`, ene 2020 - oct 2020.
- Freelance, `Software Developer`, feb 2017 - ene 2020.

Estas afirmaciones deben mantenerse factuales y actualizarse cuando cambien los periodos o responsabilidades.

### Proyectos

La sección se titula `Proyectos técnicos` y presenta dos piezas de evidencia:

#### Roomly

- Tipo: producto propio.
- Estado: construido y desplegado; en etapa de validación.
- Problema: coordinar conversaciones operativas por WhatsApp sin perder contexto, control del flujo ni intervención humana.
- Decisiones: workflows conversacionales deterministas, uso controlado de LLM, escalamiento humano y arquitectura por capas con webhooks.
- Tecnología: FastAPI, PostgreSQL y WhatsApp Business API.
- Límite explícito: no se presenta como producto con clientes, usuarios activos o resultados comerciales demostrados.

#### Freight Pilot

- Tipo: demo de portafolio.
- Estado: demo desplegada.
- Problema: preparar información de solicitudes de cotización recibida en texto libre, mostrando datos faltantes o ambiguos y conservando trazabilidad.
- Decisiones: extracción con IA, validación determinista, revisión humana de excepciones y registro de texto, incidencias y correcciones.
- Tecnología: Next.js, FastAPI y PostgreSQL.
- Límite explícito: no calcula precios, genera cotizaciones ni asigna vehículos; no es proyecto de cliente ni producto comercial validado.
- Enlace: `https://freight-pilot-flame.vercel.app/`.

Las etiquetas y estados deben seguir siendo exactos. No convertir productos propios o demos en casos de cliente.

### Capacidades

1. `Applied AI y workflows con LLM`: interpretación o propuesta de acciones con límites explícitos, reglas deterministas y escalamiento humano.
2. `Backend con Python`: APIs y servicios con Python, FastAPI y PostgreSQL.
3. `Frontend de producto`: interfaces con TypeScript y React/Next.js.
4. `Integraciones y eventos`: APIs, webhooks, mensajería y sistemas existentes.

### NuTeam

Copy publicado: NuTeam es la iniciativa comercial mediante la cual Wilmar evalúa y construye automatizaciones para procesos operativos, con foco inicial en logística.

La frontera es intencional:

- esta landing demuestra quién es Wilmar y qué puede ejecutar;
- NuTeam explica la oferta comercial y recibe consultas de empresas que quieren automatizar un proceso.

Enlace vigente: `https://www.nuteam.ai/`.

### Contacto

El contacto personal está orientado a `roles y colaboraciones`:

- título: `Quiero conversar sobre un rol o colaboración`;
- formulario: nombre, correo, empresa, cargo y descripción del rol o colaboración;
- enlace comercial separado: `Ir al formulario de NuTeam`.

No presentar el formulario personal como el canal para vender automatización empresarial. Para eso se debe dirigir al visitante a NuTeam.

## 6. Contacto y comportamiento real

El formulario sí tiene una ruta de backend en `/api/contact`.

### Flujo

1. El cliente envía el formulario a `/api/contact`.
2. Se valida origen, límite de cinco solicitudes por IP cada quince minutos, campos y correo.
3. Se rechazan o neutralizan envíos con honeypot (`website`).
4. Se valida el token de Cloudflare Turnstile.
5. Se envía el registro a `GOOGLE_SHEETS_ENDPOINT` usando `GOOGLE_SHEETS_SHARED_SECRET`.
6. La interfaz muestra éxito solo cuando la integración devuelve una respuesta válida.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
- `TURNSTILE_SECRET_KEY`.
- `GOOGLE_SHEETS_ENDPOINT`.
- `GOOGLE_SHEETS_SHARED_SECRET`.

### Canales adicionales

El botón flotante de WhatsApp abre `https://wa.me/573184323342` con un mensaje predefinido para hablar sobre un rol o colaboración. Es un canal personal, no el flujo comercial de NuTeam.

## 7. Idiomas y rutas

- Español: `/` con `lang="es"` y locale `es_CO` en Open Graph.
- Inglés: `/en`.
- El contenido de ambas versiones vive en `components/landing/data.ts`.
- Los cambios de estructura deben aplicarse una sola vez en los componentes; el copy se mantiene separado por locale.

## 8. Evidencia y credibilidad

La página puede afirmar únicamente lo que está respaldado por el contenido actual:

- experiencia profesional listada en `data.ts`;
- Roomly como producto propio construido y desplegado en validación;
- Freight Pilot como demo desplegada;
- capacidades técnicas descritas sin resultados comerciales inventados;
- enlaces reales a LinkedIn, GitHub, NuTeam y Freight Pilot.

No agregar sin verificación:

- clientes, testimonios, logos o métricas;
- usuarios activos o resultados de Roomly;
- resultados de negocio de Freight Pilot;
- certificaciones, años adicionales o claims de dominio;
- promesas de ahorro, ROI, velocidad o respuesta.

## 9. Dirección visual vigente

La implementación usa una dirección editorial, técnica y sobria:

- Geist Sans como tipografía principal y Geist Mono para etiquetas.
- Paleta mineral con verde funcional.
- Bordes finos, radios contenidos y sombras limitadas.
- Layout responsive con una columna en móvil.
- Sin dashboards ficticios, logos decorativos, gradientes de startup de IA ni fotografías de stock.
- Estados de foco y etiquetas de formulario visibles.
- Respeto por `prefers-reduced-motion`.

Los patrones visuales deben comunicar capacidad de construcción y claridad profesional, no una agencia genérica ni un SaaS listo para instalar.

## 10. Pendientes reales

Estos pendientes corresponden a la implementación actual, no a funcionalidades que deban describirse como publicadas:

- Verificar en producción las variables de Turnstile y Google Sheets.
- Definir y documentar el tiempo y canal de respuesta posterior al formulario.
- Confirmar que el mensaje de éxito refleja el flujo real de respuesta.
- Completar o eliminar `HowIWork.tsx` y `FAQ.tsx`; hoy no forman parte de la página visible.
- Evaluar si se añade fotografía profesional, sin usar placeholder ni stock.
- Mantener actualizados LinkedIn, GitHub, experiencia y estado de proyectos.
- Decidir si se publica biografía adicional o ubicación, siempre con información verificable.
- Revisar la relación pública entre la marca personal y NuTeam si cambia la oferta comercial.

## 11. Criterios para futuros cambios

1. La landing personal debe seguir vendiendo a Wilmar como profesional individual, no convertirse en la página de NuTeam.
2. El primer recorrido debe explicar qué construye, con qué capacidades y para qué tipo de colaboración.
3. La experiencia y los proyectos deben conservar estado y límites explícitos.
4. La logística puede crecer como especialización, pero no debe volver a ser una restricción implícita para contratación general.
5. Todo CTA debe corresponder a un destino funcional y a una expectativa realista.
6. El contenido repetido debe actualizarse en `components/landing/data.ts`, no quedar duplicado en componentes.
7. Cualquier nuevo caso, demo o prototipo debe identificarse por su tipo real: producto propio, demo, prototipo o caso autorizado.
8. Antes de publicar cambios relevantes, validar español, inglés, escritorio, móvil, formulario y enlaces externos.

## 12. Verificación técnica registrada

La implementación actual cuenta con:

- componentes React/Next.js separados por sección;
- contenido centralizado por idioma;
- API de contacto con validación, honeypot, rate limit y Turnstile;
- enlaces externos con apertura en nueva pestaña y texto accesible;
- `pnpm exec tsc --noEmit`, `pnpm lint` y `pnpm build` como comandos de verificación del proyecto.

No existe una suite de pruebas automatizadas configurada. La validación visual debe hacerse en desktop y móvil después de cambios de UI.
