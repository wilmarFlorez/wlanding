import { problems } from "@/components/landing/data";

export function Problems() {
  return (
    <section className="section" id="problemas" aria-labelledby="problems-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Problemas operativos</p>
          <h2 id="problems-title">Patrones operativos que suelen pedir una intervención.</h2>
          <p>Aplican a distintas industrias cuando el trabajo depende de personas sosteniendo manualmente la coordinación y el contexto.</p>
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
