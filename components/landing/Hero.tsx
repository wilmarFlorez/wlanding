export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Product Architect &amp; Builder</p>
          <p className="hero-name">Wilmar Florez Samudio</p>
          <h1 id="hero-title">Diseño y construyo AI Agents, automatización, integraciones y software con IA para problemas operativos reales.</h1>
          <p className="hero-lede">
            Trabajo a partir de un proceso, una decisión o una información que hoy genera trabajo manual, coordinación dispersa o falta de visibilidad. Defino la intervención adecuada y construyo una solución conectada con la operación y los sistemas existentes.
          </p>
          <div className="focus-list" aria-label="Capacidades principales">
            <span>AI Agents</span>
            <span>Automation &amp; Workflows</span>
            <span>Integrations</span>
            <span>AI-powered Software</span>
          </div>
          <p className="hero-specialization">Especialización y foco actual: logística y operaciones.</p>
          <div className="hero-actions">
            <a className="button" href="#contacto">
              Contactar a Wilmar
            </a>
            <a className="text-link" href="#construyo">
              Ver qué construyo <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
