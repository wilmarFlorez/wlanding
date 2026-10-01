# Continuidad de sesión — Campaña 01

**Última actualización:** 28 de septiembre de 2026

## Estado actual

- Campaña en la interfaz: `Campaign #1`; nombre objetivo del plan: `CO_Search_Automatizacion_Flujos_01`.
- Mercado: Colombia, español.
- Estado: activa desde el 21 de septiembre; revisión del día 7 cerrada y dos grupos activos desde el 28. No hay resultados posteriores al cambio disponibles todavía.
- Presupuesto: COP 34.000 diarios promedio para la campaña; Maximizar clics con límite CPC de COP 6.000, confirmados en capturas del 28.
- Grupos: `AG_Automatizacion_General` y `AG_Documentos_Informacion`, ambos habilitados y aptos. Anuncio anterior y keyword documental del general detenidos, conservando historial.
- Próxima acción: verificar URL final y herencia UTM de ambos anuncios nuevos. Comprobar entrega el 29–30 de septiembre; evaluar el 6 de octubre la ventana completa del 29 de septiembre al 5 de octubre.
- Registro detallado y copy de referencia: `CIERRE_DIA_7_28_SEPTIEMBRE_2026.md`.
- Objetivo: 3 leads cualificados en 30 días de pauta activa.
- T1 — atribución del formulario hasta Google Sheets: implementada, desplegada y validada en producción el 24 de septiembre de 2026.
- Seguimiento a Breiner: cerrado por ahora. No enviar más correos; retomar únicamente si responde al último mensaje enviado el 23 de septiembre.

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
- El lead llegó después de activar la campaña, pero no hay atribución confirmada: en ese momento Sheets aún no almacenaba UTMs ni `gclid`. T1 se validó el 24 y no reconstruye la atribución del contacto histórico.
- Estado: potencial sin calificar; falta contexto sobre necesidad, entradas, reglas, excepciones, sistemas y capacidad de decisión. No volver a contactar salvo que responda al último correo.

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
- T2 verificada el 24 de septiembre: etiquetado automático habilitado; sufijo UTM configurado a nivel de campaña y prueba de seguimiento 1/1 correcta, con destino y valores de ValueTrack comprobados.
- Acción web `Enviar formulario de clientes potenciales`: permanece como principal y ahora cuenta **Una conversión** por interacción; Tag Assistant detectó el hit tras el envío exitoso.

### Datos observados al cierre del 25 de septiembre

- Informe de términos, 21–25 de septiembre: 667 impresiones, 56 clics, CTR de 8,40 %, CPC promedio de COP 3.367, COP 188.532 de gasto y 0 conversiones.
- Los términos identificados explican 14 clics y COP 50.625. «Otros términos de búsqueda» concentra 42 clics y COP 137.907; Google no revela los términos individuales, por lo que no hay base para clasificarlos.
- Los clics visibles incluyen formación gratuita, definiciones, ejemplos, n8n, RPA y automatización industrial. No interpretar el CTR como calidad de tráfico.
- `"automatización de procesos"` concentra 32 clics y COP 106.884 sin conversiones. Su nivel de calidad es 1/10; experiencia en landing, relevancia del anuncio y CTR esperado están por debajo del promedio. Las demás keywords no tienen diagnóstico todavía.
- La configuración observada tiene un grupo, un anuncio responsivo y cuatro keywords de frase; la estructura prevista de dos grupos y concordancias exactas no está cargada.
- La lista de negativas queda verificada: trece exclusiones amplias a nivel de campaña: `curso`, `cursos`, `ejemplos`, `gratis`, `industrial`, `mecatrónica`, `n8n`, `pdf`, `playwright`, `plc`, `robótica`, `rpa` y `scada`. El informe de términos marca también `rpa` como «Excluido». No inferir la fecha de las impresiones previas a la aplicación de la lista.
- Al 25 de septiembre no hay formularios nuevos. La conversión web primaria permanece en «Esperando conversiones», con 0 conversiones en el período 21–25 de septiembre; el evento técnico ya fue validado por Tag Assistant.
- El 23 de septiembre a las 2:52 p. m., Wilmar envió a Breiner un correo de seguimiento para reprogramar y pedir el contexto del flujo. No hay respuesta al 25 de septiembre; el lead sigue sin calificar ni atribuir a Ads.

### Verificación del 27 de septiembre

