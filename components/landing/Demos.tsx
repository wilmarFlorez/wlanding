import { demos } from "@/components/landing/data";

export function Demos() {
  return (
    <section className="section demos-section" id="proyectos" aria-labelledby="demos-title">
      <div className="container">
        <div className="section-intro section-intro-wide">
          <p className="eyebrow">Evidencia y exploración</p>
          <h2 id="demos-title">El tipo de evidencia importa tanto como lo que muestra.</h2>
          <p>Cada pieza publicada indica con precisión qué es y qué se puede afirmar sobre ella. No se presentan ejemplos conceptuales como implementaciones ni trabajo de terceros como evidencia personal.</p>
        </div>

        <article className="freight-pilot" aria-labelledby="freight-pilot-title">
          <div className="freight-pilot-heading">
            <div>
              <p className="evidence-label evidence-label-primary">Proyecto propio</p>
              <p className="evidence-status">Demo funcional desplegada</p>
            </div>
            <p className="eyebrow">Evidencia verificable</p>
          </div>
          <div className="freight-pilot-copy">
            <h3 id="freight-pilot-title">Freight Pilot convierte mensajes libres en solicitudes listas para preparar una cotización.</h3>
            <p>Freight Pilot es una demo de portfolio para operadores de transporte terrestre. Usa IA para extraer la información de un mensaje de cliente, reglas deterministas para validarla y revisión humana cuando faltan datos o existe ambigüedad.</p>
            <p>El sistema conserva el texto original, la extracción realizada, las incidencias detectadas y las correcciones. El objetivo es mantener trazabilidad mientras la información se prepara para el siguiente paso del proceso de cotización.</p>
          </div>
          <div className="freight-pilot-details">
            <div>
              <p className="flow-label">Capacidades demostradas</p>
              <ul>
                <li>Extracción de información con IA</li>
                <li>Validación mediante reglas</li>
                <li>Revisión humana de excepciones</li>
                <li>Trazabilidad de procesamiento</li>
              </ul>
            </div>
            <div>
              <p className="flow-label">Tecnología</p>
              <p>Construido con Next.js, FastAPI y PostgreSQL.</p>
            </div>
          </div>
          <p className="freight-pilot-limit">No calcula precios, no genera cotizaciones y no asigna vehículos. Es un proyecto propio de portfolio; no es un proyecto de cliente ni un producto comercial validado.</p>
          <a className="button freight-pilot-link" href="https://freight-pilot-flame.vercel.app/" target="_blank" rel="noreferrer">
            Explorar Freight Pilot <span aria-hidden="true">&#8599;</span><span className="sr-only"> (abre en una nueva pestaña)</span>
          </a>
        </article>

        <div className="evidence-framework" aria-label="Etiquetas de evidencia">
          <p className="flow-label">Marco de evidencia</p>
          <dl>
            <div><dt>Proyecto propio</dt><dd>Software construido por Wilmar fuera de una relación de cliente.</dd></div>
            <div><dt>Demo conceptual</dt><dd>Ejemplo que ilustra una intervención posible; no es una implementación ni un resultado de cliente.</dd></div>
            <div><dt>Prototipo funcional</dt><dd>Implementación demostrable y exploratoria; no se presenta como producto en producción.</dd></div>
            <div><dt>Proyecto de cliente autorizado</dt><dd>Trabajo real con autorización explícita para publicar contexto, rol y resultados verificables.</dd></div>
          </dl>
        </div>

        <div className="conceptual-demos">
          <div className="conceptual-demos-intro">
            <p className="eyebrow">Evidencia secundaria</p>
            <h3>Otros enfoques conceptuales en logística y operaciones.</h3>
            <p>Son flujos ilustrativos; no son implementaciones ni resultados de clientes.</p>
          </div>
          <div className="demos-list">
            {demos.map((demo, index) => (
              <article className="demo-panel" key={demo.title}>
                <p className="evidence-label">Demo conceptual</p>
                <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{demo.title}</h3>
                <p>{demo.problem}</p>
                <div className="demo-intervention">
                  <p className="flow-label">Intervención posible</p>
                  <p>{demo.intervention}</p>
                </div>
                <div className="demo-tags">
                  <span>Sistemas potenciales: {demo.systems}</span>
                  <span>Señal a observar: {demo.signal}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
