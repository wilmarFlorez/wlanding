import { content, type Locale } from "@/components/landing/data";

export function Capabilities({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <section className="section capabilities-section" id="capacidades" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-intro">
          <h2 id="capabilities-title">{copy.capabilityTitle}</h2>
          <p>{copy.capabilityIntro}</p>
        </div>
        <div className="capabilities-grid">
          {copy.capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
