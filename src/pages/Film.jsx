const Film = ({ img, title }) => {
  return (
    <a href="/film-details">
      <div className="film-box">
        <div className="film-img">
          <img src={img} alt="ison background" />
        </div>
        <div className="film-title">{title}</div>
        <div className="film-button">
          <a href="/film-details">Više</a>
        </div>
      </div>
    </a>
  );
};

export default Film;
