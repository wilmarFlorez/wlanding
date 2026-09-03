import { content, NUTEAM_URL, type Locale } from "@/components/landing/data";

export function NuTeam({ locale }: { locale: Locale }) {
  const copy = content[locale].nuteam;

  return (
    <section className="section nuteam-section" id="nuteam" aria-labelledby="nuteam-title">
      <div className="container nuteam-panel">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="nuteam-title">{copy.title}</h2>
        </div>
        <div className="nuteam-copy">
          <p>{copy.description}</p>
          <p>{copy.boundary}</p>
          <a className="button" href={NUTEAM_URL} target="_blank" rel="noreferrer">
            {copy.cta} <span aria-hidden="true">↗</span><span className="sr-only"> ({copy.newTab})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
