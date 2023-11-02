import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Film from "./Film";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Projects = ({ propsIsFilm }) => {
  const { t } = useTranslation();

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
        <div className="projects-title">{t("projects")}</div>
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
                img={"/images/filmovi/mfp.jpg"}
                title={"M.F.P."}
                url="/mfp"
              />
              <Film
                img={"/images/filmovi/tracak.jpg"}
                title={"Tračak"}
                url="/tracak"
              />

              <Film
                img={"/images/filmovi/svetac.jpg"}
                title={"Svetac"}
                url="#"
              />
            </div>

            <div className="row-film">
              <Film
                img={"/images/filmovi/mrsWhite.jpg"}
                title={"Mrs White"}
                url="#"
              />
              <Film
                img={"/images/filmovi/actorslife.jpg"}
                title={"Actorslife"}
                url="#"
              />
              <Film img={"/images/filmovi/proba.jpg"} title={"Proba"} url="#" />
            </div>
          </div>
        ) : (
          <div className="film-productions" id="film-productions">
            <div className="row-film">
              <Film
                img={"/images/reklame/whoops.jpg"}
                title={"Whoops"}
                url="/whoops"
              />
              <Film
                img={"/images/reklame/vladaMaricicTrio.jpg"}
                title={"Vlada Maričić Trio"}
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
