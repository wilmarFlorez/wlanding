import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="wordmark" href="#inicio" aria-label="Wilmar Florez Samudio, inicio">
          <Image src="/icon.svg" alt="" width={36} height={36} priority />
        </a>
        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#construyo">Qué construyo</a>
          <a href="#logistica">Logística y operaciones</a>
          <a href="#proyectos">Proyecto destacado</a>
        </nav>
        <a className="button button-small" href="#contacto">
          Contactar a Wilmar
        </a>
      </div>
    </header>
  );
}
