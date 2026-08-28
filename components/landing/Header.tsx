import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">
          <Image
            className="brand-mark"
            src="/icon.svg"
            width={30}
            height={30}
            alt=""
          />
        </a>
        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#problemas">Problemas</a>
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
