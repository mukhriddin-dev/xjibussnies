import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// components
import { Email, Facebook, Telegram, Instagram } from "../SVG/SVG";

// imgs
import Logo from "../../assets/imgs/logo.png";
import useAuth from "../../hooks/UseAuth";

const Header = () => {
  const [token] = useAuth(false);
  const [userId, setUserId] = useState('');
  // id length 7
  const id = localStorage.getItem("id") || "";
  useEffect(() => {
    const idLength = 7 - id.toString().length;
    const idFill = "0".repeat(idLength);
    setUserId(idFill+id)
  }, [token, id])
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar--mobile">
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

        <Link className="logo__link" to="/">
          <img className="logo__img" src={Logo} alt="logo" />
        </Link>

        <div className="contact">
          <a
            className="contact__link contact__link--mobile"
            href="tel:+998330090207"
            target="_blank"
            rel="noopener noreferrer"
          >
            +99833 009 02 07
          </a>
          {token && <p>ID: {userId}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
