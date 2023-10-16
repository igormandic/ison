import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Film from "./Film";
import Footer from "./Footer";

const Projects = ({ propsIsFilm }) => {
  const [isFilm, setFilm] = useState(true);
  useEffect(() => {
    if (propsIsFilm || propsIsFilm === false) {
      setFilm(propsIsFilm);
    } else {
      setFilm(true);
    }
  }, [propsIsFilm]);

  const showFilm = (tab) => {
    setFilm(tab);
  };

  return (
    <div className="projects" id="projects">
      <Header />
      <div className="projects-all-page">
        <div className="projects-title">Projekti</div>
        <div className="projects-menu">
          <button onClick={() => showFilm(true)}>
            <div className="projects-tab" id={isFilm ? "selected" : ""}>
              Film & TV
            </div>
          </button>
          <button onClick={() => showFilm(false)}>
            <div className="projects-tab" id={!isFilm ? "selected" : ""}>
              Brand video & Music video
            </div>
          </button>
        </div>
        {isFilm ? (
          <div className="film-productions" id="film-productions">
            <div className="row-film">
              <Film
                img={"/images/filmovi/actorslife.jpg"}
                title={"Actorslife (2023.)"}
                url="#"
              />
              <Film
                img={"/images/filmovi/proba.jpg"}
                title={"Proba (2023.)"}
                url="#"
              />
              <Film
                img={"/images/filmovi/svetac.jpg"}
                title={"Svetac (2023.)"}
                url="#"
              />
            </div>

            <div className="row-film">
              <Film
                img={"/images/filmovi/mfp.jpg"}
                title={"Moje omiljeno mesto u 36h (2022.)"}
                url="/mfp"
              />
              <Film
                img={"/images/filmovi/mrsWhite.jpg"}
                title={"Mrs White (2022.)"}
                url="#"
              />
              <Film
                img={"/images/filmovi/tracak.jpg"}
                title={"Tracak (2023.)"}
                url="#"
              />
            </div>
          </div>
        ) : (
          <div className="film-productions" id="film-productions">
            <div className="row-film">
              <Film
                img={"/images/reklame/vladaMaricicTrio.jpg"}
                title={"Vlada Maricic Trio"}
              />
              <Film
                img={"/images/reklame/whoops.jpg"}
                title={"Whoops (2023.)"}
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
