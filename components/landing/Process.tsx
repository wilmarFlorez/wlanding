import { processSteps } from "@/components/landing/data";

export function Process() {
  return (
    <section className="section process-section" id="proceso" aria-labelledby="process-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Método de trabajo</p>
          <h2 id="process-title">Criterio de producto, arquitectura y construcción en el mismo recorrido.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map(([title, description], index) => (
            <li className={`process-item${index === processSteps.length - 1 ? " process-item-final" : ""}`} key={title}>
              <span className="process-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="process-result">Proceso conectado y observable</p>
      </div>
    </section>
  );
}