- La vista de acciones de conversión de Google Ads muestra `0,00` conversiones y `0,00` valor de conversión para `Enviar formulario de clientes potenciales` (sitio web, acción principal, ventana de 30 días).
- La acción continúa con estado «Esperando conversiones». Por tanto, no hay evidencia de una conversión atribuida a un clic real de Google Ads.
- La acción secundaria alojada en Google, `Lead form - Submit`, también aparece con `0,00`; no debe confundirse con el formulario propio del sitio.

### Entrega y gasto observados — 20 a 26 de septiembre

- El informe de grupos de anuncios de Google Ads muestra 933 impresiones, 74 clics, CTR de 7,93 %, CPC promedio de COP 3.375 y gasto de COP 249.714.
- El único grupo de anuncios activo registra 0,00 conversiones, tasa de conversión de 0,00 % y costo por conversión de COP 0.
- Aunque el selector incluye el 20 de septiembre, la campaña se activó el 21; este corte representa seis días completos de pauta activa (21–26) y excluye el 27 de septiembre en curso.
- El gasto acumulado equivale aproximadamente al 25 % del presupuesto máximo orientativo de COP 1.000.000. No usar el CTR para inferir calidad: la revisión de términos ya mostró tráfico no alineado.

### Revisión de términos del día 7 — 21 a 27 de septiembre

- El informe actualizado registra 996 impresiones, 79 clics, CTR de 7,93 %, CPC promedio de COP 3.405,95, COP 269.070 de gasto y 0 conversiones.
- Los términos identificados representan 21 clics y COP 75.306; «Otros términos de búsqueda» concentra 58 clics y COP 193.764. Google no revela esos términos, por lo que no se les debe asignar intención.
- Los clics identificados incluyen intención educativa, n8n y automatización industrial, junto con algunas consultas ambiguas que podrían apuntar a una implementación. El análisis y las recomendaciones están en `informes_terminos_de_busqueda/REVISION_DIA_7_21_27_SEPTIEMBRE_2026.md`.
- En ese corte, la separación de grupos estaba pendiente. Fue aprobada y ejecutada el 28; ver el cierre a continuación. No bloquear términos amplios cercanos a la oferta.
- La captura de Google Ads del 27 de septiembre confirma las 13 negativas a nivel de campaña y en concordancia amplia. Las consultas históricas visibles que contienen esos términos no prueban que las negativas estén fallando, pues el informe no aporta fecha por consulta.
- El 27 de septiembre se añadieron seis negativas educativas en concordancia de frase: `"qué es"`, `"que es"`, `"por qué"`, `"por que"`, `"beneficios"` y `"ventajas"`. La interfaz confirma su nivel de campaña; quedan 19 negativas activas en total.

### Estado actual de negativas — evidencia de interfaz del 27 de septiembre

- Google Ads muestra 19 palabras clave negativas para `Campaign #1`, todas a nivel de campaña.
- **Concordancia amplia (13):** `curso`, `cursos`, `ejemplos`, `gratis`, `industrial`, `mecatrónica`, `n8n`, `pdf`, `playwright`, `plc`, `robótica`, `rpa` y `scada`.
- **Concordancia de frase (6):** `"beneficios"`, `"por que"`, `"por qué"`, `"que es"`, `"qué es"` y `"ventajas"`.
- La captura muestra explícitamente tanto el alcance como el tipo de concordancia. No se detecta una discrepancia entre la configuración registrada y la vista actual.
- Decisión del 27, mantenida el 28: conservar esta lista sin nuevas exclusiones. Evaluar términos y conversiones posteriores al ajuste; no atribuir a las negativas un efecto no observado. Revisar posteriormente el posible bloqueo de intención pertinente por `pdf` sin retirarla automáticamente.

### Cierre y reestructuración — 28 de septiembre

