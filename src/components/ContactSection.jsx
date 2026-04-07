import { useContact } from '../context/ContactContext.jsx';

export default function ContactSection({ lead }) {
  const { open } = useContact();

  return (
    <section className="section" id="contact">
      <h2 className="contact-header" data-aos="fade-up">
        Contact
      </h2>
      <p data-aos="fade-up">{lead}</p>
      <button type="button" className="btn btn-primary main-button" data-aos="fade-up" onClick={open}>
        <p>Leave a Message</p>
      </button>
    </section>
  );
}
