import { problems } from "@/components/landing/data";

export function Problems() {
  return (
    <section className="section" id="problemas" aria-labelledby="problems-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Problemas operativos</p>
          <h2 id="problems-title">Procesos que suelen absorber tiempo operativo.</h2>
          <p>Si estos escenarios aparecen en tu operación, puede haber un proceso que vale la pena revisar.</p>
        </div>
        <ol className="problems-list">
          {problems.map(([title, description], index) => (
            <li key={title} className="problem-item">
              <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
