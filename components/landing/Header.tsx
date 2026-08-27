export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">
          Wilmar Florez Samudio
        </a>
        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#problemas">Problemas</a>
            <a href="#proceso">Método</a>
            <a href="#logistica">Logística</a>
            <a href="#ejemplos">Demos</a>
        </nav>
        <a className="button button-small" href="#contacto">
          Contacto
        </a>
      </div>
    </header>
  );
}
