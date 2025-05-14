import './CSS/Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-bg"></div>
      </footer>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <p>© 2025 The Band. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;