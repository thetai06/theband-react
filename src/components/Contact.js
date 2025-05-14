import './CSS/Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <p>
            <span role="img" aria-label="phone">📞</span> Chicago, US
          </p>
          <p>
            <span style={{fontStyle: 'italic'}}>ℹ</span> Phone: +00 151515
          </p>
          <p>
            <span role="img" aria-label="mail">✉</span> Email: mail@mail.com
          </p>
        </div>
        <div className="contact-form-block">
          <h2>Contact</h2>
          <p className="contact-note"><em>Fan?Drop a note!</em></p>
          <form className="contact-form">
            <div className="contact-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Messenger" className="contact-message" required />
            <button type="submit" className="contact-send-btn">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;