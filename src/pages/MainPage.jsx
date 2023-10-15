import Header from "../components/Header";
import AboutUsHomepage from "./AboutUsHomepage";
import Dasboard from "./Dashboard";
import Footer from "./Footer";
import Products from "./Products";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Dasboard />
      <AboutUsHomepage />
      <Products />
      <Footer />
    </div>
  );
};

export default MainPage;
