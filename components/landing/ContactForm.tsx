"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";

type Status = "idle" | "success" | "error";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

export function ContactForm({ turnstileSiteKey }: { turnstileSiteKey?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result: unknown = await response.json();

      if (
        response.ok &&
        typeof result === "object" &&
        result !== null &&
        "success" in result &&
        result.success === true
      ) {
        form.reset();
        setStatus("success");
      } else {
        window.turnstile?.reset();
        setStatus("error");
      }
    } catch {
      window.turnstile?.reset();
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>
          Nombre <span aria-hidden="true">*</span>
          <input autoComplete="name" name="name" required maxLength={120} />
        </label>
        <label>
          Correo de trabajo <span aria-hidden="true">*</span>
          <input autoComplete="email" name="email" required type="email" maxLength={254} />
        </label>
        <label>
          Empresa
          <input autoComplete="organization" name="company" maxLength={160} />
        </label>
        <label>
          Cargo
          <input autoComplete="organization-title" name="role" maxLength={160} />
        </label>
      </div>
      <label>
        ¿Qué proceso o iniciativa quieres revisar? <span aria-hidden="true">*</span>
        <textarea name="message" required maxLength={5000} rows={5} />
      </label>
      <label className="contact-honeypot" aria-hidden="true">
        Sitio web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {turnstileSiteKey ? (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
          />
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-size="flexible" />
        </>
      ) : (
        <p className="contact-status contact-status-error" role="alert">
          La verificación de seguridad no está disponible.
        </p>
      )}
      <p className="contact-privacy">Cloudflare procesa la verificación de seguridad. Usaré tu información únicamente para responder a tu consulta.</p>
      <button className="button" disabled={isSubmitting || !turnstileSiteKey} type="submit">
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </button>
      <p className={`contact-status contact-status-${status}`} aria-live="polite">
        {status === "success" && "Recibí tu consulta. Te responderé por correo."}
        {status === "error" && "No fue posible enviar la consulta. Inténtalo nuevamente."}
      </p>
    </form>
  );
}
