import Image from "next/image";
import { content, type Locale } from "@/components/landing/data";

export function Logistics({ locale }: { locale: Locale }) {
  const copy = content[locale].logistics;
  return (
    <section className="section logistics-section" id="logistica" aria-labelledby="logistics-title">
      <div className="container logistics-layout">
        <div className="logistics-image">
          <Image
            src="/landing/truck.jpg"
             alt={copy.imageAlt}
            fill
            sizes="(max-width: 900px) calc(100vw - 48px), 46vw"
          />
        </div>
        <div>
           <h2 id="logistics-title">{copy.title}</h2>
           <p>{copy.description}</p>
          <div className="logistics-context">
             <p className="flow-label">{copy.context}</p>
            <ul>
               {copy.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
           <a className="text-link section-link" href="#proyectos">{copy.project} <span aria-hidden="true">-&gt;</span></a>
        </div>
      </div>
    </section>
  );
}
