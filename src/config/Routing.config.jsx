import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import FilmDetails from "../pages/FilmDetails";
import Tracak from "../pages/Tracak";

export const ERoutes = {
  MainPage: "/",
  AboutUs: "/about-us",
  Contact: "/contact",
  Projects: "/projects",
  BrandVideoMusic: "/brand-video-music",
  MFP: "/mfp",
  Tracak: "/tracak",
  Anything: "*",
};

export const router = createBrowserRouter([
  { path: ERoutes.MainPage, element: <MainPage /> },
  { path: ERoutes.AboutUs, element: <AboutUs /> },
  { path: ERoutes.Contact, element: <Contact /> },
  { path: ERoutes.Projects, element: <Projects propsIsFilm={true} /> },
  { path: ERoutes.BrandVideoMusic, element: <Projects propsIsFilm={false} /> },
  { path: ERoutes.MFP, element: <FilmDetails /> },
  { path: ERoutes.Tracak, element: <Tracak /> },
  { path: ERoutes.Anything, element: <MainPage /> },
]);
