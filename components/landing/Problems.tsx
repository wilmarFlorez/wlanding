import { problems } from "@/components/landing/data";

export function Problems() {
  return (
    <section className="section" id="problemas" aria-labelledby="problems-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Punto de partida</p>
          <h2 id="problems-title">La oportunidad suele estar en el trabajo que hoy sostiene la operación.</h2>
          <p>El trabajo comienza con un problema concreto. Estos patrones pueden aparecer en logística, operaciones y otras industrias.</p>
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
        <p className="section-closing">La conversación no necesita empezar con una solución de IA. Puede empezar con un proceso que hoy es difícil de coordinar, seguir o decidir.</p>
        <a className="text-link section-link" href="#como-trabajo">
          Ver cómo trabajo <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>
  );
}
