import { useState } from "react";
import Header from "../components/Header";
import Footer from "./Footer";

const Tracak = () => {
  const [isImage, setImage] = useState(false);

  const showImage = (tab) => {
    setImage(tab);
  };

  return (
    <div className="film-details" id="film-details">
      <Header />
      <div className="film-details-all-page">
        <div className="film-details-img">
          <img src="/images/filmovi/tracak/1.jpg" alt="tracak" />
        </div>
        <div className="film-details-menu">
          <button onClick={() => showImage(false)}>
            <div className="film-details-tab" id={!isImage ? "selected" : ""}>
              Trailer & more
            </div>
          </button>
          <button onClick={() => showImage(true)}>
            <div className="film-details-tab" id={isImage ? "selected" : ""}>
              Galerija
            </div>
          </button>
        </div>

        {!isImage ? (
          <div className="film-trailer">
            <div className="film-details-video">
              <video className="film-video" controls autoPlay muted loop>
                <source
                  src="/images/filmovi/tracak/MOM_TREJLER_master.mov"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="film-details-title">Tračak</div>
            <div className="film-details-text">
              Umesto na utehu i nadu, nevina žrtva rata nailazi na odbacivanje.
              Zbunjen, izgnanik ne shvata čime je izazvao poglede prezira ljudi
              oko njega. Kada kroz umetnost i muziku naiđe na prihvatanje i
              razumevanje, tek tada on dobija tračak nade i njegov život ponovo
              dobija boju.
            </div>
          </div>
        ) : (
          <div className="film-trailer">
            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/tracak/1.jpg" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/1.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/2.png" alt="ison tracak" />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/tracak/3.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/4.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/5.png" alt="ison tracak" />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/tracak/6.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/7.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/8.png" alt="ison tracak" />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/tracak/9.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/10.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/11.png" alt="ison tracak" />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/tracak/12.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/13.png" alt="ison tracak" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/tracak/14.png" alt="ison tracak" />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Tracak;
