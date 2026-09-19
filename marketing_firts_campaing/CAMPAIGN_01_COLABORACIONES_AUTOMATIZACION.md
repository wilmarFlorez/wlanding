# Campaña 01 — Google Ads Search: automatización de flujos

**Estado:** campaña creada y detenida; anuncios en revisión; la acción de conversión aparece con “Configuración incorrecta” en Google Ads; no activar gasto
**Canal de pago:** Google Ads, Red de Búsqueda
**Mercado e idioma:** Colombia, español
**Duración:** 30 días de pauta activa
**Responsable del plan:** estrategia de marketing (asistente)
**Ejecutor y responsable operativo:** Wilmar Florez Samudio
**Apoyo:** un agente de IA puede asistir con investigación, clasificación y borradores. Wilmar revisa, verifica y aprueba toda decisión de segmentación, keyword, anuncio, landing y lead.

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

**Decisión actual:** la revisión de ambos CSV dejó cuatro candidatas para la prueba: `automatización de procesos`, `automatización empresarial`, `servicios de automatización` y `automatización documental`. La segunda exportación no aportó volumen medible para las variantes más directas de contratación. Esto no confirma que exista una campaña rentable. La campaña ya fue creada, pero permanece detenida hasta confirmar el registro de la conversión.

### Estado de ejecución al 18 de septiembre de 2026

- La cuenta de Google Ads tiene facturación aprobada y la forma de pago fue confirmada.
- Se creó una campaña Search (`Campaign #1`) para Colombia en español, con socios de búsqueda y Red de Display desactivados.
- La campaña está detenida; los anuncios figuran en proceso de revisión.
- Google muestra una advertencia de volumen o relevancia insuficiente de palabras clave. Se revisará con datos reales antes de ampliar la segmentación.
- Se cargaron cuatro keywords provisionales en concordancia de frase. La separación en dos grupos de anuncios y las concordancias exactas quedan pendientes de confirmar en la interfaz.
- Se configuró una puja de maximizar clics con límite de CPC de COP 6.000.
- El presupuesto quedó en aproximadamente COP 34.000 diarios, equivalente a cerca de COP 1.000.000 mensuales; reemplaza el presupuesto inicial de COP 150.000 diarios.
- La etiqueta de Google `AW-18456241301` está desplegada en las rutas `/` y `/en`.
- El evento de conversión del formulario `AW-18456241301/zR2ZcPnxovocEJXJz-BE` está desplegado y se dispara después de una respuesta exitosa de `/api/contact`.
- Se realizó una prueba de producción: el formulario registró el envío en Google Sheets y envió el correo esperado. Sin embargo, la acción de conversión `Enviar formulario de clientes potenciales` aparece actualmente en Google Ads con estado **“Configuración incorrecta”**. Esto indica que la configuración o la detección de la acción todavía requiere revisión; no se debe interpretar como una conversión registrada.
- UTMs, `gclid`, `gbraid` y analítica adicional todavía no están implementados.

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

Crear una campaña nueva con estos parámetros:

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

Añadir estas negativas a nivel de campaña, usando concordancia amplia negativa cuando aplique:

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

Revisar el informe de términos de búsqueda en los días 7, 14, 21 y 30. Añadir negativas solo cuando el término sea inequívocamente irrelevante; no bloquear consultas que puedan indicar una colaboración técnica real.

## Página de destino y CTA

La campaña dirigirá a la landing existente del proyecto. No se requiere construir una nueva página ni una nueva ruta para iniciar esta prueba. El recorrido actual ya presenta el perfil, las automatizaciones, las capacidades, los proyectos y el formulario de contacto.

**Destino actual configurado en Google Ads:** `https://www.wilmarflorez.com/`
**Destino planificado con parámetros:** `https://[dominio-publicado]/?utm_source=google&utm_medium=cpc&utm_campaign=ia_operativa_co_01&utm_content={adgroupid}_{creative}#contacto`
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

Al implementar la ruta, redactar su versión en inglés equivalente y mantener el contenido bilingüe en `components/landing/data.ts` según la arquitectura del sitio. La campaña de compra se ejecuta solo en español para Colombia.

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

**URL final:** `https://[dominio-publicado]/?utm_source=google&utm_medium=cpc&utm_campaign=ia_operativa_co_01&utm_content={adgroupid}_{creative}#contacto`
**Ruta visible sugerida:** `automatizaciones`
**Parámetros finales:** `utm_source=google&utm_medium=cpc&utm_campaign=ia_operativa_co_01&utm_content={adgroupid}_{creative}`

No usar inserción dinámica de keywords hasta tener términos de búsqueda revisados. No afirmar resultados comerciales ni usar lenguaje como “garantizado”, “revolucionario” o “sin esfuerzo”.

## Instrumentación obligatoria

No activar inversión hasta completar y probar:

