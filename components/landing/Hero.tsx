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
            <span className="flow-privacy"><i aria-hidden="true" /> Sin datos de cliente</span>
          </div>
          <h2>Del ruido operativo a una acción que llega a tiempo.</h2>
          <div className="flow-stage flow-stage-sources">
            <div className="flow-stage-heading">
              <span>01</span>
              <p>Señales de operación</p>
            </div>
            <div className="flow-inputs">
              <FlowNode><i className="flow-node-mark flow-node-mark-chat" aria-hidden="true" />WhatsApp</FlowNode>
              <FlowNode><i className="flow-node-mark flow-node-mark-mail" aria-hidden="true" />Correo</FlowNode>
              <FlowNode><i className="flow-node-mark flow-node-mark-call" aria-hidden="true" />Llamadas</FlowNode>
              <FlowNode><i className="flow-node-mark flow-node-mark-system" aria-hidden="true" />Sistemas</FlowNode>
            </div>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-stage flow-stage-process">
            <div className="flow-stage-heading">
              <span>02</span>
              <p>Orquestación</p>
            </div>
            <FlowNode><i className="flow-node-mark flow-node-mark-process" aria-hidden="true" />Proceso operativo</FlowNode>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-stage flow-stage-intelligence">
            <div className="flow-stage-heading">
              <span>03</span>
              <p>Decisión</p>
            </div>
            <FlowNode accent><i className="flow-node-mark flow-node-mark-spark" aria-hidden="true" />Reglas + contexto <b>activo</b></FlowNode>
          </div>
          <div className="flow-connector" aria-hidden="true" />
          <div className="flow-stage flow-stage-results">
            <div className="flow-stage-heading">
              <span>04</span>
              <p>Resultado coordinado</p>
            </div>
            <div className="flow-output">
              <FlowNode accent><i className="flow-node-mark flow-node-mark-person" aria-hidden="true" />Intervención</FlowNode>
              <FlowNode accent><i className="flow-node-mark flow-node-mark-send" aria-hidden="true" />Actualización / notificación</FlowNode>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
