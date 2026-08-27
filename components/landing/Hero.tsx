export function Hero() {
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Sobre mí</p>
          <h1 id="hero-title">Wilmar Florez Samudio, Product Architect &amp; Builder.</h1>
          <p className="hero-role">Trabajo entre el problema, la arquitectura y lo que finalmente se construye.</p>
           <p className="hero-lede">
             Mi enfoque combina entendimiento de producto, diseño de sistemas y construcción de software para convertir una situación concreta en una intervención usable y conectada.
           </p>
          <div className="focus-list" aria-label="Enfoque">
            <span>Producto</span>
            <span>Arquitectura</span>
            <span>Construcción</span>
          </div>
          <div className="hero-actions">
            <a className="button" href="#contacto">
              Contacto pendiente de integración
            </a>
            <a className="text-link" href="#problemas">
              Ver problemas que puedo abordar <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
