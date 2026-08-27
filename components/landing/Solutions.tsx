import { solutions } from "@/components/landing/data";

export function Solutions() {
  return (
    <section className="section section-rule" id="soluciones" aria-labelledby="solutions-title">
      <div className="container">
        <div className="section-intro section-intro-wide">
          <p className="eyebrow">Capacidad de construcción</p>
          <h2 id="solutions-title">Partimos de un proceso concreto, no de una herramienta predefinida.</h2>
          <p>La intervención puede ser una interfaz, un flujo automatizado, una integración o software con IA, según lo que el contexto justifique.</p>
        </div>
        <div className="solutions-grid">
          {solutions.map(([title, description], index) => (
            <article key={title} className="solution-item">
              <span className="item-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="systems-note">
          <span>Entornos posibles</span>
          Herramientas internas, APIs, correo, mensajería, hojas de cálculo, bases de datos, ERP, CRM o TMS.
        </p>
      </div>
    </section>
  );
}
