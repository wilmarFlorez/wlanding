import { capabilities } from "@/components/landing/data";

export function Capabilities() {
  return (
    <section className="section capabilities-section" id="construyo" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Capacidades de construcción</p>
          <h2 id="capabilities-title">Lo que puedo construir depende del problema, no de una herramienta predefinida.</h2>
          <p>Estas son las cuatro formas principales en que convierto una necesidad operativa o de información en una solución construible. Pueden combinarse cuando el contexto lo requiere.</p>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
        <p className="section-closing">No todo problema requiere IA. La decisión parte del proceso, las personas involucradas, los sistemas disponibles y el nivel de control necesario.</p>
      </div>
    </section>
  );
}
