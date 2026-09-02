import { capabilities } from "@/components/landing/data";

export function Capabilities() {
  return (
    <section className="section capabilities-section" id="construyo" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-intro">
          <h2 id="capabilities-title">La solución se define por el problema que debe resolver</h2>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
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
