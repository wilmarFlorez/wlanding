# Campaña 01 — Google Ads Search: automatización de flujos

**Estado:** campaña activa desde el 21 de septiembre de 2026; grupo de anuncios apto; la línea base al momento de la activación no registraba impresiones, clics ni gasto
**Canal de pago:** Google Ads, Red de Búsqueda
**Mercado e idioma:** Colombia, español
**Duración:** 30 días de pauta activa
**Responsable del plan:** estrategia de marketing (asistente)
**Ejecutor y responsable operativo:** Wilmar Florez Samudio
**Apoyo:** un agente de IA puede asistir con investigación, clasificación y borradores. Wilmar revisa, verifica y aprueba toda decisión de segmentación, keyword, anuncio, landing y lead.

**Estado de implementación:** **T1 — Atribución del formulario hasta Google Sheets** quedó implementada, desplegada y validada en producción el 24 de septiembre de 2026. Siguen pendientes T2 —verificación de URLs y conversión en Google Ads— y T3 —analítica mínima en GA4—. T3 está habilitada tras validar T1; requiere propiedad/ID de GA4 y revisión de privacidad y consentimiento. Las casillas pendientes no son una orden de implementar todo el plan a la vez.

## Decisión estratégica

La primera campaña pagada capta intención de búsqueda existente: personas, profesionales y equipos que buscan automatizar un flujo de trabajo repetitivo con software, integraciones o IA aplicada. Puede ser un proceso de una empresa o el trabajo cotidiano de una persona que recibe muchos correos, mensajes o documentos y necesita organizar cierta información, buscarla o enviarla a otro sistema.

Google Search se elige antes que LinkedIn Ads porque la persona que busca una solución para automatizar un proceso ya expresa una necesidad. LinkedIn Ads se evaluará después, como una prueba distinta de generación de demanda o remarketing, no como parte de este presupuesto.

La logística y el transporte terrestre no son el foco de esta campaña. Se mantienen como una especialización y ejemplo técnico visible en el portafolio, pero se validarán después con una campaña puntual e independiente.

## Objetivo único

Conseguir **3 leads cualificados** mediante el formulario del sitio durante 30 días de pauta activa.

Un lead cualificado es un contacto que cumple todos estos criterios:

- tiene un flujo real propio o dentro de una empresa, no una búsqueda de empleo, formación o una consulta académica;
- describe un proceso con entradas identificables —mensajes, correos, formularios, documentos o texto libre—;
- quiere explorar una implementación o colaboración técnica, no solo comprar una herramienta lista para usar;
- puede decidir sobre el flujo, contratar el trabajo o presentar el contexto a quien toma esa decisión.

El envío exitoso del formulario será la conversión de Google Ads. La calificación posterior será el resultado de negocio. Un clic o un formulario sin contexto no cuenta como lead cualificado.

## Hipótesis

Si una persona en Colombia busca términos de intención comercial relacionados con automatizar correos, mensajes, documentos o información de trabajo y llega a una página que explica el flujo completo —entrada, procesamiento, reglas, excepciones y revisión humana cuando corresponde—, una parte de esas visitas enviará el formulario para explorar una colaboración técnica concreta.

La hipótesis se considera apoyada con 3 leads cualificados. Antes de cambiar de canal, se revisarán términos de búsqueda, calidad de tráfico, claridad de la landing y fricción del formulario.

## Oferta, mensaje y evidencia

**Oferta:** una conversación para entender un flujo de trabajo y evaluar si una colaboración técnica puede diseñar e implementar una automatización. El alcance puede ir desde organizar información entrante y pasarla a otro sistema hasta un proceso con IA aplicada, integraciones, reglas y controles humanos. No se presupone que todo flujo necesite IA ni que deba ser complejo.

**Mensaje central:**

> Automatizar un flujo no consiste solo en generar una respuesta. Una implementación útil define qué información entra, qué se organiza o interpreta, qué reglas se validan, qué excepciones revisa una persona y cómo llega el resultado al siguiente sistema o responsable.

**Evidencia permitida:**

- Wilmar es Full-Stack & Applied AI Engineer.
- Construye productos, automatizaciones y software con IA.
- Combina TypeScript, React, Python, FastAPI, PostgreSQL, APIs, webhooks, mensajería e integraciones.
- Freight Pilot es una demo desplegada que muestra extracción estructurada con IA, validación determinista, trazabilidad y revisión humana para solicitudes de transporte terrestre en texto libre. Es evidencia del enfoque técnico, no el foco sectorial de esta campaña.

**Límites obligatorios:** no prometer ahorro, ROI, plazos, resultados, automatización autónoma ni una herramienta lista para comprar. Freight Pilot no calcula precios, no genera cotizaciones, no asigna vehículos, no es proyecto de cliente y no es producto comercial validado.

## Avance de investigación y decisión actual

La primera ronda de investigación ya fue ejecutada y está documentada en `keyword_grupo_a/`. El objetivo de esta fase es elegir búsquedas con intención suficiente, no seleccionar keywords únicamente por volumen.

- [x] Consultar Google Keyword Planner para Colombia con un grupo amplio de términos.
- [x] Registrar volumen mensual estimado, intervalo de puja y competencia en `Keyword_grupo_a.csv`.
- [x] Revisar manualmente las SERP de las keywords prioritarias en `02_revision_serp_grupo_a.md`.
- [x] Clasificar preliminarmente la intención y descartar búsquedas educativas, industriales o centradas en software listo para usar.
- [x] Exportar una segunda búsqueda orientada a implementación en `Keyword_grupo_a_implementacion.csv`.
- [x] Analizar la segunda exportación y seleccionar las keywords provisionales en `03_analisis_implementacion.md`.
- [x] Revisar si las nuevas semillas tienen datos suficientes para una nueva SERP; no se priorizaron porque aparecen sin volumen estimado.

