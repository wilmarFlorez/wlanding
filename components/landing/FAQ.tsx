import { faqs } from "@/components/landing/data";

export function FAQ() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-container">
        <div className="section-intro">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-title">Lo esencial antes de empezar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
