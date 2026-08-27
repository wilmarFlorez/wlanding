"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type SubmissionState = "idle" | "loading" | "unavailable";

export function ContactSection() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusForm = () => {
      if (window.location.hash === "#contacto-form") {
        window.setTimeout(() => nameInput.current?.focus(), 200);
      }
    };

    focusForm();
    window.addEventListener("hashchange", focusForm);
    return () => window.removeEventListener("hashchange", focusForm);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("loading");
    window.setTimeout(() => setSubmissionState("unavailable"), 300);
  }

  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Revisar un proceso operativo</p>
          <h2 id="contact-title">¿Hay un proceso que su equipo sigue sosteniendo manualmente?</h2>
          <p>No necesitas tener un proyecto de IA definido. Comparte un proceso concreto que dependa de seguimiento manual, información dispersa, actualizaciones repetidas o coordinación entre personas.</p>
          <p>Revisaré si parece haber encaje para una conversación inicial sobre el problema y una posible solución.</p>
          <div className="fit-copy">
            <p><strong>Es un buen punto de partida si</strong> tienes una operación relevante, un proceso específico y acceso a las personas que conocen el flujo y los sistemas implicados.</p>
            <p><strong>Probablemente no aplica si</strong> buscas horas de desarrollo para una especificación cerrada, un chatbot genérico o una promesa de resultados antes de revisar la operación.</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="form-field">
            <label htmlFor="contacto-form">Nombre</label>
            <input ref={nameInput} id="contacto-form" name="name" autoComplete="name" required />
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="company">Empresa</label>
              <input id="company" name="company" autoComplete="organization" required />
            </div>
            <div className="form-field">
              <label htmlFor="role">Cargo</label>
              <input id="role" name="role" autoComplete="organization-title" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="email">Correo corporativo</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="process">¿Qué proceso operativo quieres revisar?</label>
            <textarea id="process" name="process" rows={5} required aria-describedby="process-help" />
            <p id="process-help">Por ejemplo: seguimiento de servicios, novedades, actualización de estados o validación documental.</p>
          </div>
          <div className="form-field">
            <label htmlFor="context">Contexto adicional <span>(opcional)</span></label>
            <textarea id="context" name="context" rows={3} />
          </div>
          <button className="button" type="submit" disabled={submissionState === "loading"}>
            {submissionState === "loading" ? "Preparando envío..." : "Enviar proceso para revisión"}
          </button>
          {submissionState === "unavailable" && (
            <p className="form-status" role="status">
              El formulario aún no tiene una vía de envío conectada. Tu información no se ha enviado.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
