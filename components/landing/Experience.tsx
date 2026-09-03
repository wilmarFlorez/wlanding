import { content, type Locale } from "@/components/landing/data";

export function Experience({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-intro">
          <h2 id="experience-title">{copy.experienceTitle}</h2>
          <p>{copy.experienceIntro}</p>
        </div>
        <ol className="experience-list">
          {copy.experience.map((item) => (
            <li className="experience-item" key={`${item.company}-${item.role}`}>
              <p className="experience-period">{item.period}</p>
              <div>
                <p className="eyebrow experience-company">{item.company}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
