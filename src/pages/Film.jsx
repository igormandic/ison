const Film = ({ img, title, url }) => {
  return (
    <a href="/film-details">
      <div className="film-box">
        <div className="film-img">
          <img src={img} alt="ison background" />
        </div>
        <div className="film-title">{title}</div>
        <div className="film-button">
          <a href={url}>Više</a>
        </div>
      </div>
    </a>
  );
};

export default Film;
