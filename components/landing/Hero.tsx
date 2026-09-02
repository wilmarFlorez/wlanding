export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div>
          <p className="eyebrow">Product Architect &amp; Builder</p>
          <p className="hero-name">Wilmar Florez Samudio</p>
          <h1 id="hero-title">Diseño y construyo productos, automatizaciones y sistemas con IA para resolver problemas operativos</h1>
          <p className="hero-lede">
            Trabajo con equipos que necesitan convertir información dispersa, procesos manuales o decisiones repetibles en herramientas que se puedan usar.
          </p>
          <div className="focus-list" aria-label="Capacidades principales">
            <span>AI Agents</span>
            <span>Automation &amp; Workflows</span>
            <span>Integrations</span>
            <span>AI-powered Software</span>
          </div>
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