**Decisión actual:** la revisión de ambos CSV dejó cuatro candidatas para la prueba: `automatización de procesos`, `automatización empresarial`, `servicios de automatización` y `automatización documental`. La segunda exportación no aportó volumen medible para las variantes más directas de contratación. Esto no confirma que exista una campaña rentable. La campaña se activó el 21 de septiembre de 2026; la atribución técnica del formulario a Sheets se validó el 24 de septiembre. La primera conversión atribuida a un clic real en Google Ads sigue pendiente.

### Estado de ejecución al 18 de septiembre de 2026

- La cuenta de Google Ads tiene facturación aprobada y la forma de pago fue confirmada.
- Se creó una campaña Search (`Campaign #1`) para Colombia en español, con socios de búsqueda y Red de Display desactivados.
- La campaña está detenida; los anuncios figuran en proceso de revisión.
- Google muestra una advertencia de volumen o relevancia insuficiente de palabras clave. Se revisará con datos reales antes de ampliar la segmentación.
- Se cargaron cuatro keywords provisionales en concordancia de frase. La separación en dos grupos de anuncios y las concordancias exactas quedan pendientes de confirmar en la interfaz.
- Se configuró una puja de maximizar clics con límite de CPC de COP 6.000.
- El presupuesto quedó en aproximadamente COP 34.000 diarios, equivalente a cerca de COP 1.000.000 mensuales; reemplaza el presupuesto inicial de COP 150.000 diarios.
- La etiqueta de Google `AW-18456241301` está desplegada en las rutas `/` y `/en`.
- El evento de conversión del formulario `AW-18456241301/zR2zCPnxovocEJXJz-BE` está desplegado y se dispara después de una respuesta exitosa de `/api/contact`.
- Se realizó una prueba de producción: el formulario registró el envío en Google Sheets y envió el correo esperado.
- Tras corregir la diferencia de mayúsculas en `send_to`, Tag Assistant detectó el evento `Enviar formulario de clientes potenciales` con la etiqueta base `AW-18456241301`. Google Ads todavía debe actualizar el diagnóstico; esta detección no equivale aún a una conversión atribuida a un clic de anuncio.
- UTMs, `gclid`, `gbraid` y analítica adicional todavía no están implementados.

### Registro de verificación en Google Ads — 21 de septiembre de 2026

- La acción `Enviar formulario de clientes potenciales` aparece con indicador verde y estado **“Esperando conversiones”**.
- La fuente es **Sitio web**, la optimización es **Acción principal** y está incluida en los objetivos de la cuenta.
- Google Ads indicaba que no se registraron conversiones en los últimos 7 días. Este dato corresponde al diagnóstico de la acción de conversión y no permite atribuir formularios sin un clic de anuncio previo.
- No se observa un error de configuración en la vista de detalles.
- La configuración muestra una ventana posclic de 30 días y atribución basada en datos.
- Las conversiones avanzadas aparecen como **“Sin configurar”**; no bloquean esta prueba porque la conversión web básica ya fue detectada por Tag Assistant.
- Antes del lanzamiento, la campaña permanecía detenida hasta iniciar tráfico real y observar una conversión atribuida a un clic de anuncio.

### Registro de lanzamiento — 21 de septiembre de 2026

- Wilmar activó la campaña `Campaign #1` el 21 de septiembre de 2026.
- El grupo de anuncios aparece como **“Apto”**.
- En la captura posterior al lanzamiento: 0 impresiones, 0 clics, COP 0 de costo y 0 conversiones.
- Este registro es una línea base inicial, no evidencia de bajo rendimiento; todavía no hay entrega suficiente para evaluar la campaña.

### Seguimiento inicial — 23 de septiembre de 2026

- La campaña está activa desde el 21 de septiembre de 2026; al iniciar el 23 de septiembre han transcurrido dos días completos de pauta.
- En el informe de Google Ads con período del 16 al 22 de septiembre se observaron 146 impresiones, 21 clics, CTR de 14,38 %, CPC promedio de COP 3.669 y gasto de COP 77.046. Google Ads mostraba 0 conversiones registradas.
- El 21 de septiembre se recibió un formulario de Breiner, técnico de sistemas de Villarroz, interesado en automatizar un flujo de trabajo repetitivo. La conversación inicial se programó para el 23 de septiembre a la 1:20 p. m.; Breiner la marcó como “tal vez” y no asistió.
- El lead llegó después de la activación de campaña, por lo que podría ser atribuible a Google Ads, pero todavía no debe contarse como conversión de campaña: la hoja no almacena UTMs ni `gclid`, y Google Ads no registra aún la conversión.
- Estado del lead: contacto potencial de automatización operativa sin calificar; pendiente de reprogramación o información adicional para comprobar si cumple el criterio de decisión o capacidad de presentar el caso al responsable.
- Decisión: no optimizar anuncios, keywords ni presupuesto antes de completar la revisión operativa del día 3, prevista para el 24 de septiembre, y confirmar el estado de la conversión web en Google Ads.

### Validación de T1 en producción — 24 de septiembre de 2026

- Se actualizó y volvió a desplegar Apps Script en la implementación existente. La migración añadió las ocho columnas de atribución sin modificar la fila histórica de Breiner.
- El formulario publicado, todavía sin atribución, aceptó el payload antiguo; la prueba de Wilmar creó una fila y llegó el correo de notificación.
- Las pruebas etiquetadas desde Chrome de escritorio y Chrome en iPhone conservaron las cuatro UTMs, los valores sintéticos `gclid`/`gbraid`, `landing_url` de la entrada inicial `/` y `captured_at`, incluso al enviar desde `/en`.
- Tag Assistant registró el evento `conversion` y el hit `Enviar formulario de clientes potenciales` bajo `AW-18456241301` después del envío exitoso.
- En Brave, la prueba manual perdió `gclid` antes de llegar a la página; Chrome conservó ambos identificadores. Los valores sintéticos y las filas de prueba no representan leads ni clics reales de Ads. El envío desde iPhone se identificó en el mensaje; su `utm_content` quedó como `desktop` porque se reutilizó ese enlace de QA.
- La primera evidencia completa de atribución de QA quedó disponible el 24 de septiembre; una fila móvil registra `captured_at=2026-09-24T16:33:31.027Z` (UTC).

