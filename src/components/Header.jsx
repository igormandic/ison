import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { VscClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { scroller } from "react-scroll";

const EHeader = {
  Homepage: "homepage",
  AboutUs: "aboutUs",
  Projects: "projects",
  Contact: "contact",
};

const Header = () => {
  const [header, setHeader] = useState("header-top");
  const [openNavigation, setOpenNavigation] = useState(false);
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (language) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  const onChangePage = (route) => {
    scroller.scrollTo(route, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

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
          <div onClick={() => onChangePage("contact")} key={"contact"}>
            <div className="contact-header">{t(EHeader.Contact)}</div>
          </div>
        </div>
        <div className="header-language">
          <div className="header-img-lg">
            <button
              className="header-lg-button"
              onClick={() => onChangeLanguage("rs")}
            >
              <img src="/images/serbian_logo.png" alt="Ison Homepage" />
            </button>
          </div>
          <div className="header-img-lg">
            <button
              className="header-lg-button"
              onClick={() => onChangeLanguage("en")}
            >
              <img src="/images/england_logo.png" alt="Ison Homepage" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${header}-mobile ${openNavigation ? "no-padding" : ""}`}>
        <div className="header_logo">
          <a href="/">
            <img src="/images/logo_ison.png" alt="Ison Homepage" />
          </a>
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
                <a href="/projects">{t(EHeader.Projects)}</a>
              </div>
              <div
                style={{
                  paddingBottom: "6vh",
                }}
                onClick={() => onChangePage("contact")}
                key={"contact"}
              >
                <div className="contact-header">{t(EHeader.Contact)}</div>
              </div>
              <span
                onClick={() => onChangeLanguage("en")}
                style={{
                  marginRight: 15,
                  fontSize: "1.5rem",
                }}
              >
                eng
              </span>{" "}
              <span
                onClick={() => onChangeLanguage("rs")}
                style={{ marginLeft: 15, fontSize: "1.5rem" }}
              >
                srb
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
