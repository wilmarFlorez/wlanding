import { ContactForm } from "@/components/landing/ContactForm";
import { content, NUTEAM_URL, type Locale } from "@/components/landing/data";

export function ContactSection({ locale }: { locale: Locale }) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const copy = content[locale].contact;

  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-copy">
           <p className="eyebrow">{copy.eyebrow}</p>
           <h2 id="contact-title">{copy.title}</h2>
           <p>{copy.description}</p>
           <div className="contact-route">
             <h3>{copy.commercialTitle}</h3>
             <p>{copy.commercialDescription}</p>
             <a className="text-link" href={NUTEAM_URL} target="_blank" rel="noreferrer">
               {copy.commercialCta} <span aria-hidden="true">↗</span><span className="sr-only"> ({copy.newTab})</span>
             </a>
           </div>
        </div>
        <div className="contact-form-panel">
           <h3>{copy.formTitle}</h3>
           <p>{copy.formDescription}</p>
           <ContactForm locale={locale} turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </section>
  );
}
