import type { ReactNode } from "react";

function FlowNode({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return <div className={`flow-node${accent ? " flow-node-accent" : ""}`}>{children}</div>;
}

export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Para empresas de transporte terrestre y 3PL</p>
          <h1 id="hero-title">Diseño y construyo soluciones para procesos operativos manuales en logística terrestre.</h1>
          <p className="hero-lede">
            Reviso procesos con seguimiento manual, información dispersa o reprocesos y construyo la solución que el caso requiere: automatización, IA, agentes e integraciones con los sistemas existentes cuando tiene sentido.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contacto-form">
              Revisar un proceso operativo
            </a>
            <a className="text-link" href="#problemas">
              Ver problemas que puedo abordar <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
        <div className="hero-flow" aria-label="Flujo conceptual de información dispersa a proceso coordinado">
          <div className="flow-heading">
            <span className="flow-label">Flujo conceptual</span>
            <span>Sin datos de cliente</span>
          </div>
          <h2>De información dispersa a proceso coordinado</h2>
          <div className="flow-inputs">
            <FlowNode>WhatsApp</FlowNode>
            <FlowNode>Correo</FlowNode>
            <FlowNode>Llamadas</FlowNode>
            <FlowNode>Sistemas</FlowNode>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <FlowNode>Proceso operativo</FlowNode>
          <div className="flow-connector" aria-hidden="true" />
          <FlowNode accent>Reglas + contexto</FlowNode>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-output">
            <FlowNode accent>Intervención</FlowNode>
            <FlowNode accent>Actualización / notificación</FlowNode>
          </div>
        </div>
      </div>
    </section>
  );
}
