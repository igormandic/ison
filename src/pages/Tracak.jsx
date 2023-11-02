import { useState } from "react";
import Header from "../components/Header";
import ModalComponent from "../components/Modal";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

let images = [
  "/images/filmovi/tracak/1.jpg",
  "/images/filmovi/tracak/2.jpg",
  "/images/filmovi/tracak/3.jpg",
  "/images/filmovi/tracak/4.jpg",
  "/images/filmovi/tracak/5.jpg",
  "/images/filmovi/tracak/6.jpg",
  "/images/filmovi/tracak/7.jpg",
  "/images/filmovi/tracak/8.jpg",
  "/images/filmovi/tracak/9.jpg",
  "/images/filmovi/tracak/10.jpg",
  "/images/filmovi/tracak/11.jpg",
  "/images/filmovi/tracak/12.jpg",
  "/images/filmovi/tracak/13.jpg",
  "/images/filmovi/tracak/14.jpg",
  "/images/filmovi/tracak/15.jpg",
];

const Tracak = () => {
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
                ? "/images/filmovi/tracak/glavna.jpg"
                : "/images/filmovi/tracak/glavna_phone.jpg"
            }
            alt="tracak"
            id="tracak-details-image"
            className="details-img-tracak"
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
              <iframe
                className="film-video"
                id="tracak-video"
                src="https://www.youtube.com/embed/YzQzyViu1dA?si=tv93z1uMwr0JURQR??autoplay=1&mute=1&controls=1&fs=1"
                title="Tračak"
                frameborder="0"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="film-trailer">
            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/1.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/2.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/3.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/4.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/5.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/6.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/7.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/8.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/9.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/10.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/11.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/12.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
            </div>

            <div className="row-img">
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/13.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/14.jpg"
                  alt="ison tracak"
                  onClick={() => onClick()}
                />
              </div>
              <div className="film-img">
                <img
                  src="/images/filmovi/tracak/15.jpg"
                  alt="ison tracak"
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

export default Tracak;
