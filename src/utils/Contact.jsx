import "./Contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="contact_section">
      <h4 className="contact_title">
        <div className="contact_title-divider">
          <span className="contact_title">CON</span>
          <div className="contact_title-line"></div>
        </div>

        <div className="contact_title-divider">
          <div className="contact_title-line"></div>
          <span className="contact_title">TACT</span>
        </div>
      </h4>
      <ContactForm />
    </section>
  );
};

export default Contact;
