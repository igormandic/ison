const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products-title">NAŠE USLUGE</div>
      <div className="products-images">
        <div className="product-image">
          <div className="img-div">
            <img src="/images/content.png" alt="content" />
          </div>
          <div className="product-title">Content Development</div>
          <div className="product-subtitle">
            Kreativni tim naše produkcije je u svom najboljem izdanju kada
            razvija ideju od samog početka, radilo se to o originalnim
            scenarijima, realnim pričama iz života ili narativima inspirisanim
            književnim delima.
          </div>
          <div className="product-button">
            <a href="/content-development">Više</a>
          </div>
        </div>

        <div className="product-image">
          <div className="img-div">
            <img src="/images/film.png" alt="content" />
          </div>
          <div className="product-title">Film & TV Productions</div>
          <div className="product-subtitle">
            Primarna delatnost Ison film produkcije je realizacija filmskih i TV
            projekata. Naša strast leži u stvaranju narativa koji uvlači publiku
            u drugi svet i ostavlja moćan i dugotrajan utisak. Svakim projektom
            stremimo da nadmašimo očekivanja i pružimo publici priču koja će
            izdržati test vremena.
          </div>
          <div className="product-button">
            <a href="/projects">Više</a>
          </div>
        </div>

        <div className="product-image">
          <div className="img-div">
            <img src="/images/brand.png" alt="content" />
          </div>
          <div className="product-title">Brand video / Music video</div>
          <div className="product-subtitle">
            Mi razumemo moć vizuelne naracije. Bilo da je to produkt video,
            muzički spot ili reklama, mi pretvaramo ideje u nadahnjujuće
            prizore. Naša ekspertiza je kreiranje vizuelnog narativa koji, ne
            samo što prenosi poruku, već izaziva emocije koje ostavljaju trajni
            utisak na gledaoca.
          </div>
          <div className="product-button">
            <a href="/brand-video-music">Više</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
