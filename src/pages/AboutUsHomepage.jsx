import { useTranslation } from "react-i18next";

const AboutUsHomepage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us" id="about-us">
      <div className="about-us-all-page">
        <div className="about-us-baner-homepage">{t("aboutUsBaner")}</div>
        <div className="about-us-title-homepage">
          <img src="/images/logo_ison.png" alt="Ison Homepage" />
        </div>
        <div className="about-us-video-div">
          <video className="about-us-video" controls autoPlay muted loop>
            <source src="/images/video_homepage.m4v" type="video/mp4" />
          </video>
        </div>
        <div className="partneri">
          <div className="partneri-title">{t("aboutUsPartneri")}</div>
          <div className="partneri-logovi">
            <button>
              <img src="/partneri/partner1.png" alt="partner_logo" />
            </button>
            <button>
              <img src="/partneri/partner2.jpg" alt="partner_logo" />
            </button>
            <button>
              <img src="/partneri/partner3.png" alt="partner_logo" />
            </button>
            <button>
              <img src="/partneri/partner4.png" alt="partner_logo" />
            </button>
            <button>
              <img src="/partneri/partner5.jpeg" alt="partner_logo" />
            </button>
          </div>
        </div>
        <div className="about-us-video-div">
          <video className="about-us-video" controls autoPlay muted loop>
            <source src="/images/video_homepage1.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHomepage;
