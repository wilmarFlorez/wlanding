export function ContactSection() {
  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">¿Hay un problema o iniciativa que vale la pena explorar?</h2>
          <p>Puede empezar por un proceso manual, una integración pendiente o una decisión repetible que necesita mejor contexto. No es necesario llegar con una solución técnica definida.</p>
          <div className="fit-copy">
            <p><strong>Es un buen punto de partida si</strong> tienes una operación relevante, un proceso específico y acceso a las personas que conocen el flujo y los sistemas implicados.</p>
            <p><strong>Probablemente no aplica si</strong> buscas horas de desarrollo para una especificación cerrada, un chatbot genérico o una promesa de resultados antes de revisar la operación.</p>
          </div>
        </div>
        <div className="contact-unavailable" aria-label="Estado de contacto">
          <p className="flow-label">Canal pendiente de integración</p>
          <h3>El contacto aún no está habilitado.</h3>
          <p>No hay un destino configurado para recibir información desde esta página. Por eso no se solicita ni se almacena ningún dato aquí.</p>
          <p className="contact-requirement"><strong>Falta definir:</strong> un canal de recepción funcional, ya sea correo, agenda, CRM o endpoint, y el flujo de respuesta posterior.</p>
        </div>
      </div>
    </section>
  );
}
