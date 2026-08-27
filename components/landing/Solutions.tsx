import { solutions } from "@/components/landing/data";

export function Solutions() {
  return (
    <section className="section section-rule" id="soluciones" aria-labelledby="solutions-title">
      <div className="container">
        <div className="section-intro section-intro-wide">
          <p className="eyebrow">Qué puedo construir</p>
          <h2 id="solutions-title">No ofrezco un producto estándar.</h2>
          <p>Diseño y construyo una solución alrededor del proceso priorizado.</p>
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
          <span>Sistemas y canales posibles</span>
          TMS, ERP, correo, WhatsApp, hojas de cálculo, APIs, bases de datos y herramientas internas.
        </p>
      </div>
    </section>
  );
}
