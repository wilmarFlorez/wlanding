import Image from "next/image";

export function Logistics() {
  return (
    <section className="section logistics-section" id="logistica" aria-labelledby="logistics-title">
      <div className="container logistics-layout">
        <div className="logistics-image">
          <Image
            src="/landing/truck.jpg"
            alt="Camión de carga en carretera durante una operación de transporte terrestre"
            fill
            sizes="(max-width: 900px) calc(100vw - 48px), 46vw"
          />
        </div>
        <div>
          <p className="eyebrow">Especialización</p>
          <h2 id="logistics-title">Logística y operaciones</h2>
          <p>Mi foco comercial actual está en operaciones logísticas, especialmente transporte terrestre y 3PL, donde la coordinación, los cambios de estado, la documentación y la visibilidad dependen de información que se mueve entre personas, canales y sistemas.</p>
          <div className="logistics-context">
            <p className="flow-label">Áreas de contexto</p>
            <ul>
              <li>Seguimiento de novedades, estados y coordinación operativa.</li>
              <li>Validación y trazabilidad documental.</li>
              <li>Conexión entre TMS, ERP, CRM, mensajería y otros sistemas.</li>
            </ul>
          </div>
          <a className="text-link section-link" href="#proyectos">Explorar Freight Pilot <span aria-hidden="true">-&gt;</span></a>
        </div>
      </div>
    </section>
  );
}
