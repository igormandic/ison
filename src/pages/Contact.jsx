import Header from "../components/Header";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Header isBlack={false} view={"contact"} />
      <div className="contact-contains">
        <div className="contact-left">
          <div className="contact-title">Ovlašćeni prodavci</div>
          <div className="contact-subtitle">
            Pronađite najbližu prodavnicu ison proizvoda
          </div>
          <div className="contact-mapa">
            <div className="contact-mapa-img">
              <img
                src="/images/ison_mapa.png"
                className="ison-mapa"
                alt="ison mapa"
              />
            </div>
            <div className="contact-mapa-text">
              <div className="contact-mapa-text-title">Tobacco Shop Riyo</div>
              <div className="contact-mapa-text-subtitle">
                Jurija Gagarina 227
              </div>
              <div className="contact-mapa-text-subtitle">BEOGRAD</div>
            </div>
          </div>

          {/* <div className="contact-mapa">
            <div className="contact-mapa-img">
              <img
                src="/images/ison_mapa.png"
                className="ison-mapa"
                alt="ison mapa"
              />
            </div>
            <div className="contact-mapa-text">
              <div className="contact-mapa-text-title">Intermezzo System</div>
              <div className="contact-mapa-text-subtitle">Svetog Save 2</div>
              <div className="contact-mapa-text-subtitle">BEOGRAD</div>
            </div>
          </div> */}

          {/* <div className="contact-mapa">
            <div className="contact-mapa-img">
              <img
                src="/images/ison_mapa.png"
                className="ison-mapa"
                alt="ison mapa"
              />
            </div>
            <div className="contact-mapa-text">
              <div className="contact-mapa-text-title">Intermezzo System</div>
              <div className="contact-mapa-text-subtitle">Nemanjina 34-36</div>
              <div className="contact-mapa-text-subtitle">BEOGRAD</div>
            </div>
          </div> */}
        </div>

        <div className="contact-right">
          <iframe
            className="maps"
            src="https://www.google.com/maps/d/embed?mid=1ng_rl4gWTgiQtUHoRQKd6k8s8hOSEkA&hl=sr&ehbc=2E312F"
            width="100%"
            height="100%"
            title="ison Svensson"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
