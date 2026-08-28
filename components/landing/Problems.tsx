import { problems } from "@/components/landing/data";

export function Problems() {
  return (
    <section className="section" id="problemas" aria-labelledby="problems-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Problemas y construcción</p>
          <h2 id="problems-title">Procesos operativos que conviene revisar.</h2>
          <p>Diseño flujos, automatizaciones, integraciones e interfaces internas según el proceso y las herramientas que ya usa el equipo.</p>
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
