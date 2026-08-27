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
          <p className="eyebrow">Evidencia en desarrollo</p>
          <h2 id="demos-title">Demos conceptuales para pensar una intervención antes de construirla.</h2>
          <p>No hay proyectos publicados en este momento. Estas demos conceptuales no son implementaciones ni resultados de clientes; muestran el tipo de prototipos que se están desarrollando.</p>
        </div>
        <div className="demos-list">
          {demos.map((demo, index) => (
            <article className="demo-panel" key={demo.title}>
              <p className="evidence-label">Demo conceptual</p>
              <div className="demo-summary">
                <span className="item-index">0{index + 1}</span>
                <h3>{demo.title}</h3>
                <p>{demo.problem}</p>
              </div>
              <div className="demo-flows" aria-label={`Flujos conceptuales para ${demo.title}`}>
                <Flow label="Flujo actual" items={demo.current} />
                <Flow label="Intervención posible" items={demo.proposed} proposed />
              </div>
              <div className="demo-notes">
                <p><span>Se conecta con</span>{demo.systems}</p>
                <p><span>Se mediría</span>{demo.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
