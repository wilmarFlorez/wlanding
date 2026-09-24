# Primera campaña de Google Ads

Este directorio contiene la investigación y planificación de la primera campaña pagada para captar conversaciones sobre automatizaciones personalizadas.

## Estructura actual

```text
marketing_firts_campaing/
├── README.md
├── CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md
└── keyword_grupo_a/
    ├── Keyword_grupo_a.csv
    ├── Keyword_grupo_a_implementacion.csv
    ├── 01_analisis_grupo_a.md
    ├── 02_revision_serp_grupo_a.md
    └── 03_analisis_implementacion.md
```

## Archivos

- `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`: especificación central de la campaña de Google Ads Search, incluyendo objetivo, oferta, keywords, anuncios, landing, medición, tareas y criterios de optimización.
- `keyword_grupo_a/Keyword_grupo_a.csv`: exportación original de Google Keyword Planner para el grupo amplio de automatización de procesos.
- `keyword_grupo_a/Keyword_grupo_a_implementacion.csv`: nueva exportación enfocada en búsquedas relacionadas con contratar o implementar automatizaciones.
- `keyword_grupo_a/01_analisis_grupo_a.md`: clasificación inicial y lectura del primer CSV.
- `keyword_grupo_a/02_revision_serp_grupo_a.md`: revisión manual de resultados de Google para las keywords prioritarias del primer grupo.
- `keyword_grupo_a/03_analisis_implementacion.md`: análisis de la segunda exportación, orientada a búsquedas de implementación.

## Estado del trabajo

La investigación inicial del Grupo A está completada. Ya se completaron una búsqueda amplia en Keyword Planner, una revisión inicial de SERP, una segunda exportación orientada a implementación y su análisis. Los CSV son fuentes originales y no deben modificarse. Las clasificaciones, decisiones y conclusiones deben documentarse en archivos Markdown.

La especificación, investigación y decisiones relacionadas con esta campaña deben permanecer dentro de este directorio. El archivo de campaña es la fuente central del plan; los análisis de keywords funcionan como evidencia y soporte para actualizarlo.

La campaña Search fue activada el 21 de septiembre de 2026. El grupo de anuncios aparece como **“Apto”**; la línea base inmediatamente posterior al lanzamiento mostraba 0 impresiones, 0 clics, COP 0 de costo y 0 conversiones. Al cierre del 22 de septiembre, Google Ads mostraba 146 impresiones, 21 clics, CTR de 14,38 %, CPC promedio de COP 3.669, COP 77.046 de costo y 0 conversiones. La etiqueta base `AW-18456241301` y el evento del formulario están desplegados en la landing; el formulario ya fue probado en producción y registró el lead en Google Sheets y por correo. Tag Assistant detectó correctamente el evento `Enviar formulario de clientes potenciales` después de corregir la etiqueta `send_to`. En Google Ads, la acción aparece en verde como **“Esperando conversiones”**, sin errores visibles. El registro detallado está en `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`.

El presupuesto actual de prueba es de aproximadamente COP 34.000 diarios, cercano a COP 1.000.000 durante 30 días. El estado detallado, las decisiones de keywords y las tareas pendientes están en `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`.

## Criterio de campaña

La campaña busca personas o equipos que necesiten construir una automatización para organizar, extraer, validar, buscar o enviar información entre correos, mensajes, documentos y sistemas. No se limita a logística y no presupone que todos los flujos requieran IA.

## Regla de credibilidad

No agregar en la campaña clientes, métricas, resultados, ahorros, ROI, certificaciones o experiencia sectorial que no estén verificados en el proyecto o proporcionados explícitamente.
