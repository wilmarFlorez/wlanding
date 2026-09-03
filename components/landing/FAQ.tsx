import { content, type Locale } from "@/components/landing/data";

export function FAQ({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-container">
        <div className="section-intro">
          <h2 id="faq-title">{copy.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {copy.faqs.map(([question, answer], index) => (
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
