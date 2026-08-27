import type { ReactNode } from "react";

function FlowNode({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return <div className={`flow-node${accent ? " flow-node-accent" : ""}`}>{children}</div>;
}

export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Wilmar / Product Architect &amp; Builder</p>
          <h1 id="hero-title">Entiendo el problema, diseño la intervención y construyo la solución.</h1>
          <p className="hero-lede">
            Software para procesos operativos y productos que necesitan conectar personas, decisiones y sistemas. IA, agentes, automatización e integraciones cuando tienen sentido para el caso.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contacto">
              Contacto pendiente de integración
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
          <h2>De un proceso disperso a una intervención conectada.</h2>
          <div className="flow-stage flow-stage-sources">
            <div className="flow-stage-heading">
              <span>01</span>
              <p>Señales de operación</p>
            </div>
            <div className="flow-inputs">
              <FlowNode>Personas</FlowNode>
              <FlowNode>Canales</FlowNode>
              <FlowNode>Datos</FlowNode>
              <FlowNode>Sistemas</FlowNode>
            </div>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-stage flow-stage-process">
            <div className="flow-stage-heading">
              <span>02</span>
              <p>Orquestación</p>
            </div>
              <FlowNode>Proceso y excepciones</FlowNode>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-stage flow-stage-intelligence">
            <div className="flow-stage-heading">
              <span>03</span>
              <p>Decisión</p>
            </div>
              <FlowNode accent>Reglas + contexto</FlowNode>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-stage flow-stage-results">
            <div className="flow-stage-heading">
              <span>04</span>
              <p>Resultado coordinado</p>
            </div>
            <div className="flow-output">
               <FlowNode accent>Intervención</FlowNode>
               <FlowNode accent>Acción conectada</FlowNode>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
