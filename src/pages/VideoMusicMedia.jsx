import Header from "../components/Header";
import Film from "./Film";
import Footer from "./Footer";

const VideoMusicMedia = () => {
  return (
    <div className="projects" id="projects">
      <Header />
      <div className="projects-all-page">
        <div className="projects-title">Projekti</div>
        <div className="projects-menu">
          <a href="/projects">
            <div className="projects-tab">Film & TV</div>
          </a>
          <a href="/video-music-media">
            <div className="projects-tab" id="selected">
              Brand video / Music video
            </div>
          </a>
        </div>
        <div className="film-productions" id="film-productions">
          <div className="row-film">
            <Film
              img={"/images/reklame/vladaMaricicTrio.jpg"}
              title={"Vlada Maricic Trio"}
            />
            <Film img={"/images/reklame/whoops.jpg"} title={"Whoops (2023.)"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoMusicMedia;
