import "./Footer.css";

// components
import { Email, Facebook, Telegram, Instagram } from "../SVG/SVG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar__ul">
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
              </a>
            </li>
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram />
              </a>
            </li>
            <li className="navbar__list">
              <a
                className="navbar__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </nav>

        <a
          className="contact__link"
          href="tel:+998330090207"
          target="_blank"
          rel="noopener noreferrer"
        >
          +99833 009 02 07
        </a>
      </div>
    </footer>
  );
};

export default Footer;
