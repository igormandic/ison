import { useState } from "react";
import Header from "../components/Header";
import Footer from "./Footer";

const FilmDetails = () => {
  const [isImage, setImage] = useState(false);

  const showImage = (tab) => {
    setImage(tab);
  };

  return (
    <div className="film-details" id="film-details">
      <Header />
      <div className="film-details-all-page">
        <div className="film-details-img">
          <img src="/images/filmovi/mfp/1.png" alt="mfp" />
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
                  src="/images/filmovi/mfp/MOM_TREJLER_master.mov"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="film-details-title">Moje omiljeno mesto u 36h</div>
            <div className="film-details-text">
              Kratki film koji je osvojio drugo mesto na regionalnom takmicenju
              Create your film. Postoje zavisnosti u savremenom dobu, kojima
              nije dato dovoljno pažnje. Ako se izmaknu kontroli, pojedincu mogu
              stvoriti brojne posledice.
            </div>
          </div>
        ) : (
          <div className="film-trailer">
            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/mfp/1.png" alt="ison mfp" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/mfp/2.png" alt="ison mfp" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/mfp/3.png" alt="ison mfp" />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/mfp/4.png" alt="ison mfp" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/mfp/5.png" alt="ison mfp" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/mfp/6.png" alt="ison mfp" />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img src="/images/filmovi/mfp/7.png" alt="ison mfp" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/mfp/8.png" alt="ison mfp" />
              </div>
              <div className="film-img">
                <img src="/images/filmovi/mfp/9.png" alt="ison mfp" />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FilmDetails;