- Wilmar ejecutó y confirmó los cambios; las capturas muestran seis keywords generales activas (tres de frase, tres exactas) y dos documentales activas (frase y exacta), con un anuncio nuevo apto en cada grupo. El anuncio anterior y la keyword documental del general están detenidos.
- El anuncio general figura con calidad «Promedio» y el documental con «Pendiente», ambos con estado «Apto». No confundir puntuaciones de calidad con rechazo ni con conversiones.
- Las capturas muestran **1.052 impresiones, 80 clics, CTR 7,60 %, CPC COP 3.416, gasto COP 273.250 y 0 conversiones**, pero el selector sigue en **21–27 de septiembre**. Es la línea base anterior, no rendimiento de la nueva estructura.
- El CSV del mismo período conserva 996 impresiones, 79 clics y COP 269.070. No se conoce la causa de la diferencia; mantener las fuentes separadas sin recalcular proporciones de términos con los totales de las capturas.
- Wilmar confirma que no llegaron formularios nuevos a Sheets ni conversiones nuevas. No se revalidó el backend ni se accedió directamente a Sheets en esta sesión.
- Las capturas no verifican URL final ni herencia UTM de los anuncios nuevos. T2 sigue validada al 24; la comprobación posterior al cambio permanece pendiente.
- El aviso que pide un recurso de aplicación móvil solo aplica a ese formato de vista previa. No corresponde agregar una app ni seis vínculos a sitios solo para satisfacer recomendaciones de interfaz.
- Detalle de evidencia, recursos, límites y decisiones en `CIERRE_DIA_7_28_SEPTIEMBRE_2026.md`.

## Próximos pasos

- **T1 completada:** el contrato opcional, la captura por sesión de pestaña, la migración de encabezados, la compatibilidad con el formulario antiguo y la validación de producción están documentados en el plan completo.
- **T2 completada:** autoetiquetado, sufijo UTM, URL de destino, ValueTrack, acción primaria y recuento «Una» verificados. Mantener el destino actual sin añadir `#contacto`. La primera conversión atribuida a un clic real sigue pendiente; los IDs sintéticos fueron solo pruebas.
- **Siguiente implementación: T3 — GA4:** instrumentar la analítica mínima cuando Wilmar facilite/configure la propiedad y el ID de medición, y complete la revisión de privacidad y consentimiento. No duplicar la conversión principal existente.
- Revisiones de días 3 y 7 completadas. Mantener la nueva estructura, puja y presupuesto durante la observación salvo fallo técnico o tráfico inequívocamente irrelevante, con decisión y registro.
- Confirmar la primera conversión atribuida a un clic real en Google Ads; el evento técnico ya se detectó en Tag Assistant.
- Comprobar URL final y herencia del sufijo UTM de campaña en los dos anuncios nuevos, sin clicar anuncios propios. No marcar este punto completo con la evidencia actual.
- El 29–30 de septiembre, revisar estados, impresiones y distribución del gasto usando fechas posteriores al cambio. Los ceros del documental en el corte 21–27 no prueban falta de entrega actual.
- El 6 de octubre, evaluar los siete días completos del 29 de septiembre al 5 de octubre, excluyendo el 28 parcial. Esta fecha sustituye la tentativa del 5 para esta iteración, sin reiniciar los 30 días ni ampliar el presupuesto total.
- Revisar términos visibles, gasto, formularios y calidad por grupo cuando la atribución lo permita. Si no hay contactos cualificados, decidir pausa o rediseño; si falta tráfico, registrar evidencia insuficiente. No inferir calidad por CTR.
- No enviar más seguimientos a Breiner. Si responde al último correo, retomar la conversación y clasificar la calidad del lead sin atribuirlo a Ads hasta contar con evidencia.

## Pendientes conocidos

- La primera conversión atribuida a un clic real de Google Ads está pendiente; la captura técnica en Sheets está validada desde las pruebas QA del 24 de septiembre.
- No hay analítica adicional para sesiones, profundidad, CTA o inicio de formulario.
- URL final y aplicación de UTMs de los anuncios nuevos aún sin comprobar.
- Preparar, para aprobación posterior, un ajuste mínimo bilingüe del formulario que incluya automatización sin eliminar roles y colaboraciones. No implementado ni desplegado.
- No escalar presupuesto sin una decisión explícita de Wilmar.

## Archivos fuente

- Plan completo: `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`.
- Resumen: `README.md`.
- Cierre del 28, anuncios y ventana de evaluación: `CIERRE_DIA_7_28_SEPTIEMBRE_2026.md`.
- Estrategia del sitio: `../LANDING_STRATEGY.md`.

Al retomar esta campaña, leer primero este archivo y el cierre del 28, y consultar el plan completo. T1/T2 se validaron el 24; comprobar su aplicación a los anuncios nuevos antes de dar por cerrada esa verificación. Continuar con T3 solo cuando estén disponibles el ID de GA4 y la revisión de privacidad/consentimiento. La atribución a un clic real de Ads sigue pendiente por separado. No reinstalar ni alterar la conversión existente sin evidencia de un fallo; distinguir documentación local, cambios ejecutados por Wilmar y verificación de producción. No hay monitoreo ni recordatorios automáticos configurados.
