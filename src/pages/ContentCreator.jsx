import Header from "../components/Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const ContentCreator = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us" id="about-us">
      <Header />
      <div className="about-us-all-page" style={{ paddingBottom: "15vh" }}>
        <div className="about-us-title">{t("contentTitle")}</div>
        <div className="about-us-page" style={{ paddingTop: "10vh" }}>
          <div className="about-us-left" style={{ width: "90%" }}>
            <img
              src="/images/contentCreator.jpg"
              className="ison-about-us-left"
              alt="ison background"
            />
          </div>
          <div className="about-us-right" style={{ height: "auto" }}>
            <div className="about-us-right-all-text">
              <div className="about-us-right-text">{t("content1")}</div>

              <div className="about-us-right-text">{t("content2")}</div>

              <div className="about-us-right-text">{t("content3")}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentCreator;
