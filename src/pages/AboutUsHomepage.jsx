const AboutUsHomepage = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-us-all-page">
        <div className="about-us-baner-homepage">
          Dobrodošli u svet gde kreativnost ne poznaje granice, a svaki kadar
          priča priču.
        </div>
        <div className="about-us-title-homepage">ISON FILM PRODUCTIONS</div>
        <div className="about-us-video-div">
          <video className="about-us-video" controls autoPlay muted loop>
            <source src="/images/video_homepage.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="partneri">
          <div className="partneri-title">NAŠI PARTNERI</div>
          <div className="partneri-logovi">
            <button>
              <img src="/images/partneri/partner1.png" alt="partner_logo" />
            </button>
            <button>
              <img src="/images/partneri/partner2.png" alt="partner_logo" />
            </button>
            <button>
              <img src="/images/partneri/partner3.jpg" alt="partner_logo" />
            </button>
            <button>
              <img src="/images/partneri/partner4.jpg" alt="partner_logo" />
            </button>
            <button>
              <img src="/images/partneri/partner5.jpeg" alt="partner_logo" />
            </button>
          </div>
        </div>
        <div className="about-us-video-div">
          <video className="about-us-video" controls autoPlay muted loop>
            <source src="/images/reklama.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHomepage;
