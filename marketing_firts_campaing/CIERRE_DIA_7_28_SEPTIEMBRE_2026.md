# Cierre del día 7 — cambios del 28 de septiembre de 2026

**Estado:** reestructuración ejecutada por Wilmar en Google Ads y contrastada con las capturas compartidas en la conversación. No hay resultados posteriores al cambio disponibles todavía.

## Alcance de la evidencia

- Las capturas de configuración confirman Maximizar clics, límite de CPC de COP 6.000 y presupuesto diario promedio de COP 34.000.
- Las cinco capturas finales confirman grupos, estados de anuncios y distribución de keywords. Su selector de fechas sigue en **21–27 de septiembre**, anterior a la reestructuración.
- Wilmar confirmó que no llegaron nuevos formularios a Google Sheets ni nuevas conversiones. El asistente no accedió directamente a Ads o Sheets.
- La lectura de `https://www.wilmarflorez.com/` confirmó contenido publicado de automatizaciones, operaciones/documentos y contacto. No fue una nueva prueba funcional del formulario.
- Las imágenes son evidencia aportada en la conversación; no se han guardado como archivos en este directorio. No se conoce la hora exacta del cambio.

## Línea base anterior al cambio: dos fuentes distintas

| Métrica del 21–27 de septiembre | CSV de términos de búsqueda | Capturas de keywords/grupos compartidas el 28 |
| --- | ---: | ---: |
| Impresiones | 996 | 1.052 |
| Clics | 79 | 80 |
| CTR | 7,93 % | 7,60 % |
| CPC promedio | COP 3.405,95 | COP 3.416 |
| Gasto | COP 269.070 | COP 273.250 |
| Conversiones | 0 | 0 |

Conservar ambas fuentes sin sustituir el CSV ni mezclar sus denominadores. No se ha determinado la causa de la diferencia. Una futura conciliación requiere exportaciones con el mismo período, alcance y filtros; no atribuirla automáticamente a retrasos de reporte.

El CSV permite analizar 21 clics identificados; los 58 clics de «Otros términos» no tienen consultas visibles. Esos valores y sus proporciones pertenecen exclusivamente al CSV. Las capturas constituyen la referencia agregada más reciente disponible para la estructura anterior, no un corte de gasto del propio 28.

En las capturas, la keyword de frase `"automatización de procesos"` registra 40 clics, COP 135.328 y nivel de calidad 1/10, con los tres componentes inferiores al promedio. No es una medición del efecto de los anuncios nuevos. El costo por conversión mostrado como COP 0, con cero conversiones, no representa un costo de adquisición validado.

## Decisión y configuración confirmada

**Objetivo sin cambios:** 3 leads cualificados por formulario en 30 días de pauta activa. Un lead requiere flujo real, entradas identificables, interés en implementación y capacidad de decisión o escalamiento. No mezclar esta campaña con contratación para roles.

**Hipótesis de la iteración:** mensajes distintos para procesos/integraciones y documentos/información pueden mejorar la pertinencia de la conversación generada. Separar grupos no garantiza conversiones; la evaluación prioriza formularios y calidad del contacto sobre CTR.

| Elemento | Estado confirmado |
| --- | --- |
| Campaña | `Campaign #1`, habilitada; estado de campaña «Apto (en aprendizaje)» |
| Presupuesto | COP 34.000 diarios promedio, compartidos por ambos grupos; no se duplica |
| Puja | Maximizar clics, límite de oferta CPC máximo COP 6.000 |
| Objetivo de conversión seleccionado | Enviar formularios de clientes potenciales |
| `AG_Automatizacion_General` | Habilitado y apto; grupo anterior renombrado |
| Anuncio general anterior | Detenido, con historial conservado |
| Nuevo anuncio general | Habilitado y apto; calidad del anuncio «Promedio» |
| `AG_Documentos_Informacion` | Habilitado y apto |
| Anuncio documental | Habilitado y apto; calidad del anuncio «Pendiente» |

Maximizar clics optimiza clics, no formularios, aunque exista un objetivo de conversión seleccionado. Mantener puja, presupuesto y límite; la recomendación de Google de maximizar conversiones no constituye evidencia para cambiarlos hoy.