No se mantendrá el requisito artificial de encontrar diez keywords. Una campaña pequeña puede probar pocas búsquedas relevantes; si el volumen estimado no permite entregar anuncios, se documentará y se evaluará otro canal.

### Hallazgos de la primera revisión SERP

- `automatización de procesos`: mantener para prueba; mezcla software empresarial con alguna oferta de consultoría técnica.
- `automatización empresarial`: mantener para prueba; mezcla software, industria y servicios a medida.
- `servicios de automatización`: mantener para prueba; aparecen servicios de integración y automatización con IA, aunque también industria.
- `automatización documental`: mantener para prueba; aparecen servicios y plataformas de implementación documental.
- `software para automatizar procesos`, `automatización de documentos`, `automatización de datos` y `automatizar reportes`: descartar inicialmente por predominio de software, guías o contenido educativo.
- `automatizar procesos`, `automatización de procesos empresariales`, `automatización de reportes`, `flujo de trabajo automatizado`, `flujos de automatización`, `soluciones de automatización` y `herramienta para automatizar procesos`: dejar para una segunda revisión.

La revisión manual no confirma por sí sola que todos los resultados correspondan a Colombia. La configuración geográfica de Google Ads y los términos de búsqueda reales serán la validación posterior.

## Configuración exacta de Google Ads

Configuración objetivo de la campaña existente. Verificar diferencias en la interfaz y documentarlas; no crear una segunda campaña para aplicar esta tabla:

| Campo | Configuración |
| --- | --- |
| Nombre | `CO_Search_Automatizacion_Flujos_01` |
| Objetivo | Clientes potenciales |
| Tipo | Red de Búsqueda |
| Red de Display | Desactivada |
| Partners de búsqueda | Desactivados durante la prueba inicial |
| Ubicación | Colombia |
| Opción de ubicación | Presencia: personas en Colombia o que se encuentren habitualmente allí |
| Idioma | Español |
| Programación | Continua, sin franjas horarias durante los primeros 14 días |
| Presupuesto diario | Aproximadamente COP 34.000 |
| Presupuesto máximo de prueba | Aproximadamente COP 1.000.000 durante 30 días |
| Conversión primaria | Envío exitoso del formulario existente, después de respuesta válida de `/api/contact` |
| Puja días 1–14 | Maximizar clics con límite de CPC de COP 6.000 |
| Puja desde día 15 | Mantener si no hay conversiones; evaluar Maximizar conversiones solo si el tracking funciona y hay señal de conversiones reales |

El límite de CPC de COP 6.000 es una hipótesis inicial de control para esta prueba, no una referencia validada de mercado. Se revisará con el CPC real, los términos de búsqueda y la entrega observada. No usar puja amplia sin límite durante la primera prueba.

## Estructura de grupos de anuncios y keywords

Usar concordancia de frase y exacta solamente durante los primeros 14 días. No usar concordancia amplia hasta tener términos de búsqueda y conversiones revisados.

### Grupo 1 — automatización general

**Nombre:** `AG_Automatizacion_General`

```text
"automatización de procesos"
[automatización de procesos]
"automatización empresarial"
[automatización empresarial]
"servicios de automatización"
[servicios de automatización]
```

### Grupo 2 — documentos e información no estructurada

**Nombre:** `AG_Documentos_Informacion`

```text
"automatización documental"
[automatización documental]
```

### Grupos todavía no aprobados

```text
automatizar whatsapp para empresas
automatizar correos con ia
integrar whatsapp con crm
```

Estas búsquedas pertenecen a una investigación posterior. No se cargarán en Google Ads hasta obtener datos de Keyword Planner y revisar sus SERP. Las keywords finales deben salir de los archivos de investigación, no de suposiciones.

## Palabras clave negativas iniciales

Lista propuesta para revisión a nivel de campaña; no cargarla completa automáticamente. Usar concordancia amplia negativa solo cuando no bloquee intención pertinente:

```text
curso
cursos
capacitación
certificación
tutorial
guía
pdf
libro
universidad
empleo
empleos
vacante
vacantes
trabajo
trabajos
salario
hoja de vida
cv
prácticas
gratis
gratuito
free
plantilla
plantillas
prompt
prompts
chatgpt gratis
chatbot gratis
descargar
open source
github
industrial
industriales
manufactura
producción
plc
scada
rpa
robotización
robótica industrial
contabilidad
nómina
recursos humanos
finanzas
ventas
```

Las negativas sectoriales se incorporan como protección inicial, pero deben revisarse con los términos de búsqueda reales para confirmar que no bloquean una consulta pertinente.

**Revisión pendiente antes de aplicar la lista:** `trabajo` y `trabajos` pueden excluir consultas relevantes como «automatización de flujos de trabajo». Revisar también las exclusiones sectoriales y de tecnologías según la oferta real. Wilmar debe confirmar qué negativas están ya cargadas; una casilla pendiente no demuestra su ausencia en la cuenta.

Revisar el informe de términos de búsqueda en los días 7, 14, 21 y 30. Añadir negativas solo cuando el término sea inequívocamente irrelevante; no bloquear consultas que puedan indicar una colaboración técnica real.

## Página de destino y CTA

La campaña dirigirá a la landing existente del proyecto. No se requiere construir una nueva página ni una nueva ruta para iniciar esta prueba. El recorrido actual ya presenta el perfil, las automatizaciones, las capacidades, los proyectos y el formulario de contacto.

**Destino actual configurado en Google Ads:** `https://www.wilmarflorez.com/`
**Destino de medición:** conservar `https://www.wilmarflorez.com/` y configurar las UTMs mediante el sufijo de URL final descrito en T2. La propuesta anterior de añadir `#contacto` queda para una decisión posterior sobre el recorrido de la landing.
**Página utilizada:** landing existente en español (`/`), con sección de automatizaciones y formulario en `#contacto`.
**CTA único:** `Cuéntame qué quieres automatizar`

