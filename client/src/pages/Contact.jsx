import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <h1 className="contact-page__title">Get in touch</h1>

      <div className="contact-page__row">
        <span className="contact-page__icon">📞</span>
        <span className="contact-page__value">+256 7XX XXX XXX</span>
      </div>

      <div className="contact-page__row">
        <span className="contact-page__icon">✉️</span>
        <span className="contact-page__value">jopafashions@gmail.com</span>
      </div>

      <a href="https://wa.me/256700000000" target="_blank" rel="noreferrer" className="contact-page__row contact-page__row--link">
        <span className="contact-page__icon">💬</span>
        <span className="contact-page__value">Chat on WhatsApp</span>
      </a>

      <a href="/gallery" className="contact-page__cta btn btn--primary">
        Browse styles and send interest
      </a>
    </main>
  )
}

export default Contact