export function About() {
  return (
    <section className="section about-section" id="sobre-mi" aria-labelledby="about-title">
      <div className="container about-content">
        <p className="eyebrow">Sobre mí</p>
        <h2 id="about-title">Wilmar, Product Architect &amp; Builder.</h2>
        <p className="about-role">Trabajo entre el problema, la arquitectura y lo que finalmente se construye.</p>
        <p>Mi enfoque combina entendimiento de producto, diseño de sistemas y construcción de software para convertir una situación concreta en una intervención usable y conectada.</p>
        <p>Logística y operaciones son una especialización visible de mi trabajo. El mismo criterio aplica a otros contextos donde la información, las decisiones y los sistemas necesitan trabajar mejor juntos.</p>
        <div className="focus-list" aria-label="Enfoque">
          <span>Producto</span><span>Arquitectura</span><span>Construcción</span>
        </div>
      </div>
    </section>
  );
}