### Keywords activas: general

```text
"automatización de procesos"
[automatización de procesos]
"automatización empresarial"
[automatización empresarial]
"servicios de automatización"
[servicios de automatización]
```

La keyword de frase `"automatización documental"` quedó **detenida** en el grupo general, sin eliminar su historial.

### Keywords activas: documental

```text
"automatización documental"
[automatización documental]
```

Las exactas no restringen las keywords de frase que siguen activas; ambas admiten variantes cercanas. No se añadieron nuevas familias de keywords ni concordancia amplia.

## Recursos de referencia para los anuncios nuevos

Textos entregados en la sesión y reportados por Wilmar como cargados. Las capturas finales confirman los anuncios, los títulos iniciales, «5 más», extractos de las descripciones y rutas visibles; **no sustituyen una exportación completa de todos los recursos ni confirman sus fijaciones**. La propuesta fue usar ocho títulos y cuatro descripciones por anuncio, sin fijar posiciones. Los textos siguientes respetan los límites de 30 y 90 caracteres.

**Destino propuesto para ambos:** `https://www.wilmarflorez.com/`, sin salto automático a `#contacto`. La URL final del anuncio anterior sí se vio en su editor; verificar aún la URL final y herencia UTM de los dos anuncios nuevos.

### General — títulos

```text
Automatización de Procesos
Servicios de Automatización
Automatización a Medida
Integra Datos y Herramientas
Conecta Tus Sistemas
Flujos con Reglas y Control
Desarrollo de Automatizaciones
Hablemos de Tu Proceso
```

### General — descripciones

```text
Desarrollo automatizaciones a medida para conectar correos, mensajes y sistemas.
Defino entradas, reglas y excepciones, con revisión humana cuando el flujo lo requiere.
Integro herramientas mediante APIs y webhooks para mover datos entre sistemas.
Cuéntame qué proceso quieres automatizar y evaluamos una colaboración técnica.
```

**Rutas visibles confirmadas:** `procesos` / `integraciones`. Son etiquetas del anuncio, no rutas nuevas del sitio.

### Documental — títulos

```text
Automatización Documental
De Documentos a Datos
Extracción de Datos a Medida
Validación de Campos
Revisión Humana de Excepciones
Integra Datos en Tus Sistemas
Flujos Documentales a Medida
Hablemos de Tus Documentos
```

### Documental — descripciones

```text
Desarrollo flujos para extraer y organizar datos de documentos, correos y solicitudes.
Combino extracción con IA, validación de campos y revisión humana de ambigüedades.
Diseño la entrega de datos revisados al sistema o responsable que sigue en el proceso.
Cuéntame qué documentos procesas y evaluamos una colaboración técnica a medida.
```

**Rutas visibles confirmadas:** `documentos` / `datos`.

## Negativas, landing y avisos de interfaz

- Se mantienen las **19 negativas** verificadas el 27, sin nuevas modificaciones reportadas el 28. La lista completa está en `SESSION_HANDOFF.md`. Las seis educativas de frase añadidas el 27 no pueden evaluarse usando solo tráfico anterior a su aplicación.
- `pdf` sigue como negativa amplia a nivel de campaña. Puede excluir búsquedas pertinentes para el grupo documental. Revisarla de forma explícita en una decisión posterior, sin retirarla automáticamente ni afirmar que esta prueba cubre toda la demanda sobre PDFs.
- La landing publicada incluye entradas como documentos, correos y solicitudes; extracción de campos; reglas y revisión humana; y entrega de información. Esto respalda el tipo de colaboración anunciado, no un producto listo para comprar.
- Freight Pilot es una demo desplegada sobre solicitudes de transporte en texto libre. No acredita procesamiento universal de documentos, clientes, ROI, cálculo de precios, generación de cotizaciones ni asignación de vehículos.
- Persiste una posible fricción: el CTA del hero dice «Quiero automatizar un proceso», mientras el contacto/formulario habla de roles y colaboraciones. Preparar un ajuste mínimo bilingüe que incluya automatización sin borrar contratación; **no se ha implementado ni desplegado**.
- El aviso de vista previa que pide «1 recurso de aplicación para dispositivos móviles» aplica a ese formato, no bloquea el anuncio de búsqueda. No corresponde añadir una app inexistente.
- La sugerencia de seis vínculos a sitios no es obligatoria ni garantiza conversiones. No se añadieron recursos solo para elevar la puntuación de optimización.
- Calidad del anuncio «Promedio» o «Pendiente», nivel de calidad de keyword 1/10 y estado «Apto» son señales distintas. No confundir calidad pendiente con rechazo, ni cambiar copy solo por esa puntuación.

