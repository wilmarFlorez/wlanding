# Análisis del Grupo A: automatización de procesos

**Fuente:** `Keyword_grupo_a.csv`  
**Origen:** Google Keyword Planner  
**Periodo:** 1 de septiembre de 2025 a 31 de agosto de 2026  
**Ubicación:** Colombia  
**Idioma:** español  
**Estado:** análisis inicial completado; la revisión manual de SERP está en `02_revision_serp_grupo_a.md`.

## Objetivo del análisis

Identificar búsquedas que puedan corresponder a una persona o equipo que quiere contratar una automatización personalizada para organizar, transformar, validar o enviar información a otro sistema.

No se busca seleccionar keywords únicamente por volumen. También deben coincidir con la oferta real de Wilmar y tener una intención razonable de implementación.

## Lectura general

El archivo contiene muchas variantes de la palabra “automatización”, pero mezcla varias intenciones:

- contratación o implementación de automatizaciones;
- búsqueda de software listo para usar;
- RPA e iniciativas empresariales especializadas;
- automatización industrial;
- sectores concretos como ventas, nómina, finanzas o manufactura;
- búsquedas educativas y académicas.

No deben incorporarse todas estas búsquedas en la primera campaña.

## Keywords prioritarias para revisar

Estas keywords se conservan como candidatas. Todavía no están aprobadas para activar anuncios; primero hay que revisar sus resultados en Google.

| Keyword | Búsquedas promedio | CPC bajo observado | CPC alto observado | Clasificación inicial |
|---|---:|---:|---:|---|
| automatización de procesos | 500 | COP 1.594,30 | COP 6.760,07 | Implementación general |
| automatizar procesos | 50 | COP 1.748,11 | COP 8.232,69 | Implementación general |
| software para automatizar procesos | 50 | — | — | Software o implementación |
| automatización empresarial | 50 | COP 1.610,92 | COP 5.637,76 | Implementación general |
| servicios de automatización | 50 | COP 1.507,80 | COP 3.978,32 | Servicios de implementación |
| automatización de procesos empresariales | 50 | COP 1.813,13 | COP 20.882,35 | Implementación empresarial |
| automatización de documentos | 50 | COP 5.456,10 | COP 11.842,21 | Documentos e información |
| automatización documental | 50 | COP 1.043,13 | COP 5.997,01 | Documentos e información |
| automatización de datos | 50 | COP 1.187,85 | COP 7.514,06 | Datos e integraciones |
| automatización de reportes | 50 | COP 15.166,00 | COP 42.252,18 | Reportes y datos |
| automatizar reportes | 50 | — | — | Reportes y datos |
| flujo de trabajo automatizado | 50 | COP 1.065,62 | COP 6.354,24 | Flujos de trabajo |
| flujos de automatización | 50 | COP 749,56 | COP 8.947,08 | Flujos de trabajo |
| soluciones de automatización | 50 | — | — | Solución o proveedor |
| herramienta para automatizar procesos | 50 | COP 3.107,55 | COP 26.238,49 | Herramienta o implementación |
| automatizar una empresa | 50 | COP 2.795,09 | COP 11.621,36 | Implementación general |
| automatizar mi negocio | 50 | — | — | Implementación general |

Los valores de 50 y 500 son rangos o aproximaciones de Google Keyword Planner. No representan necesariamente una cantidad exacta de búsquedas.

## Keywords que no se incorporan inicialmente

### Automatización demasiado amplia

```text
automatización
automatizar
automatiza
automatización inteligente
automatización completa
```

Pueden tener volumen, pero no permiten saber qué problema busca resolver la persona.

### Automatización industrial

```text
automatización y control industrial
automatización de la manufactura
automatización de la producción
automatización industrial 4.0
automatización minera
automatización y control para la industria
sistemas SCADA en la automatización industrial
```

No corresponden al foco de la primera campaña.

### RPA especializado

```text
automatización robótica de procesos
automatización RPA
robotización de procesos
implementar RPA
software de automatización de procesos robóticos RPA
RPA administración
RPA en banca
```

Se pueden evaluar en una campaña futura, pero pueden atraer proyectos empresariales o perfiles técnicos diferentes.

### Sectores específicos

```text
automatización de nómina
automatización de recursos humanos
automatización de procesos contables
automatización de procesos financieros
automatización bancaria
automatización de ventas
automatización de manufactura
automatización en la medicina
```

No se usarán hasta definir una oferta y un mensaje específicos para cada sector.

### Educación y búsquedas académicas

```text
proyectos de automatización para estudiantes
proyectos RPA
qué es automatización
en qué consiste la automatización
automatización de tareas ejemplos
```

Indican aprendizaje o investigación, no necesariamente intención de contratar una implementación.

## Decisión provisional

El Grupo A tiene suficientes candidatos para continuar, pero todavía no para crear anuncios definitivos.

La campaña deberá empezar con keywords específicas relacionadas con:

- automatización de procesos;
- servicios de automatización;
- documentos e información;
- reportes y datos;
- flujos de trabajo;
- integración o paso de información entre sistemas.

La keyword `automatización` no se utilizará inicialmente por ser demasiado amplia.

## Siguiente tarea

Analizar `Keyword_grupo_a_implementacion.csv`, seleccionar sus candidatas y revisar manualmente en Google las nuevas keywords prioritarias. Registrar:

- qué anuncios aparecen;
- si ofrecen servicios, software, cursos u otra cosa;
- si el lenguaje coincide con una persona que quiere contratar una implementación;
- qué términos y promesas utilizan los competidores.

Después de esa revisión se decidirá cuáles keywords pasan a la campaña y cuáles se descartan.

## Prompt para el agente de IA

```text
Analiza el archivo Keyword_grupo_a.csv de Google Keyword Planner.

El servicio que queremos promocionar es el diseño e implementación de automatizaciones personalizadas. Puede incluir organizar correos o mensajes, extraer datos de documentos, buscar información, validar reglas o enviar información a otro sistema. No vendemos un SaaS listo para usar, cursos ni automatización industrial.

Clasifica cada keyword en una de estas categorías:

1. Implementación general
2. Documentos e información
3. Reportes y datos
4. Flujos de trabajo
5. Software listo para usar
6. RPA especializado
7. Industrial
8. Sector específico
9. Educativa
10. Ambigua

Para cada keyword devuelve:

- keyword;
- categoría;
- relevancia: alta, media o baja;
- recomendación: mantener para revisar, descartar inicialmente o revisar después;
- motivo breve.

No inventes volumen, CPC ni intención. Usa únicamente los datos del CSV y el significado de cada término. No afirmes que una keyword tiene intención comercial sin marcarlo como hipótesis.
```
