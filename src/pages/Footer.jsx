import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-page">
        <div className="footer-left">
          <div className="register-login">KONTAKTIRAJTE NAS!</div>
          <div className="register-input" id="contact">
            <input type="text" placeholder="Ime i Prezime" />
          </div>
          <div className="register-input">
            <input type="text" placeholder="e-mail" />
          </div>
          <div className="register-input">
            <input type="text" placeholder="poruka" />
          </div>
          <div className="register-button">
            <button>POŠALJI</button>
          </div>
        </div>
        <div className="footer-content">
          <img
            src="/images/logo_ison.png"
            className="footer-logo"
            alt="ison logo"
          />
          <div className="footer-media">
            <a href="https://www.instagram.com/ison_film/ ">
              <FontAwesomeIcon icon={faInstagram} color="white" size="3x" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552144662009">
              <FontAwesomeIcon icon={faFacebook} color="white" size="3x" />
            </a>
            <a href="https://www.youtube.com/@isonfilm">
              <FontAwesomeIcon icon={faYoutube} color="white" size="3x" />
            </a>
          </div>
          <div className="footer-text">
            <b>KONTAKT</b> <br />
            +381 61 234 5678
            <br />
            office@isonfilmproductions.rs
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 2023 Ison Film Productions. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
