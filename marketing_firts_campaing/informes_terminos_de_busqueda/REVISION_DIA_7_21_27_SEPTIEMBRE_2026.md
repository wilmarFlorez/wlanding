# Revisión del día 7 — términos de búsqueda

**Fuente:** `Informe_de_terminos_de_busqueda.csv`  
**Período:** 21–27 de septiembre de 2026  
**Decisión de campaña:** recomendaciones iniciales resueltas mediante la reestructuración ejecutada por Wilmar el 28 de septiembre; ver `../CIERRE_DIA_7_28_SEPTIEMBRE_2026.md`. Este archivo conserva el análisis del CSV, no ejecuta cambios en Google Ads.

## Corte observado

| Métrica | Total de campaña | Términos identificados | Otros términos de búsqueda |
| --- | ---: | ---: | ---: |
| Impresiones | 996 | 362 | 634 |
| Clics | 79 | 21 | 58 |
| CTR | 7,93 % | 5,80 % | 9,15 % |
| CPC promedio | COP 3.405,95 | COP 3.586,00 | COP 3.340,76 |
| Costo | COP 269.070 | COP 75.306 | COP 193.764 |
| Conversiones | 0 | 0 | 0 |

Google Ads no revela los 58 clics agrupados como «Otros términos de búsqueda». Representan el 73,4 % de los clics y el 72,0 % del gasto. No se les puede asignar intención ni clasificar como búsquedas concretas.

## Lectura de los términos con clics identificados

Los clics muestran intención heterogénea, no una señal consistente de contratación para construir una automatización.

- **Educativa, informativa o de ejemplos:** `cursos de automatizacion con ia gratis`, `que es la automatización de tareas`, `por que automatizar procesos`, `que es automatizar un proceso`, `que significa automatizar procesos`, `automatización ejemplos` y la consulta extensa sobre qué implica la digitalización. Estos términos acumulan COP 24.002 de gasto visible.
- **Herramienta o tecnología concreta:** `mejores automatizaciones n8n`. Costó COP 4.226. El término apunta a comparar o aprender una herramienta, no necesariamente a explorar una colaboración técnica.
- **Industrial:** `automatización de procesos industriales` y `automatizacion industrial medellin`. Acumulan COP 6.819 y no corresponden a la oferta de automatización operativa de software de esta prueba.
- **Posible intención de colaboración, aún ambigua:** `automatizaciones para negocios`, `empresas de automatizacion medellin`, `automatizar procesos con ia` y `automatizar tareas repetitivas`. Acumulan COP 13.984. Ninguno generó conversión; se deben conservar como observación, no declarar como términos cualificados.
- **Agencia, competencia o intención insuficiente para decidir:** `agencias de automatizacion de ia`, `agencia de automatizacion`, `agencias de automatizacion`, `automatizacion digital` y `automatizacion con ia`. No hay suficiente contexto para tratarlos como prospectos o excluirlos de forma amplia.

## Implicación

La hipótesis todavía no está apoyada: después de siete días de pauta activa hay 79 clics, COP 269.070 de gasto y cero conversiones registradas. El CTR agregado no representa calidad de tráfico. La configuración actual de un grupo de anuncios, un anuncio responsivo y keywords de frase permite variaciones cercanas que captan investigación, herramientas e intención industrial.

## Recomendación inicial — historial previo al cierre del 28

- **Verificado el 27 de septiembre:** la vista de Google Ads muestra 13 negativas a nivel de `Campaign #1`, en concordancia amplia. La primera página confirma `curso`, `cursos`, `ejemplos`, `gratis`, `industrial`, `mecatrónica`, `n8n`, `pdf`, `playwright` y `plc`; las tres restantes ya documentadas son `robótica`, `rpa` y `scada`. El informe no incluye fecha por término; por eso una consulta histórica que contradiga una negativa pudo ocurrir antes de aplicarla.
- **Implementado el 27 de septiembre:** se añadieron en concordancia de frase `"qué es"`, `"que es"`, `"por qué"`, `"por que"`, `"beneficios"` y `"ventajas"`. La interfaz confirma que están aplicadas a nivel de campaña. No añadir `agencia`, `empresa`, `automatización`, `IA` ni `procesos`: son términos demasiado cercanos a posibles colaboraciones.
- Mantener la exclusión amplia ya documentada para `curso`, `gratis`, `n8n`, `industrial`, `rpa`, `plc`, `scada`, `pdf`, `playwright`, `robótica` y `mecatrónica`; confirmar primero que cada una está aplicada en la campaña activa.
- Separar antes de la siguiente ventana de observación el grupo de automatización general del grupo de documentos e información, como se definió en el plan. Cada grupo debe tener un anuncio que describa su flujo y límites. Esta modificación requiere configuración y aprobación explícitas; no se ha ejecutado.
- Mantener el presupuesto y la puja actuales hasta que Wilmar decida sobre estas correcciones. Después de aplicarlas, observar una nueva ventana de siete días y revisar conversiones, términos visibles, gasto y formularios. Si no hay envíos cualificados, detener o rediseñar la prueba antes de consumir el presupuesto completo.

## Resolución del 28 de septiembre

- Separación ejecutada y verificada en capturas: `AG_Automatizacion_General` con tres keywords de frase y tres exactas; `AG_Documentos_Informacion` con documental en frase y exacta. Ambos anuncios nuevos aptos; anuncio anterior y keyword documental del general detenidos.
- Presupuesto COP 34.000 diarios promedio y Maximizar clics con límite CPC COP 6.000 sin cambios. Se mantienen las 19 negativas; la posible exclusión de intención pertinente por `pdf` queda señalada para revisión posterior, no retirada.
- Las capturas del mismo período 21–27 muestran 1.052 impresiones, 80 clics y COP 273.250, distintos de este CSV. No se conoce la causa; no reemplazar los valores de la tabla ni usar los nuevos totales para recalcular las proporciones del CSV. Ninguna de estas fuentes mide rendimiento posterior al cambio.
- Wilmar confirma ausencia de nuevos formularios en Sheets. La herencia UTM y URL final de los anuncios nuevos siguen pendientes de verificación.
- El 28 es transición; comprobar entrega el 29–30. Evaluar el **6 de octubre** los **siete días completos del 29 de septiembre al 5 de octubre**, sin ampliar el presupuesto total ni reiniciar la duración de campaña.
- Evidencia, recursos de referencia y criterios de decisión en [el cierre del día 7](../CIERRE_DIA_7_28_SEPTIEMBRE_2026.md).
