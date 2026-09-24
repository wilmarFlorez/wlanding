# Continuidad de sesión — Campaña 01

**Última actualización:** 24 de septiembre de 2026

## Estado actual

- Campaña: `CO_Search_Automatizacion_Flujos_01` / `Campaign #1`.
- Mercado: Colombia, español.
- Estado: activa desde el 21 de septiembre de 2026; han transcurrido dos días completos de pauta al iniciar el 23 de septiembre.
- Presupuesto de prueba: aproximadamente COP 34.000 diarios.
- Objetivo: 3 leads cualificados en 30 días de pauta activa.
- T1 — atribución del formulario hasta Google Sheets: implementada, desplegada y validada en producción el 24 de septiembre de 2026.

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
- Después del despliegue de T1, Tag Assistant mostró el evento `conversion` y el hit `Enviar formulario de clientes potenciales` en `AW-18456241301` al enviar correctamente el formulario.
- Las pruebas de producción de escritorio Chrome e iPhone Chrome guardaron las cuatro UTMs, `gclid`/`gbraid` sintéticos y la landing inicial `/`, también al completar el formulario desde `/en`. Las filas están identificadas como pruebas y no cuentan como leads.
- En la prueba desde Brave, el navegador quitó `gclid` antes de cargar la landing; Chrome conservó ambos identificadores sintéticos. No inferir una atribución real de Ads a partir de estas pruebas.

## Próximos pasos

- **T1 completada:** el contrato opcional, la captura por sesión de pestaña, la migración de encabezados, la compatibilidad con el formulario antiguo y la validación de producción están documentados en el plan completo.
- **T2 pendiente:** Wilmar verifica etiquetado automático, sufijo UTM, destino y configuración de conversión en Google Ads. Mantener el destino actual sin añadir `#contacto`. La primera conversión atribuida a un clic real sigue pendiente; los IDs sintéticos fueron solo pruebas.
- **T3 habilitada después de T1:** instrumentar la analítica mínima en GA4 cuando Wilmar facilite/configure la propiedad y el ID de medición, y complete la revisión de privacidad y consentimiento. No duplicar la conversión principal existente.
- Completar la revisión operativa del día 3 el 24 de septiembre: estado, gasto, aprobación, impresiones y clics. No modificar todavía anuncios ni keywords.
- Confirmar el primer evento visible en Google Ads y su posible atribución.
- Revisar términos de búsqueda el 28 de septiembre, después de siete días completos de pauta.
- Enviar un seguimiento a Breiner para ofrecer reprogramación y, si responde, clasificar la calidad del lead sin atribuirlo a Ads hasta contar con evidencia.

## Pendientes conocidos

- La primera conversión atribuida a un clic real de Google Ads está pendiente; la captura técnica en Sheets está validada desde las pruebas QA del 24 de septiembre.
- No hay analítica adicional para sesiones, profundidad, CTA o inicio de formulario.
- No escalar presupuesto sin una decisión explícita de Wilmar.

## Archivos fuente

- Plan completo: `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`.
- Resumen: `README.md`.
- Estrategia del sitio: `../LANDING_STRATEGY.md`.

Al retomar esta campaña, leer primero este archivo y el plan completo. La guía T1–T4 define el orden vigente; T1 ya está desplegada y validada. Continuar con T2 y preparar T3 con el ID de GA4 y la revisión de privacidad/consentimiento; no reinstalar ni alterar la conversión existente sin evidencia de un fallo. Distinguir implementación local, despliegue y validación de producción al actualizar el estado.
