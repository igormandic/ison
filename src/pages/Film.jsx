import { useTranslation } from "react-i18next";

const Film = ({ img, title, url }) => {
  const { t } = useTranslation();

  return (
    <a href={url}>
      <div className="film-box">
        <div className="film-img">
          <img src={img} alt="ison background" />
        </div>
        <div className="film-title">{title}</div>
        <div className="film-button">
          <a href={url}>{t("vise")}</a>
        </div>
      </div>
    </a>
  );
};

export default Film;
