"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";
import { content, type Locale } from "@/components/landing/data";

type Status = "idle" | "success" | "error";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContactForm({ locale, turnstileSiteKey }: { locale: Locale; turnstileSiteKey?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const copy = content[locale].form;

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
        window.gtag?.("event", "conversion", {
          send_to: "AW-18456241301/zR2zCPnxovocEJXJz-BE",
          value: 1.0,
          currency: "COP",
        });
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
           <span>{copy.name} <span aria-hidden="true">*</span></span>
          <input autoComplete="name" name="name" required maxLength={120} />
        </label>
        <label>
           <span>{copy.email} <span aria-hidden="true">*</span></span>
          <input autoComplete="email" name="email" required type="email" maxLength={254} />
        </label>
        <label>
           {copy.company}
          <input autoComplete="organization" name="company" maxLength={160} />
        </label>
        <label>
           {copy.role}
          <input autoComplete="organization-title" name="role" maxLength={160} />
        </label>
      </div>
      <label>
         <span>{copy.message} <span aria-hidden="true">*</span></span>
        <textarea name="message" required maxLength={5000} rows={5} />
      </label>
      <label className="contact-honeypot" aria-hidden="true">
         {copy.website}
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
           {copy.unavailable}
        </p>
      )}
       <p className="contact-privacy">{copy.privacy}</p>
      <button className="button" disabled={isSubmitting || !turnstileSiteKey} type="submit">
         {isSubmitting ? copy.sending : copy.submit}
      </button>
      <p className={`contact-status contact-status-${status}`} aria-live="polite">
         {status === "success" && copy.success}
         {status === "error" && copy.error}
      </p>
    </form>
  );
}
