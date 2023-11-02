import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="products" id="products">
      <div className="products-title">{t("uslugeNaslov")}</div>
      <div className="products-images">
        <div className="product-image">
          <div className="product-centar">
            <div className="img-div">
              <img src="/content.png" alt="content" />
            </div>
            <div className="product-title">Content Development</div>
          </div>
          <div className="product-subtitle">{t("usluga1")}</div>
          <div className="product-button">
            <a href="/content-development">{t("vise")}</a>
          </div>
        </div>

        <div className="product-image">
          <div className="product-centar">
            <div className="img-div">
              <img src="/film.png" alt="content" />
            </div>
            <div className="product-title">Film & TV Productions</div>
          </div>
          <div className="product-subtitle">{t("usluga2")}</div>
          <div className="product-button">
            <a href="/projects">{t("vise")}</a>
          </div>
        </div>

        <div className="product-image">
          <div className="product-centar">
            <div className="img-div">
              <img src="/brand.png" alt="content" />
            </div>
            <div className="product-title">Brand video / Music video</div>
          </div>
          <div className="product-subtitle">{t("usluga3")}</div>
          <div className="product-button">
            <a href="/brand-video-music">{t("vise")}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