El formulario existente conserva el recorrido real de contacto para roles y colaboraciones. La campaña debe explicar que esta conversación busca evaluar una colaboración técnica; no debe introducir calendario, formulario de terceros, demostración comercial o un plazo de respuesta no confirmado.

### Mensaje de campaña para la landing existente (español)

Estos textos son la referencia del mensaje publicitario y de cualquier ajuste mínimo de copy que se decida hacer en la landing actual. No implican crear una nueva landing ni reemplazar el contenido publicado sin una decisión posterior.

**Eyebrow**
`Colaboración técnica para automatizar flujos`

**Título**
`Convierte correos, mensajes y documentos en información que puedas revisar y usar`

**Subtítulo**
`Diseño y construyo automatizaciones, software e integraciones para flujos donde mensajes, correos, formularios o documentos necesitan organizarse, consultarse o pasar a otro sistema. Uso IA cuando aporta al proceso.`

**Problema**
`Cuando la información llega por distintos canales, el trabajo manual no termina al leerla. Puede ser necesario identificar datos, validar condiciones, encontrar faltantes, buscar contexto o llevar cada caso al sistema o persona correcta.`

**Cómo se estructura una implementación**

- `Entrada: mensajes, correos, formularios, PDFs o documentos.`
- `Procesamiento: extracción estructurada con IA cuando aporta, junto con APIs e integraciones.`
- `Controles: reglas deterministas, datos faltantes y excepciones visibles.`
- `Entrega: información trazable para que una persona o sistema continúe el proceso.`

**Evidencia**
`Freight Pilot es una demo desplegada de portafolio que muestra extracción estructurada, validación determinista y revisión humana de excepciones. Está aplicada a solicitudes de transporte terrestre; no calcula precios, genera cotizaciones ni asigna vehículos.`

**Contacto**
`Si quieres explorar una colaboración técnica, cuéntame qué información entra, qué necesitas organizar, buscar o enviar a otro sistema y dónde se concentra hoy el trabajo manual.`

**CTA**
`Cuéntame qué quieres automatizar`

Si se aprueban ajustes de copy, redactar su versión en inglés equivalente y mantener el contenido bilingüe en `components/landing/data.ts` según la arquitectura del sitio. La campaña de compra se ejecuta solo en español para Colombia.

## Anuncios responsivos de búsqueda

Crear un anuncio responsivo por cada grupo de anuncios. Mantener los titulares y descripciones del grupo correspondiente; no mezclar el mensaje de correos y WhatsApp con búsquedas generales de documentos si no coincide con la consulta.

### Recursos compartidos de titulares (máximo 30 caracteres)

```text
Automatización operativa
IA aplicada a procesos
Procesos con reglas claras
Flujos con revisión humana
Estructura datos dispersos
Integraciones para operar
Explora una colaboración
Mensajes y documentos
Control de excepciones
Automatización a medida
Procesos trazables
IA con controles explícitos
Automatiza correos y mensajes
Envía datos a otro sistema
```

### Descripciones (máximo 90 caracteres)

```text
Construyo automatizaciones, integraciones y flujos con IA cuando aporta.
Conversemos sobre el flujo que quieres organizar, consultar o integrar.
Mensajes, correos o documentos: estructura, excepciones y revisión humana.
Colaboración técnica para evaluar una implementación concreta.
```

### Recursos específicos por grupo

| Grupo | Titulares adicionales | Descripción adicional |
| --- | --- | --- |
| Automatización general | `Automatiza un proceso real` / `Diseña el flujo completo` | `Define entradas, reglas, excepciones y el siguiente paso de tu flujo.` |
| Automatización documental | `Procesa documentos con IA` / `Detecta datos faltantes` | `Convierte información no estructurada en casos trazables para revisar.` |

**URL final:** `https://www.wilmarflorez.com/`
**Ruta visible sugerida:** `automatizaciones`
**Sufijo de URL final:** `utm_source=google&utm_medium=cpc&utm_campaign=ia_operativa_co_01&utm_content={adgroupid}_{creative}`. Configurarlo en un único nivel aplicable de la cuenta, sin duplicarlo en la URL final; ver T2.

No usar inserción dinámica de keywords hasta tener términos de búsqueda revisados. No afirmar resultados comerciales ni usar lenguaje como “garantizado”, “revolucionario” o “sin esfuerzo”.

## Instrumentación obligatoria

La campaña ya está activa. Completar los pendientes siguiendo T1–T3 y verificar la medición existente durante la ejecución:

