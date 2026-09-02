import { ContactForm } from "@/components/landing/ContactForm";

export function ContactSection() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-copy">
          <h2 id="contact-title">¿Buscas construir una iniciativa o sumar capacidad a tu equipo?</h2>
          <p>Cuéntame sobre el proyecto, proceso, sistema o rol. Puede empezar con una necesidad de automatización, IA o producto; no hace falta llegar con una solución técnica definida.</p>
        </div>
        <div className="contact-form-panel">
          <p className="flow-label">Consulta inicial</p>
          <h3>Cuéntame qué buscas construir.</h3>
          <p>Responderé al correo que registres para entender el contexto y cómo podría aportar.</p>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </section>
  );
}
