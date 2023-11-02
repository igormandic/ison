import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-page">
        <div className="footer-logo-phone">
          <img src="/images/logo_ison.png" alt="ison logo" />
        </div>
        <div className="footer-left">
          <div className="register-login">{t("kontakt")}</div>
          <div className="register-input" id="contact">
            <input type="text" placeholder={t("name")} />
          </div>
          <div className="register-input">
            <input type="text" placeholder="e-mail" />
          </div>
          <div className="register-input">
            <input type="text" placeholder={t("message")} />
          </div>
          <div className="register-button">
            <button>{t("send")}</button>
          </div>
        </div>
        <div className="footer-content">
          <img
            src="/images/logo_ison.png"
            className="footer-logo"
            alt="ison logo"
          />
          <div className="footer-media">
            <a
              href="https://www.instagram.com/ison_film/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} color="white" size="3x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552144662009"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} color="white" size="3x" />
            </a>
            <a
              href="https://www.youtube.com/@isonfilm"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} color="white" size="3x" />
            </a>
            <a
              href="https://vimeo.com/user209580536"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faVimeo} color="white" size="3x" />
            </a>
          </div>
          <div className="footer-text">
            <b>{t("kontaktFuter")}</b> <br />
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