- Etiqueta de Google (`Google tag`) en todas las rutas relevantes del sitio.
- Conversión de Google Ads que se active solo tras el envío exitoso del formulario, no al hacer clic en el CTA.
- Captura y envío al backend/Google Sheets de `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `gclid` y `gbraid` cuando existan.
- Analítica web con sesiones por fuente, clic de CTA, inicio, éxito y error de formulario. La profundidad de visita se pospone según T3.
- Prueba en producción del flujo: anuncio/enlace de prueba → landing → formulario → Turnstile → `/api/contact` → Google Sheets → estado visible de éxito.
- Revisión de la información de privacidad y consentimiento requerida para las etiquetas antes de publicarlas.

La atribución web de Google Ads puede funcionar sin almacenar UTMs en Sheets; el almacenamiento aporta evidencia adicional para clasificar cada lead. Guardar parámetros no instala ni repara por sí mismo la conversión de Ads. Con el estado actual, el origen del lead recibido sigue sin confirmar y la lectura del recorrido de visitas está incompleta.

## Guía de ejecución para el agente implementador

### Decisión y orden de trabajo — 23 de septiembre de 2026

El objetivo inmediato es obtener evidencia del origen de los próximos contactos sin interrumpir un formulario que ya entrega leads. La línea base disponible es de 21 clics, COP 77.046 de gasto, cero conversiones visibles en Ads y un contacto potencial sin atribución confirmada. No permite concluir que la campaña o el tracking hayan fallado.

| Orden | Tarea | Responsable | Condición de cierre |
| --- | --- | --- | --- |
| Primero | **T1 — Atribución del formulario hasta Google Sheets** | Agente: código y verificaciones locales. Wilmar: despliegue de Apps Script y validación de producción. | Parámetros guardados en una fila real de prueba, con envío normal sin parámetros también verificado. |
| En paralelo con T1 | **T2 — URLs y verificación de conversión en Google Ads** | Wilmar en Google Ads y Tag Assistant, con apoyo del agente. | Sufijo UTM y etiquetado automático verificados; resultado de la prueba del evento documentado. La atribución a un clic real se sigue por separado. |
| Después de T1 validada | **T3 — Analítica mínima del formulario** | Agente: instrumentación. Wilmar: propiedad GA4, configuración y validación de eventos. | Eventos visibles en la herramienta, sin duplicar la conversión principal. |
| Según calendario | **T4 — Seguimiento y calificación** | Wilmar; agente para documentar datos aportados. | Revisión del día 3, reunión/calificación del lead y revisión del día 7 registradas. |

**Primera acción del agente:** leer `AGENTS.md`, `SESSION_HANDOFF.md`, esta guía y la implementación actual de `ContactForm.tsx`, `/api/contact` y `script.js`; revisar el diff para preservar trabajo existente. Antes de escribir código Next.js, consultar las guías pertinentes de `node_modules/next/dist/docs/`. A continuación implementar el contrato y la compatibilidad de T1 en `script.js`, después la API y después la captura del navegador.

### T1 — Atribución del formulario hasta Google Sheets

**Alcance del primer bloque de desarrollo:** capturar parámetros al entrar al sitio, conservarlos durante el recorrido y adjuntarlos al formulario. Los campos visibles del formulario mantienen su función actual.

#### Contrato de datos

Agregar un objeto opcional `attribution` al JSON del formulario y al envío de la API hacia Apps Script. Usar los mismos nombres y límites en ambos extremos:

| Campo dentro de `attribution` | Límite | Origen |
| --- | --- | --- |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` | 256 caracteres cada uno | Query de entrada. |
| `gclid`, `gbraid` | 512 caracteres cada uno | Query de entrada; conservar el valor sin transformar ni truncar. |
| `landing_url` | 2048 caracteres | Origen y pathname de la página donde se capturó la atribución; excluir query y fragmento. |
| `captured_at` | 40 caracteres | Fecha ISO UTC generada al capturar. Es contexto del navegador, no sustituye la fecha de recepción de Sheets. |

- Todos los campos son opcionales. La ausencia de atribución debe ser compatible con formularios anteriores y contactos directos.
- Aceptar solo claves conocidas y valores string no vacíos dentro del límite; ignorar claves desconocidas y omitir campos de atribución inválidos en lugar de rechazar un contacto válido. Si el objeto completo es inválido, omitirlo. Mantener la validación obligatoria actual de los datos del contacto, Turnstile y secreto.
- Validar `landing_url` como URL HTTP(S) sin query ni fragmento y `captured_at` como fecha ISO válida. No capturar la URL completa con parámetros adicionales no incluidos en este contrato.
- Los parámetros son evidencia proporcionada por el navegador, no una prueba autenticada del origen. No convertir automáticamente un contacto con UTM en una conversión confirmada de Ads.

#### Reglas de captura y persistencia

- Ejecutar la captura al montar la landing, tanto en `/` como en `/en`, sin esperar al clic de CTA ni al envío.
- Usar `URLSearchParams` y `sessionStorage`, con una clave versionada propia, por ejemplo `wlanding:attribution:v1`.
- Guardar la primera entrada de la sesión de pestaña que contenga al menos una UTM o identificador de clic válido. Añadir `landing_url` y `captured_at` en ese momento.
- Conservar ese primer conjunto completo durante la sesión de pestaña. Una recarga, una URL sin parámetros o el cambio de idioma no deben borrarlo; tampoco mezclar parámetros de entradas distintas.
- Si primero se entra sin parámetros y luego llega una URL con parámetros dentro de la misma pestaña, capturar ese primer conjunto válido. Si nunca hay parámetros, enviar sin atribución; no inventar `google/cpc` como origen por defecto.
- Manejar almacenamiento bloqueado, JSON corrupto o un esquema inválido sin impedir el formulario. Conservar los datos en memoria durante la página actual como respaldo; documentar que sin almacenamiento no se garantiza persistencia entre recargas.
- Leer y adjuntar el objeto al enviar el formulario, sin incorporar datos de contacto a la URL o al almacenamiento de atribución. Mantenerlo tras errores y tras el envío exitoso durante esa sesión de pestaña.
- Esta primera versión no implementa atribución entre dispositivos, entre pestañas ni entre sesiones posteriores. La ventana de conversión de Ads es independiente de esta persistencia.

#### Archivos y responsabilidades

| Archivo | Trabajo esperado |
| --- | --- |
| `script.js` | Admitir `attribution` en `allowedFields`, validar sus campos y escribir las nuevas columnas. Seguir aceptando solicitudes antiguas sin el objeto. |
| `app/api/contact/route.ts` | Normalizar el objeto opcional y reenviarlo a Apps Script manteniendo Turnstile, límite de solicitudes y validación del contacto. |
| `components/landing/ContactForm.tsx` | Adjuntar atribución al payload sin alterar el evento de conversión existente salvo que se demuestre un fallo. |
| Utilidad/componente pequeño de atribución | Concentrar lectura, validación y persistencia del navegador; usarlo desde la landing compartida y el formulario. No convertir toda la página en un componente cliente para esta función. |
| `components/landing/LandingPage.tsx` | Montar la captura compartida para ambas rutas, si se necesita un componente cliente dedicado. |

**Migración de la hoja existente:** conservar las seis columnas actuales y añadir, en este orden, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `gclid`, `gbraid`, `landing_url` y `captured_at`. Verificar los encabezados reales antes de desplegar. Si existen columnas manuales, conservarlas y escribir por posición de encabezado, sin sobrescribirlas. La migración debe ser idempotente y funcionar también al crear una hoja vacía. Cambiar únicamente la constante `HEADERS` no basta: hoy los encabezados solo se crean cuando la hoja está vacía.

