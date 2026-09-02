export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="wordmark" href="#inicio">
          Wilmar Florez Samudio
        </a>
        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#construyo">Qué construyo</a>
          <a href="#logistica">Logística y operaciones</a>
          <a href="#proyectos">Proyectos y demostraciones</a>
          <a href="#sobre-wilmar">Sobre Wilmar</a>
        </nav>
        <a className="button button-small" href="#contacto">
          Contactar a Wilmar
        </a>
      </div>
    </header>
  );
}
