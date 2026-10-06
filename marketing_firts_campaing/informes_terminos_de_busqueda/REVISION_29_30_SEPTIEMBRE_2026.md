# Revisión de entrega y términos — 29–30 de septiembre de 2026

**Registrado:** 1 de octubre de 2026  
**Alcance:** comprobación inicial posterior a la reestructuración del 28; no sustituye la evaluación de los siete días completos del 29 de septiembre al 5 de octubre.

## Fuentes

- `informe_de_terminos_de_busqueda_29_30_septiembre_2026.csv`: términos, keyword asociada y segmento por día.
- `terminos_de_busqueda_29_30_septiembre_2026_seg_conversiones.csv`: acción de conversión asociada.
- Capturas de Google Ads compartidas por Wilmar: resumen por grupo, keywords y totales del período.
- Confirmación de Wilmar y evidencia del correo de notificación/respuesta: el contacto asociado no fue una prueba. No se guardan aquí nombres, correo, empresa ni otros datos personales.

Los dos CSV se conservan como exportaciones originales. Para gasto, clics e impresiones se usa el informe diario; el informe segmentado por acción sirve para identificar la conversión registrada.

## Entrega observada

| Fecha | Impresiones | Clics | CTR | CPC promedio | Gasto | Conversiones | Costo/conv. |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 29 sep. | 162 | 8 | 4,94 % | COP 3.786,75 | COP 30.294 | 1 | COP 30.294 |
| 30 sep. | 137 | 10 | 7,30 % | COP 2.985,30 | COP 29.853 | 0 | — |
| **Total** | **299** | **18** | **6,02 %** | **COP 3.341,50** | **COP 60.147** | **1** | **COP 60.147** |

| Grupo de anuncios | Impresiones | Clics | CTR | Gasto | Conversiones |
| --- | ---: | ---: | ---: | ---: | ---: |
| `AG_Automatizacion_General` | 288 | 18 | 6,25 % | COP 60.147 | 1 |
| `AG_Documentos_Informacion` | 11 | 0 | 0,00 % | COP 0 | 0 |

El grupo documental aún no tiene clics; dos días y 11 impresiones son insuficientes para evaluar su mensaje. Todo el gasto y la conversión de este corte corresponden al grupo general.

## Términos y visibilidad

| Alcance del informe | Impresiones | Clics | CTR | Gasto | Conversiones |
| --- | ---: | ---: | ---: | ---: | ---: |
| Términos visibles | 94 | 4 | 4,26 % | COP 11.648 | 1 |
| «Otros términos de búsqueda» | 205 | 14 | 6,83 % | COP 48.499 | 0 |
| **Campaña** | **299** | **18** | **6,02 %** | **COP 60.147** | **1** |

La conversión visible corresponde al término `automatizaciones para empresas`, el 29 de septiembre: variante cercana de concordancia exacta, keyword `[automatización empresarial]`, grupo `AG_Automatizacion_General`; 1 impresión, 1 clic y COP 4.022 de costo. Los otros tres clics con término visible fueron sobre `automatización de procesos`, `automatización de procesos contables` y `automatizacion de procesos`; ninguno registró conversión.

Google no revela los 14 clics de «Otros términos de búsqueda». No se les asigna intención. Tampoco se proponen negativas por consultas que solo generaron impresiones y ningún clic; revisar nuevas exclusiones con la siguiente ventana y según la relevancia inequívoca del término.

En la exportación segmentada por acción, la fila del término de conversión muestra 1 conversión con clics, impresiones y costo en cero. La exportación diaria muestra el clic y su costo. Por tanto, no usar el archivo segmentado por acción para analizar entrega; usarlo para confirmar la acción **`Enviar formulario de clientes potenciales`**.

## Estado del contacto y calificación

- Wilmar confirmó que el formulario generó un contacto real, recibió el correo de notificación y respondió para solicitar contexto del proyecto. No fue una prueba de QA.
- La conversión está registrada por Google Ads bajo `Enviar formulario de clientes potenciales`, asociada en el informe al término y keyword indicados arriba. Wilmar confirma que todavía no ha recibido respuesta a su correo.
- El contacto queda como **conversión real; conversación pendiente; calificación comercial pendiente**. La solicitud expresa interés en una colaboración, pero aún no aporta suficiente contexto sobre un proyecto o flujo para confirmarla como lead cualificado.
- Avance del objetivo: **1 conversión real registrada; 0 leads cualificados confirmados de 3**. No contarla aún como lead cualificado ni usar COP 60.147 como costo por lead cualificado.
- Wilmar compartió la marca `2026-09-29T17:48:45.317Z` (UTC) del registro de Sheets. Si corresponde al campo `captured_at`, es la hora de captura de atribución y no necesariamente la hora exacta de recepción o envío del formulario.

## Decisión y siguiente seguimiento

- Mantener estructura, keywords, puja y presupuesto durante la ventana de observación; no optimizar por el CTR ni por las variaciones de solo dos días. Cambiar antes únicamente ante un fallo técnico o tráfico inequívocamente irrelevante, y documentar la decisión de Wilmar.
- Hacer un control operativo breve diario: estado de campaña y anuncios, gasto por grupo y nuevos formularios/conversiones. Registrar lo observado; no hacer ajustes diarios por fluctuaciones. No hay monitoreo ni recordatorios automáticos configurados.
- El seguimiento del contacto no es diario: esperar unos días hábiles y, si sigue sin responder, considerar un único recordatorio breve. Si responde antes, retomar la conversación y calificar el contexto.
- Evaluar el **6 de octubre** los siete días completos del **29 de septiembre al 5 de octubre**; incluir este corte inicial y separar conversión, calidad del contacto y volumen del grupo documental.
- Sigue pendiente verificar que los dos anuncios nuevos usen la URL final prevista y hereden correctamente las UTMs. No clicar los anuncios propios para probarlo.
- GA4/T3 sigue sin implementar; no hay datos de sesiones, clics en CTA o inicios de formulario para este corte.