Aplicar `safeCell` también a los nuevos valores. Las filas históricas conservan sus datos y quedan sin atribución donde esta no existe. No completar el origen de Breiner por inferencia. El correo de notificación debe seguir llegando; incluir la atribución en el correo no es requisito de cierre.

#### Orden de despliegue

La secuencia es esencial porque el Apps Script actual rechaza campos desconocidos:

1. Preparar y verificar los cambios localmente, incluida la compatibilidad con payloads antiguos.
2. Wilmar actualiza **y vuelve a desplegar** Apps Script como Web App, manteniendo el endpoint existente cuando sea posible; verificar secreto, hoja y encabezados. El despliegue de Next.js no publica `script.js`.
3. Verificar que el formulario publicado, todavía sin atribución, sigue creando una fila y enviando el correo contra ese Apps Script actualizado.
4. Publicar API y frontend con captura de atribución. Si cambia el endpoint de Apps Script, actualizar la variable de entorno del despliegue antes de esta publicación.
5. Ejecutar las pruebas de aceptación de producción y registrar la fecha/hora desde la que existen datos de atribución.

Si se necesita revertir la aplicación, el Apps Script ampliado debe seguir aceptando el payload antiguo. No eliminar las columnas nuevas ni las filas existentes para revertir.

#### Verificación y criterios de aceptación de T1

Usar `pnpm@9.13.0` y ejecutar, en orden: `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`. Verificar de forma focalizada normalización, persistencia y migración idempotente; no hace falta introducir un framework de tests para este bloque.

- [x] Un envío sin UTMs ni identificadores sigue completando Turnstile → API → Sheets → correo → éxito visible.
- [x] Un enlace de prueba con las cuatro UTMs conserva esos valores hasta la fila de Sheets al recargar y navegar entre `/` y `/en` en la misma pestaña; se verificó persistencia local y navegación entre rutas en producción.
- [x] `gclid` y `gbraid` se conservaron exactamente en pruebas de producción con valores sintéticos, sin presentarlos como clics reales de Ads.
- [x] Una URL sin parámetros no borra la atribución y una segunda entrada etiquetada no sustituye ni mezcla el primer conjunto; verificación de navegación y captura focalizada.
- [x] Con almacenamiento bloqueado o corrupto, el formulario sigue funcionando; con datos opcionales inválidos, el contacto válido sigue llegando, según verificaciones focalizadas locales.
- [x] La hoja existente conserva filas y columnas; la migración repetida no duplica encabezados y una solicitud antigua sigue siendo aceptada.
- [x] La prueba de producción funciona en escritorio y móvil; las filas de Wilmar están identificadas como pruebas y excluidas del conteo de leads cualificados.
- [x] Tag Assistant detectó `Enviar formulario de clientes potenciales` después del éxito. La conversión solo se llama en la rama de respuesta exitosa del formulario.

Usar en producción UTMs identificables como `utm_source=qa&utm_medium=test&utm_campaign=attribution_validation&utm_content=desktop` o `mobile`. No hacer clic en anuncios propios para probar. Registrar por separado la prueba técnica y cualquier conversión atribuida a un clic real. T1 no necesita esperar a la primera conversión atribuida para darse por validada técnicamente.

### T2 — URLs y verificación de conversión en Google Ads

Wilmar ejecuta estas acciones en la cuenta mientras se prepara T1:

- Confirmar el etiquetado automático. No construir ni añadir manualmente un `gclid` a los anuncios.
- Revisar los parámetros ya existentes y configurar una sola vez el sufijo `utm_source=google&utm_medium=cpc&utm_campaign=ia_operativa_co_01&utm_content={adgroupid}_{creative}`, sin `?` inicial y sin duplicarlo en la URL final.
- Conservar como destino `https://www.wilmarflorez.com/`. No añadir ahora `#contacto`: saltar directamente al formulario cambia el recorrido y no es necesario para instrumentar atribución.
- Usar las herramientas de prueba de URL de Ads para comprobar el destino, la sustitución de ValueTrack y las redirecciones. Verificar con un enlace de prueba que las UTMs llegan al navegador y, después de desplegar T1, a Sheets.
- Revisar que la acción principal sigue siendo `Enviar formulario de clientes potenciales`, con `send_to` igual a `AW-18456241301/zR2zCPnxovocEJXJz-BE`. Confirmar que la configuración de recuento es apropiada para leads, normalmente «Una» por interacción.
- Verificar el evento tras un envío exitoso en Tag Assistant y documentar fecha, resultado y diagnóstico de Ads. Si continúa mostrando cero conversiones, revisar período del informe, retraso de reporte y evidencia de un clic atribuible antes de diagnosticar una falla.

**Cierre de T2:** registrar lo comprobado en la cuenta y la prueba técnica. Mantener como pendiente separado la primera conversión atribuida real. La detección de Tag Assistant, una fila con UTMs y una conversión atribuida en Ads son evidencias distintas.

### T3 — Analítica mínima del formulario

Comenzar después de validar T1. Usar GA4 para este bloque: Wilmar debe facilitar o configurar una propiedad/flujo web y su ID de medición. No inventar un ID ni marcar eventos como verificados si no se tiene acceso a la herramienta. Completar la revisión de privacidad y consentimiento ya pendiente en este plan antes de publicar la instrumentación adicional.

Integrar GA4 con la carga existente de Google tag en `components/analytics/GoogleAdsTag.tsx`, o refactorizar ese componente compartido para ambos destinos. Mantener una sola carga del script y configurar Ads y GA4 sin duplicar páginas vistas. Ambas rutas usan el componente desde sus respectivos layouts.

