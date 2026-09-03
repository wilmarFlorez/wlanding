import { content, type Locale } from "@/components/landing/data";

export function HowIWork({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <section className="section process-section" id="como-trabajo" aria-labelledby="process-title">
      <div className="container process-layout">
        <div className="section-intro">
          <h2 id="process-title">{copy.processTitle}</h2>
        </div>
        <ol className="process-list">
          {copy.workSteps.map(([title, description], index) => (
            <li className="process-item" key={title}>
              <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
