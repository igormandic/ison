import Header from "../components/Header";
import Footer from "./Footer";

const Whoops = () => {
  let innerWidth = window.innerWidth;

  return (
    <div className="film-details" id="film-details">
      <Header />
      <div className="film-details-all-page">
        <div className="film-details-img">
          <img
            src={
              innerWidth > 600
                ? "/images/whoops/glavna.jpg"
                : "/images/whoops/glavna_phone.jpg"
            }
            alt="whoops"
            id="tracak-details-image"
            className="details-img-tracak"
          />
        </div>

        <div className="film-trailer">
          <div
            className="film-details-title"
            style={{
              width: "100vw",
              fontSize: "2rem",
              textAlign: "center",
              marginLeft: "0%",
            }}
          >
            Whoops
          </div>
          <div className="film-details-video">
            <video className="film-video" controls autoPlay muted loop>
              <source src="/images/reklama.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Whoops;