| Evento/señal | Definición de implementación |
| --- | --- |
| `page_view` y sesiones por fuente | Medición de GA4 con UTMs; no crear otro contador manual de sesiones. |
| `contact_cta_click` | Clic en un enlace o botón que lleva al formulario; adjuntar una ubicación estable del CTA y el idioma. |
| `contact_form_start` | Primera interacción real con un campo visible del formulario, una vez por carga de página; no contar solo la visualización. |
| `contact_form_success` | Respuesta exitosa de `/api/contact`, junto al punto de disparo de la conversión existente. |
| `contact_form_error` | Error de red o respuesta fallida del endpoint; enviar solo una categoría técnica estable, sin el payload ni el texto del contacto. |

- Enviar los eventos de diagnóstico al destino GA4 explícitamente. Mantener el evento `conversion` actual dirigido a Ads.
- No enviar nombre, correo, empresa, cargo, mensaje ni identificadores de clic como parámetros personalizados de estos eventos.
- Revisar la medición mejorada de formularios de GA4 para evitar contar señales automáticas y manuales como dos resultados del mismo envío. El resultado fiable es `contact_form_success`, no un submit anterior a la respuesta del backend.
- CTA, inicio y error son diagnósticos; no convertirlos en conversiones principales de Ads. No importar el éxito de GA4 como una segunda conversión principal junto a la ya existente de Ads.
- Validar en DebugView o herramienta equivalente el recorrido exitoso y el fallido. Documentar desde qué fecha está disponible la medición; los eventos nuevos no reconstruyen visitas históricas.

La profundidad de scroll queda para una iteración posterior si aporta a una pregunta concreta. T3 se considera completa cuando permite distinguir llegada, intención de contacto, inicio, éxito y error, sin duplicar la conversión principal.

### T4 — Seguimiento operativo y tareas posteriores

- **24 de septiembre, día 3:** revisar estado, gasto, entrega y errores técnicos; registrar también el avance de T1/T2. No esperar a terminar T3 para realizar esta revisión.
- **Lead recibido:** completar la conversación con Breiner y evaluar flujo, entradas y capacidad de decisión o escalamiento. Su calidad se puede calificar aunque el origen siga sin confirmar.
- **28 de septiembre, día 7:** revisar términos reales y negativas; comprobar qué grupos y concordancias están efectivamente cargados. Proponer cambios con evidencia para decisión de Wilmar.
- Dejar para decisiones posteriores la nueva landing, cambios importantes de copy, salto automático a `#contacto`, ampliación de keywords, reestructuración de grupos, aumento de presupuesto y cambio de puja. Las casillas históricas de configuración son puntos por verificar, no instrucciones de modificar una campaña activa de inmediato.
- Si se confirma una falla del formulario o del tracking, Wilmar pausa la pauta y se corrige antes de interpretar rendimiento. La ausencia de una conversión atribuida, por sí sola, no confirma ese fallo.

### Entrega y actualización del estado

Al cerrar cada tarea, el agente registra archivos modificados, verificaciones ejecutadas y resultado, despliegues realizados o pendientes, evidencia de producción y fecha de inicio de la medición. Actualizar este documento y `SESSION_HANDOFF.md` con la próxima acción concreta.

No marcar una tarea como completada únicamente porque el código esté escrito: distinguir **implementada localmente**, **desplegada** y **validada en producción**. Si falta acceso a Ads, GA4, Apps Script o Sheets, entregar los pasos exactos que debe ejecutar Wilmar y dejar la validación correspondiente pendiente.

## Gestión de leads

Wilmar revisa cada formulario, clasifica el lead y documenta el resultado en una hoja de control. No comunicar un plazo de respuesta hasta que exista un proceso real y confirmado para cumplirlo.

Registrar por lead: fecha, nombre, empresa si aplica, cargo si aplica, campaña, grupo de anuncios, keyword/término de búsqueda cuando sea atribuible, flujo descrito, entrada, reglas, excepciones, sistemas involucrados, estado y calificación.

**Mensaje inicial sugerido:**

> Gracias por compartir el contexto, [Nombre]. Entiendo que hoy reciben [entrada] y que necesitas [organizar, buscar, validar o enviar información]. Para entender si una colaboración técnica tiene sentido, ¿podrías contarme qué datos necesitas obtener, a dónde deben llegar y qué casos requieren revisión humana?

No presentar una solución cerrada, alcance, costo o plazo sin comprender estas condiciones.

## Rutina de optimización

| Momento | Acción obligatoria |
| --- | --- |
| Día 0 — referencia de lanzamiento | Verificar conversión de prueba, UTMs, formularios y registros. Los pendientes del lanzamiento ya realizado se completan ahora mediante T1–T3. |
| Días 1 y 3 | Revisar gasto, estado de aprobación, impresiones y errores técnicos. No optimizar aún. |
| Día 7 | Revisar términos de búsqueda, negativas, clics, sesiones, CTA, formularios y calidad. Añadir negativas inequívocas. |
| Día 14 | Pausar keywords sin relación con la oferta o sin señal de intención; conservar las que generen tráfico relevante. No cambiar a amplia. |
| Día 21 | Revisar calidad de leads. Si son poco cualificados, precisar anuncios/landing y negativas antes de subir presupuesto. |
| Día 30 | Cerrar resultados, clasificar todos los leads y decidir la siguiente prueba. |

Con la activación el 21 de septiembre, los hitos se cuentan desde ese día como día 0: día 1, 22 de septiembre; día 3, 24 de septiembre; día 7, 28 de septiembre; día 14, 5 de octubre; día 21, 12 de octubre; y día 30, 21 de octubre. Si la hora exacta de activación impide completar una revisión en esa fecha, se realiza al siguiente día hábil sin adelantar decisiones con datos incompletos.

No optimizar con CTR como objetivo final. La prioridad de decisión es: lead cualificado, formulario enviado, inicio de formulario, clic de CTA, sesión relevante, clic.

## Métricas y reporte

