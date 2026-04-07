import Modal from 'react-bootstrap/Modal';
import { useContact } from '../context/ContactContext.jsx';

const FORMSPREE = 'https://formspree.io/f/xrgvlprb';

export default function ContactModal() {
  const { show, close } = useContact();

  return (
    <Modal show={show} onHide={close} centered id="Modal" aria-labelledby="ModalLabel">
      <Modal.Header closeButton>
        <Modal.Title as="h3" className="fs-5" id="ModalLabel">
          Leave a message!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="contact-form" action={FORMSPREE} method="POST">
          <label htmlFor="contact-name">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="John Doe"
            aria-label="Type name"
          />

          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            name="_replyto"
            placeholder="john@example.com"
            aria-label="Type email"
          />

          <label htmlFor="contact-message">Message</label>
          <input
            type="text"
            id="contact-message"
            name="message"
            placeholder="Your message"
            aria-label="Type message"
          />

          <input type="submit" value="Send" />
        </form>
      </Modal.Body>
    </Modal>
  );
}
