import { demos } from "@/components/landing/data";

function Flow({ label, items, proposed = false }: { label: string; items: readonly string[]; proposed?: boolean }) {
  return (
    <div className={`demo-flow${proposed ? " demo-flow-proposed" : ""}`}>
      <p className="flow-label">{label}</p>
      <div className="demo-flow-nodes">
        {items.map((item, index) => (
          <div className="demo-flow-step" key={item}>
            <span className={item === "Revisión humana" ? "demo-flow-human" : undefined}>{item}</span>
            {index < items.length - 1 && <i aria-hidden="true">-&gt;</i>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Demos() {
  return (
    <section className="section demos-section" id="ejemplos" aria-labelledby="demos-title">
      <div className="container">
        <div className="section-intro section-intro-wide">
          <p className="eyebrow">Ejemplos conceptuales</p>
          <h2 id="demos-title">Así podría abordarse un problema operativo.</h2>
          <p>No son implementaciones ni resultados de clientes. Son flujos posibles para mostrar cómo se conectan problema, información, decisiones y sistemas.</p>
        </div>
        <div className="demos-list">
          {demos.map((demo, index) => (
            <article className="demo-panel" key={demo.title}>
              <div className="demo-summary">
                <span className="item-index">0{index + 1}</span>
                <h3>{demo.title}</h3>
                <p>{demo.problem}</p>
              </div>
              <div className="demo-flows">
                <Flow label="Hoy" items={demo.current} />
                <Flow label="Posible intervención" items={demo.proposed} proposed />
              </div>
              <dl className="demo-details">
                <div>
                  <dt>Papel del agente</dt>
                  <dd>{demo.agent}</dd>
                </div>
                <div>
                  <dt>Sistemas / canales</dt>
                  <dd>{demo.systems}</dd>
                </div>
                <div>
                  <dt>Qué medir</dt>
                  <dd>{demo.metric}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
