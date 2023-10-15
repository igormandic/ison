import Header from "../components/Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <Header />
      <div className="about-us-all-page">
        <div className="about-us-baner">
          Dobrodošli u svet gde kreativnost ne poznaje granice, a svaki kadar
          priča priču.
        </div>
        <div className="about-us-title">ISON FILM PRODUCTIONS</div>

        <div className="about-us-page">
          <div className="about-us-left">
            <img
              src="/images/grb.png"
              className="ison-about-us-left"
              alt="ison background"
            />
          </div>
          <div className="about-us-right">
            <div className="about-us-right-all-text">
              <div className="about-us-right-text">
                Dobrodošli u svet koji je ispunjen maštom, inovacijama i
                neiscrpnom strašću za stvaranje originalnih filmskih iskustava.
                Mi smo Ison Film produkcija, sa nama se snovi pretvaraju u
                stvarnost i svaka priča postaje nezaboravna.
              </div>

              <div className="about-us-right-text">
                Naša misija je da jedinstvenom perspektivom oživimo priče koje
                se ne smeju propustiti. Verujemo da film nije samo zabava, već i
                moćno sredstvo za inspiraciju, izazov i promenu. Zbog toga se
                trudimo da svaki naš projekat oplemenimo originalnim narativom,
                dubokom emocijom i nezaboravnim vizuelnim iskustvom koje se
                ostavlja bez daha.
              </div>

              <div className="about-us-right-text">
                Kreativnost je srce i duša naše produkcije. Naš tim talentovanih
                scenarista, reditelja, producenta i umetnika posvećen je
                stvaranju priče koje će ostaviti trajni utisak. Svaka slika,
                svaka reč i svaki kadar pažljivo su skrojeni kako bi vas proveli
                kroz razne svetove.
              </div>
              <div className="about-us-right-text">
                Snažno verujemo da se tehnološki napredak i umetnost mogu
                ujediniti kako bi se stvorila nezaboravna iskustva.
              </div>
              <div className="about-us-right-text">
                Nastojimo da istražujemo nove horizonte, postavimo standarde i
                oživimo priče koje će prelaziti granice vremena i prostora.
              </div>
              <div className="about-us-right-text" id="about-us-right-text">
                Radosno iščekijemo da i vi postanete deo naše priče. Pridružite
                nam se na putovanju gde se prožimaju stvarnost i mašta.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
