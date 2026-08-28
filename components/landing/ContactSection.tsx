import { ContactForm } from "@/components/landing/ContactForm";

export function ContactSection() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">¿Hay un problema o iniciativa que vale la pena explorar?</h2>
          <p>Puede empezar por un proceso manual, una integración pendiente o una decisión repetible que necesita mejor contexto. No es necesario llegar con una solución técnica definida.</p>
        </div>
        <div className="contact-form-panel">
          <p className="flow-label">Consulta inicial</p>
          <h3>Cuéntame qué está ocurriendo.</h3>
          <p>Responderé al correo que registres para entender si vale la pena revisarlo juntos.</p>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </section>
  );
}
