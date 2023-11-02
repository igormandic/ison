import Header from "../components/Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us" id="about-us">
      <Header />
      <div className="about-us-all-page">
        <div className="about-us-title">ISON FILM PRODUCTIONS</div>
        <div className="about-us-baner">{t("aboutUsBaner")}</div>
        <div className="about-us-page">
          <div className="about-us-left">
            <img
              src="/images/logo_homepage.png"
              className="ison-about-us-left"
              alt="ison background"
            />
          </div>
          <div className="about-us-right">
            <div className="about-us-right-all-text">
              <div className="about-us-right-text">{t("oNama1")}</div>

              <div className="about-us-right-text">{t("oNama2")}</div>

              <div className="about-us-right-text">{t("oNama3")}</div>
              <div className="about-us-right-text">{t("oNama4")}</div>
              <div className="about-us-right-text">{t("oNama5")}</div>
              <div className="about-us-right-text" id="about-us-right-text">
                {t("oNama6")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