| Métrica | Uso | Fuente |
| --- | --- | --- |
| Impresiones, clics, CTR y gasto | Entrega y relevancia inicial | Google Ads |
| Términos de búsqueda | Intención y negativas | Google Ads |
| Sesiones por UTM | Calidad de tráfico | Analítica web |
| CTA, inicio y error de formulario | Intención de contacto y fricción; profundidad pospuesta | Analítica web |
| Formularios enviados | Conversión de campaña | Google Ads + Google Sheets |
| Leads cualificados | Objetivo de negocio | Hoja de control manual |
| Conversaciones cualificadas | Resultado comercial posterior | Hoja de control manual |

No se establecen metas de CTR, CPC, costo por lead o tasa de conversión antes de la primera línea base. El criterio de éxito es alcanzar 3 leads cualificados sin infringir los límites de credibilidad.

## Lista de tareas de ejecución

### Validación previa

- [x] Crear una hoja de investigación de keywords con volumen, puja, competencia, intención y decisión.
- [x] Ejecutar Keyword Planner para Colombia con el grupo amplio de automatización.
- [x] Revisar manualmente las SERP de los términos prioritarios del Grupo A.
- [x] Exportar una búsqueda adicional orientada a implementación.
- [x] Analizar `Keyword_grupo_a_implementacion.csv` y seleccionar keywords provisionales en `03_analisis_implementacion.md`.
- [x] Revisar las nuevas candidatas disponibles; las semillas más específicas aparecen sin volumen estimado y quedan para una futura validación.
- [x] Comparar y documentar los rangos de CPC del conjunto provisional.
- [x] Elegir y registrar el límite de CPC inicial antes de configurar la campaña: COP 6.000 como límite de prueba.
- [x] Confirmar que la campaña se dirige a personas o equipos que buscan una colaboración técnica, no a contratación ni formación.

### Landing y medición

- [x] Confirmar que la landing existente contiene las secciones de automatizaciones y contacto.
- [x] Confirmar en producción el formulario existente, `/api/contact`, Google Sheets y el correo de notificación; Turnstile forma parte del flujo configurado.
- [x] Instalar Google tag y la conversión de formulario enviado; evento detectado por Tag Assistant y acción en estado «Esperando conversiones». La primera conversión atribuida real sigue pendiente.
- [x] **T1 — Atribución del formulario hasta Google Sheets:** implementada, desplegada y validada en producción el 24 de septiembre; revisar el registro de validación de T1.
- [ ] **T3 — Después de T1:** configurar y validar sesiones, CTA, inicio, éxito y error de formulario en GA4.
- [ ] Revisar privacidad y consentimiento de las etiquetas existentes y antes de publicar la instrumentación adicional de T3.
- [x] Realizar y documentar pruebas de producción sin atribución y con UTMs/IDs sintéticos en escritorio y móvil; Tag Assistant detectó el evento de conversión después del éxito.
- [x] Revisar el detalle de la acción en Google Ads; no se observan errores y el estado es “Esperando conversiones”.

### Configuración y anuncios

- [x] Crear una campaña Search para Colombia, español y redes desactivadas según la tabla; la interfaz la identifica actualmente como `Campaign #1`.
- [ ] Confirmar los grupos y concordancias realmente cargados; decidir ajustes en la revisión de términos, sin reestructurar automáticamente por esta casilla.
- [ ] Revisar las negativas existentes y propuestas, especialmente `trabajo` y `trabajos`; aplicar solo exclusiones pertinentes aprobadas por Wilmar.
- [x] Cargar un anuncio responsivo con los recursos de automatización y colaboración técnica.
- [ ] **T2 — Pendiente:** confirmar etiquetado automático, configurar sufijo UTM y verificar el destino y el evento de conversión según la guía. La ruta visible es un ajuste posterior.
- [x] Revisar vista previa, límites de caracteres, URL y políticas; los anuncios quedaron en revisión.
- [x] Configurar aproximadamente COP 34.000 diarios y presupuesto de prueba previsto cercano a COP 1.000.000; campaña activada posteriormente el 21 de septiembre.

### Lanzamiento y seguimiento

- [x] Corregir la etiqueta `send_to` y confirmar que Tag Assistant detecta el evento `Enviar formulario de clientes potenciales`.
- [ ] Confirmar y documentar la primera conversión atribuida a un clic real en Google Ads durante la campaña activa; no escalar sin revisar medición y calidad de leads.
- [x] Activar la campaña el 21 de septiembre de 2026.
- [ ] Completar la revisión operativa del día 3 el 24 de septiembre.
- [ ] Completar la revisión de términos y calidad del día 7 el 28 de septiembre.
- [ ] Completar la optimización documentada del día 14.
- [ ] Completar la revisión de calidad del día 21.
- [ ] Clasificar cada formulario entrante el mismo día hábil.
- [ ] Preparar el informe de cierre del día 30 y decidir la siguiente iteración.

### Uso del agente de IA

- [ ] Pedir al agente que agrupe keywords y sugiera negativas; comparar toda sugerencia con Keyword Planner y SERP antes de aplicarla.
- [ ] Pedir variantes de anuncios dentro de los límites de caracteres y credibilidad; Wilmar valida exactitud y políticas antes de subirlas.
- [ ] Pedir al agente que clasifique términos de búsqueda exportados como relevantes, dudosos o negativos; Wilmar toma la decisión final.
- [ ] Pedir al agente un borrador de reporte semanal a partir de datos reales; no aceptar inferencias causales ni métricas no medidas.

## Decisión de siguiente iteración

- **3 o más leads cualificados:** conservar el canal y probar una landing más específica para uno de los grupos que haya generado leads, sin cambiar la oferta de colaboración técnica.
- **Clics y sesiones relevantes, pero sin formularios:** revisar propuesta, jerarquía del CTA y fricción del formulario antes de aumentar presupuesto.
- **Formularios poco cualificados:** ajustar negativas, concordancias y copy para dejar claro que se implementan flujos, no se vende software listo para usar.
- **Volumen insuficiente de búsquedas comerciales:** cerrar este experimento y preparar una campaña distinta de LinkedIn Ads; no ampliar Search con keywords informativas o demasiado generales.
- **Falla de tracking o formulario:** pausar pauta y corregir antes de interpretar rendimiento.
