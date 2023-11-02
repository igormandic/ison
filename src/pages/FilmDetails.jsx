import { useState } from "react";
import Header from "../components/Header";
import ModalComponent from "../components/Modal";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

let images = [
  "/images/filmovi/mfp/1.jpg",
  "/images/filmovi/mfp/2.jpg",
  "/images/filmovi/mfp/3.jpg",
  "/images/filmovi/mfp/4.jpg",
  "/images/filmovi/mfp/5.jpg",
  "/images/filmovi/mfp/6.jpg",
  "/images/filmovi/mfp/7.jpg",
  "/images/filmovi/mfp/8.jpg",
];
const FilmDetails = () => {
  const { t } = useTranslation();

  const [isImage, setImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let innerWidth = window.innerWidth;
  const showImage = (tab) => {
    setImage(tab);
  };
  const onClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="film-details" id="film-details">
      <Header />
      <div className="film-details-all-page">
        <div className="film-details-img">
          <img
            src={
              innerWidth > 600
                ? "/images/filmovi/mfp/glavna.jpg"
                : "/images/filmovi/mfp/glavna_phone.jpg"
            }
            alt="mfp"
            className="details-img-mfp"
          />
        </div>
        <div className="film-details-menu">
          <button onClick={() => showImage(false)}>
            <div className="film-details-tab" id={!isImage ? "selected" : ""}>
              Trailer
            </div>
          </button>
          <button onClick={() => showImage(true)}>
            <div className="film-details-tab" id={isImage ? "selected" : ""}>
              {t("galerija")}
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
            <div className="img-mfp-trailer">
              <img src="/partneri/partner2.jpg" alt="ison mfp" />
            </div>
          </div>
        ) : (
          <div className="film-trailer">
            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/1.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/2.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/3.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/4.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/5.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/6.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/7.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/8.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/mfp/9.jpg"
                  alt="ison mfp"
                  onClick={() => onClick()}
                />
              </div>
            </div>
          </div>
        )}
        <ModalComponent
          show={showModal}
          handleClose={handleClose}
          images={images}
        />
      </div>

      <Footer />
    </div>
  );
};

export default FilmDetails;
