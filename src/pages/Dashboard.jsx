const Dasboard = () => {
  // const { t, i18n } = useTranslation();

  // const onChangeLanguage = () => {
  //   // Ovo je samo primer, treba da se prepravi
  //   // Treba da se napravi i neko pocetno ucitavanje gde ce vuci iz
  //   // local storage, cookia ili sesije koji je jezik trenutno
  //   i18n.changeLanguage(i18n.language === 'en' ? 'rs' : 'en');
  // };

  return (
    <div className="dashboard">
      <video className="dashboard-video" autoPlay muted loop>
        <source src="/images/stock.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="dashboard-footer">isonfilmproductions.rs © 2023</div>
    </div>
  );
};

export default Dasboard;
