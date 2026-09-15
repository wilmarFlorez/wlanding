import { content, type Locale } from "@/components/landing/data";

export function AutomationExamples({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <section className="section automation-section" id="automatizaciones" aria-labelledby="automation-title">
      <div className="container">
        <div className="automation-intro">
          <div className="section-intro">
            <h2 id="automation-title">{copy.automationTitle}</h2>
            <p>{copy.automationIntro}</p>
          </div>
          <p className="automation-note">{copy.automationNote}</p>
        </div>
        <div className="automation-grid">
          {copy.automationExamples.map((example, index) => {
            const titleId = `automation-${index}-title`;
            return (
              <article className="automation-card" aria-labelledby={titleId} key={example.title}>
                <div className="automation-card-top">
                  <span className="automation-context">{example.context}</span>
                </div>
                <h3 id={titleId}>{example.title}</h3>
                <p className="automation-outcome">{example.outcome}</p>
                <dl className="automation-flow">
                  <div><dt>{example.inputLabel}</dt><dd>{example.input}</dd></div>
                  <div><dt>{example.automationLabel}</dt><dd>{example.automation}</dd></div>
                  <div><dt>{example.controlLabel}</dt><dd>{example.control}</dd></div>
                </dl>
              </article>
            );
          })}
        </div>
        <p className="automation-closing">{copy.automationClosing}</p>
      </div>
    </section>
  );
}
