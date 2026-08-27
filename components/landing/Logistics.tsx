import Image from "next/image";

export function Logistics() {
  return (
    <section className="section logistics-section" id="logistica" aria-labelledby="logistics-title">
      <div className="container logistics-layout">
        <div className="logistics-intro">
          <p className="eyebrow">Especialización visible</p>
          <h2 id="logistics-title">Logística y operaciones</h2>
          <div className="logistics-image">
            <Image
              src="/landing/truck.jpg"
              alt="Camión de carga en carretera durante una operación de transporte terrestre"
              fill
              sizes="(max-width: 900px) calc(100vw - 48px), 52vw"
            />
          </div>
        </div>
        <div className="logistics-copy">
          <p>En transporte terrestre y 3PL, una carga se mueve entre llamadas, correos, mensajes y sistemas. Cada cambio de cita, ETA o disponibilidad exige recuperar contexto, coordinar a las partes y actualizar el estado correcto.</p>
          <p>El trabajo parte de esos puntos de fricción: confirmar recogidas, perseguir documentación, detectar retrasos y escalar excepciones antes de que afecten la entrega. Se diseña el flujo que reúne información, define la siguiente acción y deja cada decisión trazable.</p>
          <dl className="logistics-signals">
            <div><dt>Contexto</dt><dd>Transporte terrestre, 3PL y coordinación de cargas.</dd></div>
            <div><dt>Atención</dt><dd>Citas, ETA, excepciones, documentos y comunicación.</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
