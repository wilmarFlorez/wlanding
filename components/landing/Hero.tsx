import { content, type Locale } from "@/components/landing/data";
import { AiSignal } from "@/components/landing/AiSignal";

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale].hero;
  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="hero-name">Wilmar Florez Samudio</p>
          <p className="eyebrow hero-role">{copy.role}</p>
          <h1 id="hero-title">{copy.title}</h1>
          <p className="hero-lede">
             {copy.lede}
          </p>
          <div className="focus-list" aria-label={copy.focusLabel}>
            <span>TypeScript + React</span>
            <span>Python + FastAPI</span>
            <span>PostgreSQL</span>
            <span>LLM Workflows</span>
            <span>Integrations</span>
          </div>
          <div className="hero-actions">
            <a className="button" href="#experiencia">
               {copy.experience}
            </a>
          </div>
        </div>
        <AiSignal locale={locale} />
      </div>
    </section>
  );
}
