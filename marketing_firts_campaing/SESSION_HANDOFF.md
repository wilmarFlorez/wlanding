# Continuidad de sesión — Campaña 01

**Última actualización:** 23 de septiembre de 2026

## Estado actual

- Campaña: `CO_Search_Automatizacion_Flujos_01` / `Campaign #1`.
- Mercado: Colombia, español.
- Estado: activa desde el 21 de septiembre de 2026; han transcurrido dos días completos de pauta al iniciar el 23 de septiembre.
- Presupuesto de prueba: aproximadamente COP 34.000 diarios.
- Objetivo: 3 leads cualificados en 30 días de pauta activa.

## Línea base y seguimiento inicial

- Grupo de anuncios: **Apto**.
- Impresiones: `0`.
- Clics: `0`.
- Costo: `COP 0`.
- Conversiones: `0`.
- Interpretación: línea base inmediatamente posterior a la activación; todavía no permite evaluar rendimiento.

### Datos observados al cierre del 22 de septiembre

- Impresiones: `146`.
- Clics: `21`.
- CTR: `14,38 %`.
- CPC promedio: `COP 3.669`.
- Costo: `COP 77.046`.
- Conversiones visibles en Google Ads: `0`.
- Estos datos provienen del informe de Google Ads para el período 16–22 de septiembre; no se deben usar todavía para optimizar la campaña.

### Lead recibido el 21 de septiembre

- Breiner, técnico de sistemas de Villarroz, envió el formulario para consultar sobre automatización de un flujo de trabajo repetitivo.
- La conversación inicial por Google Meet quedó programada para el 23 de septiembre a la 1:20 p. m. Breiner la marcó como “tal vez” y no asistió.
- El lead llegó después de activar la campaña y podría provenir de Google Ads, pero no hay atribución confirmada: Google Sheets no almacena UTMs ni `gclid`, y Google Ads aún no registra la conversión.
- Estado: potencial sin calificar; falta reprogramar o recibir más contexto para comprobar necesidad concreta, entradas, reglas, excepciones, sistemas y capacidad de decisión o escalamiento.

## Medición validada

- Google tag: `AW-18456241301`.
- Conversión web: `AW-18456241301/zR2zCPnxovocEJXJz-BE`.
- Formulario: envía datos a Google Sheets y correo mediante `/api/contact`.
- Tag Assistant detectó correctamente `Enviar formulario de clientes potenciales` después de corregir `send_to`.
- En Google Ads, la acción aparece en verde como **“Esperando conversiones”**, sin errores visibles.
- Todavía no existe una conversión atribuida a un clic de anuncio en Google Ads. La campaña está activa; se debe revisar el retraso de reporte y el disparo del evento antes de interpretar el cero como un fallo.
- Conversiones avanzadas: sin configurar; no bloquean esta prueba básica.

## Próximo paso

- **Primera tarea de implementación: T1 — Atribución del formulario hasta Google Sheets.** Seguir la sección «Guía de ejecución para el agente implementador» del plan completo: contrato opcional `attribution`, captura por sesión de pestaña, migración de encabezados y despliegue de Apps Script antes de publicar API/frontend.
- **T2, en paralelo con T1:** Wilmar verifica etiquetado automático, sufijo UTM y evento de conversión en Ads. Mantener el destino actual sin añadir `#contacto` durante esta implementación.
- **T3, después de validar T1:** instrumentar analítica mínima en GA4, con propiedad/ID y validación de Wilmar. No duplicar la conversión principal existente.
- Completar la revisión operativa del día 3 el 24 de septiembre: estado, gasto, aprobación, impresiones y clics. No modificar todavía anuncios ni keywords.
- Confirmar el primer evento visible en Google Ads y su posible atribución.
- Revisar términos de búsqueda el 28 de septiembre, después de siete días completos de pauta.
- Enviar un seguimiento a Breiner para ofrecer reprogramación y, si responde, clasificar la calidad del lead sin atribuirlo a Ads hasta contar con evidencia.

## Pendientes conocidos

- UTMs, `gclid` y `gbraid` aún no se capturan en Google Sheets.
- No hay analítica adicional para sesiones, profundidad, CTA o inicio de formulario.
- No escalar presupuesto sin una decisión explícita de Wilmar.

## Archivos fuente

- Plan completo: `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`.
- Resumen: `README.md`.
- Estrategia del sitio: `../LANDING_STRATEGY.md`.

Al retomar esta campaña, leer primero este archivo y el plan completo. La guía T1–T4 define el orden vigente; las casillas históricas no ordenan ejecutar todo de inmediato. Incorporar la atribución pendiente y, después, la analítica mínima según esa guía; no reinstalar ni alterar la conversión existente sin evidencia de un fallo. Distinguir implementación local, despliegue y validación de producción al actualizar el estado.
