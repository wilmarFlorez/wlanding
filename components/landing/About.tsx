export function About() {
  return (
    <section className="section about-section" id="sobre-mi" aria-labelledby="about-title">
      <div className="container about-content">
        <p className="eyebrow">Sobre mí</p>
        <h2 id="about-title">Producto, arquitectura y construcción para problemas operativos.</h2>
        <p>Soy Product Architect &amp; Builder especializado en IA aplicada a problemas operativos.</p>
        <p>Combino producto, arquitectura y construcción para llevar una oportunidad desde el proceso actual hasta una solución funcionando. Mi foco está en transporte terrestre y 3PL, donde la coordinación, las excepciones y la información dispersa suelen concentrar trabajo operativo.</p>
        <p>La solución no empieza por elegir una herramienta. Empieza por entender cómo trabaja el equipo y construir la intervención que tenga sentido para ese contexto.</p>
        <div className="focus-list" aria-label="Enfoque">
          <span>Producto</span>
          <span>Arquitectura</span>
          <span>Construcción</span>
        </div>
        <p className="pending-note"><strong>Información profesional pendiente.</strong> Aquí se podrán incorporar una biografía verificable, la relación con NuTeam y demostraciones o publicaciones propias.</p>
      </div>
    </section>
  );
}
