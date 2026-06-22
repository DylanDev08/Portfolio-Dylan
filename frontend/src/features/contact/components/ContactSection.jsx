import { SectionTitle } from "../../../components/common/SectionTitle";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="section section--alt" id="contacto">
      <div className="container">
        <SectionTitle
          eyebrow="Contacto"
          title="Contacto profesional."
          description="Un espacio directo para empresas, reclutadores o equipos que quieran comunicarse conmigo."
        />
        <ContactForm />
      </div>
    </section>
  );
}
