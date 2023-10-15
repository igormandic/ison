import Header from "../components/Header";
import Film from "./Film";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Header />
      <div className="projects-all-page">
        <div className="projects-title">Projekti</div>
        <div className="projects-menu">
          <a href="/projects">
            <div className="projects-tab" id="selected">
              Film & TV
            </div>
          </a>
          <a href="/brand-video-music">
            <div className="projects-tab">Brand video & Music video</div>
          </a>
        </div>
        <div className="film-productions" id="film-productions">
          <div className="row-film">
            <Film
              img={"/images/filmovi/mfp.jpg"}
              title={"Moje omiljeno mesto u 36h (2022.)"}
            />
            <Film
              img={"/images/filmovi/mrsWhite.jpg"}
              title={"Mrs White (2022.)"}
            />
            <Film img={"/images/filmovi/tracak.jpg"} title={"Tracak (2023.)"} />
          </div>

          <div className="row-film">
            <Film
              img={"/images/filmovi/actorslife.jpg"}
              title={"Actorslife (2023.)"}
            />
            <Film img={"/images/filmovi/proba.jpg"} title={"Proba (2023.)"} />
            <Film img={"/images/filmovi/svetac.jpg"} title={"Svetac (2023.)"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
