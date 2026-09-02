export function Demos() {
  return (
    <section className="section demos-section" id="proyectos" aria-labelledby="demos-title">
      <div className="container">
        <div className="section-intro section-intro-wide">
          <h2 id="demos-title">Proyectos</h2>
          <p>Freight Pilot es un proyecto propio desplegado que ilustra cómo combino IA, reglas y revisión humana en un flujo operativo.</p>
        </div>

        <article className="freight-pilot" aria-labelledby="freight-pilot-title">
          <div className="freight-pilot-heading">
          </div>
          <div className="freight-pilot-copy">
            <h3 id="freight-pilot-title">Freight Pilot</h3>
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

      </div>
    </section>
  );
}
