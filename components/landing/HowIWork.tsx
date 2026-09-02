import { workSteps } from "@/components/landing/data";

export function HowIWork() {
  return (
    <section className="section process-section" id="como-trabajo" aria-labelledby="process-title">
      <div className="container process-layout">
        <div className="section-intro">
          <p className="eyebrow">De problema a solución</p>
          <h2 id="process-title">Entender antes de construir.</h2>
        </div>
        <ol className="process-list">
          {workSteps.map(([title, description], index) => (
            <li className="process-item" key={title}>
              <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="process-closing">El resultado no es solo una recomendación: es una solución diseñada para el contexto que se puede construir e integrar.</p>
      </div>
    </section>
  );
}
