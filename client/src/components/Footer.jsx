import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo-placeholder" />
            <span className="footer__name">JOPA FASHIONS</span>
          </div>
          <div className="footer__right">
            <div className="footer__socials">
              <a href="#" aria-label="WhatsApp" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="#" aria-label="TikTok"   target="_blank" rel="noreferrer">TikTok</a>
              <a href="#" aria-label="X"        target="_blank" rel="noreferrer">X</a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noreferrer">Facebook</a>
            </div>
            <p className="footer__contact">Mbarara, Uganda · jopafashions@gmail.com</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} JOPA Fashions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer