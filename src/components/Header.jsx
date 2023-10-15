import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { VscClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";

const EHeader = {
  Homepage: "Početna",
  AboutUs: "O Nama",
  Projects: "Projekti",
  Contact: "Kontakt",
};

const Header = () => {
  const { t } = useTranslation();
  const [header, setHeader] = useState("header-top");
  const [openNavigation, setOpenNavigation] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 100) {
      return setHeader("header-top");
    } else if (window.scrollY >= 100) {
      return setHeader("header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <div className={header}>
        <div className="header_logo">
          <a href="/">
            <img src="/images/logo_ison.png" alt="Ison Homepage" />
          </a>
        </div>

        <div className="header_navigation">
          <div>
            <a href="/">{t(EHeader.Homepage)}</a>
          </div>
          <div>
            <a href="/about-us" className="production-button">
              {t(EHeader.AboutUs)}
            </a>
          </div>
          <div>
            <a href="/projects">{t(EHeader.Projects)}</a>
          </div>
          <div>
            <a href="/#contact">{t(EHeader.Contact)}</a>
          </div>
        </div>
      </div>

      <div className={`${header}-mobile ${openNavigation ? "no-padding" : ""}`}>
        <div className="header_logo">
          <img src="/images/logo_ison.png" alt="Ison Homepage" />
        </div>
        <div
          className="header_navigation-hamburger"
          onClick={() => setOpenNavigation(true)}
        >
          <RxHamburgerMenu />
        </div>

        {openNavigation && (
          <div className="header_navigation-mobile">
            <div
              className="header_navigation-mobile-close"
              onClick={() => setOpenNavigation(false)}
            >
              <VscClose />
            </div>
            <div className="header-navigation-content-mobile">
              <div>
                <a href="/">{t(EHeader.Homepage)}</a>
              </div>
              <div>
                <a href="/about-us" className="production-button-mobile">
                  {t(EHeader.AboutUs)}
                </a>
              </div>
              <div>
                <a href="/film-tv-productions">{t(EHeader.Projects)}</a>
              </div>
              <div>
                <a href="/">{t(EHeader.Contact)}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
