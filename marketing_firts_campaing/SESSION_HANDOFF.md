# Continuidad de sesión — Campaña 01

**Última actualización:** 21 de septiembre de 2026

## Estado actual

- Campaña: `CO_Search_Automatizacion_Flujos_01` / `Campaign #1`.
- Mercado: Colombia, español.
- Estado: activa desde el 21 de septiembre de 2026; revisar entrega antes de tomar decisiones.
- Presupuesto de prueba: aproximadamente COP 34.000 diarios.
- Objetivo: 3 leads cualificados en 30 días de pauta activa.

## Primer registro tras lanzamiento

- Grupo de anuncios: **Apto**.
- Impresiones: `0`.
- Clics: `0`.
- Costo: `COP 0`.
- Conversiones: `0`.
- Interpretación: línea base inmediatamente posterior a la activación; todavía no permite evaluar rendimiento.

## Medición validada

- Google tag: `AW-18456241301`.
- Conversión web: `AW-18456241301/zR2zCPnxovocEJXJz-BE`.
- Formulario: envía datos a Google Sheets y correo mediante `/api/contact`.
- Tag Assistant detectó correctamente `Enviar formulario de clientes potenciales` después de corregir `send_to`.
- En Google Ads, la acción aparece en verde como **“Esperando conversiones”**, sin errores visibles.
- Todavía no existe una conversión atribuida a un clic de anuncio porque la campaña permanece detenida.
- Conversiones avanzadas: sin configurar; no bloquean esta prueba básica.

## Próximo paso

- Decidir explícitamente cuándo iniciar la prueba con tráfico real.
- Antes de activar: revisar anuncios, keywords, negativas y URL final.
- Tras activar: revisar aprobación, gasto, impresiones, clics y términos de búsqueda en los días 1 y 3.
- Confirmar la primera conversión atribuida en Google Ads; después revisar formularios y calidad del lead.

## Pendientes conocidos

- UTMs, `gclid` y `gbraid` aún no se capturan en Google Sheets.
- No hay analítica adicional para sesiones, profundidad, CTA o inicio de formulario.
- No escalar presupuesto sin una decisión explícita de Wilmar.

## Archivos fuente

- Plan completo: `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`.
- Resumen: `README.md`.
- Estrategia del sitio: `../LANDING_STRATEGY.md`.

Al retomar esta campaña, leer primero este archivo y el plan completo. No repetir la instalación ni modificar el tracking sin evidencia de un fallo.