- Etiqueta de Google (`Google tag`) en todas las rutas relevantes del sitio.
- Conversión de Google Ads que se active solo tras el envío exitoso del formulario, no al hacer clic en el CTA.
- Captura y envío al backend/Google Sheets de `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `gclid` y `gbraid` cuando existan.
- Analítica web con sesiones por fuente, profundidad de visita, clic de CTA, inicio y envío de formulario.
- Prueba en producción del flujo: anuncio/enlace de prueba → landing → formulario → Turnstile → `/api/contact` → Google Sheets → estado visible de éxito.
- Revisión de la información de privacidad y consentimiento requerida para las etiquetas antes de publicarlas.

Sin esto se puede medir gasto y clics, pero no atribuir los formularios ni tomar decisiones de optimización confiables.

## Gestión de leads

Wilmar revisa cada formulario, clasifica el lead y documenta el resultado en una hoja de control. No comunicar un plazo de respuesta hasta que exista un proceso real y confirmado para cumplirlo.

Registrar por lead: fecha, nombre, empresa si aplica, cargo si aplica, campaña, grupo de anuncios, keyword/término de búsqueda cuando sea atribuible, flujo descrito, entrada, reglas, excepciones, sistemas involucrados, estado y calificación.

**Mensaje inicial sugerido:**

> Gracias por compartir el contexto, [Nombre]. Entiendo que hoy reciben [entrada] y que necesitas [organizar, buscar, validar o enviar información]. Para entender si una colaboración técnica tiene sentido, ¿podrías contarme qué datos necesitas obtener, a dónde deben llegar y qué casos requieren revisión humana?

No presentar una solución cerrada, alcance, costo o plazo sin comprender estas condiciones.

## Rutina de optimización

| Momento | Acción obligatoria |
| --- | --- |
| Día 0 | Verificar conversión de prueba, UTMs, formularios y registros antes de activar presupuesto. |
| Días 1 y 3 | Revisar gasto, estado de aprobación, impresiones y errores técnicos. No optimizar aún. |
| Día 7 | Revisar términos de búsqueda, negativas, clics, sesiones, CTA, formularios y calidad. Añadir negativas inequívocas. |
| Día 14 | Pausar keywords sin relación con la oferta o sin señal de intención; conservar las que generen tráfico relevante. No cambiar a amplia. |
| Día 21 | Revisar calidad de leads. Si son poco cualificados, precisar anuncios/landing y negativas antes de subir presupuesto. |
| Día 30 | Cerrar resultados, clasificar todos los leads y decidir la siguiente prueba. |

No optimizar con CTR como objetivo final. La prioridad de decisión es: lead cualificado, formulario enviado, inicio de formulario, clic de CTA, sesión relevante, clic.

## Métricas y reporte

| Métrica | Uso | Fuente |
| --- | --- | --- |
| Impresiones, clics, CTR y gasto | Entrega y relevancia inicial | Google Ads |
| Términos de búsqueda | Intención y negativas | Google Ads |
| Sesiones por UTM | Calidad de tráfico | Analítica web |
| Profundidad, CTA e inicio de formulario | Comprensión y fricción | Analítica web |
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
- [x] Instalar y verificar Google tag y la conversión de formulario enviado en el código; falta que Google Ads registre la prueba.
- [ ] Implementar captura de UTMs, `gclid` y `gbraid` hasta Google Sheets.
- [ ] Configurar eventos de sesión, CTA, inicio y envío de formulario.
- [ ] Revisar privacidad y consentimiento para las etiquetas antes de publicarlas.
- [x] Realizar y documentar una conversión de prueba completa en producción; pendiente de confirmación en Google Ads.

### Configuración y anuncios

- [x] Crear una campaña Search para Colombia, español y redes desactivadas según la tabla; la interfaz la identifica actualmente como `Campaign #1`.
- [ ] Confirmar los dos grupos de anuncios provisionales y cargar concordancias exactas además de las keywords de frase.
- [ ] Añadir la lista inicial de palabras negativas.
- [x] Cargar un anuncio responsivo con los recursos de automatización y colaboración técnica.
- [ ] Configurar URLs finales, UTM y ruta visible.
- [x] Revisar vista previa, límites de caracteres, URL y políticas; los anuncios quedaron en revisión.
- [x] Configurar aproximadamente COP 34.000 diarios y límite de prueba cercano a COP 1.000.000 sin activar gasto todavía.

### Lanzamiento y seguimiento

- [ ] Corregir la acción `Enviar formulario de clientes potenciales`, que aparece con estado “Configuración incorrecta”, y confirmar que Google Ads detecta el evento.
- [ ] Confirmar que la conversión de prueba aparece en Google Ads antes de activar la campaña.
- [ ] Activar la campaña.
- [ ] Revisar gasto y estado en los días 1 y 3.
- [ ] Completar la revisión de términos y calidad del día 7.
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