## Calendario y responsables

| Fecha | Acción | Responsable |
| --- | --- | --- |
| 28 de septiembre | Transición: grupos/keywords/anuncios aplicados; documentación del cierre | Wilmar ejecutó; asistente documenta |
| Pendiente de verificación | Comprobar URL final y herencia del sufijo UTM en ambos anuncios nuevos, sin sobrescrituras | Wilmar en Ads, con apoyo del asistente |
| 29–30 de septiembre | Comprobación en 24–48 horas: estados, impresiones y distribución de gasto; usar fechas posteriores al cambio | Wilmar aporta datos; asistente analiza |
| 29 de septiembre–5 de octubre | Siete días completos de observación; excluir el 28 parcial de la comparación principal | Wilmar supervisa gasto y formularios |
| 6 de octubre | Evaluar resultados de esa ventana y decidir continuar, pausar o rediseñar | Asistente prepara análisis; Wilmar decide |

El **6 de octubre reemplaza la fecha tentativa del 5** para evaluar esta iteración; no reinicia los 30 días de campaña ni amplía su presupuesto total orientativo de COP 1.000.000. El presupuesto diario promedio no es un tope total de gasto: supervisar el acumulado. No hay monitoreo ni recordatorios automáticos configurados por este registro.

La comprobación de UTMs no requiere clicar anuncios propios ni repetir todas las pruebas de T1/T2. Conservar la configuración validada el 24 y comprobar su aplicación a los anuncios nuevos; no marcarla verificada solo porque están aptos.

## Criterios de evaluación y pendientes

- Medir gasto, clics, términos visibles, formularios reales, conversiones atribuidas y calificación manual por grupo cuando la atribución lo permita. Excluir filas de QA y no inventar términos ocultos.
- Si el documental apenas recibe tráfico, registrar evidencia insuficiente y revisar entrega antes de declarar que el mensaje falló. No aumentar presupuesto automáticamente.
- Si no llegan contactos cualificados en la nueva ventana, decidir pausa o rediseño antes de consumir el presupuesto completo; no prolongar solo por CTR. Separar ausencia de formularios, contactos no cualificados y volumen insuficiente.
- No atribuir causalmente una mejora a un título: se cambió estructura, concordancias y anuncios, además de las negativas del día anterior. Es una iteración operativa, no un experimento controlado.
- T1/T2 mantienen su validación del 24. Primera conversión atribuida real y comprobación de URLs/UTMs de anuncios nuevos siguen pendientes.
- GA4/T3 sigue sin implementar: requiere propiedad/ID y revisión de privacidad/consentimiento. No hay sesiones, clics CTA ni inicios/errores de formulario disponibles para evaluar esta ventana salvo implementación posterior documentada; no reconstruirlos retroactivamente ni duplicar la conversión principal.
- No realizar más cambios de anuncios, keywords, puja o presupuesto durante la observación salvo fallo técnico o tráfico inequívocamente irrelevante, con registro y decisión de Wilmar. Si se confirma un fallo de formulario/tracking, pausar y corregir.
- Breiner continúa sin calificar y sin atribución confirmada; no enviar más seguimientos salvo que responda. La confirmación de Wilmar de que no hay formularios nuevos no elimina ese contacto histórico.

## Archivos relacionados

- [Plan central](CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md).
- [Continuidad y próxima acción](SESSION_HANDOFF.md).
- [Análisis del CSV del 21–27](informes_terminos_de_busqueda/REVISION_DIA_7_21_27_SEPTIEMBRE_2026.md).

Este cierre es documentación local: no modifica Google Ads, código del sitio, etiquetas, Apps Script ni Sheets, y no requiere despliegue de la aplicación.
