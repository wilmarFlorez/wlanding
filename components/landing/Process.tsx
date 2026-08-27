import { processSteps } from "@/components/landing/data";

export function Process() {
  return (
    <section className="section process-section" id="proceso" aria-labelledby="process-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Cómo abordo un problema</p>
          <h2 id="process-title">Del proceso actual a una solución funcionando.</h2>
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
        <p className="process-result">Solución funcionando</p>
      </div>
    </section>
  );
}
