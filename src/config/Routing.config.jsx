import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import VideoMusicMedia from "../pages/VideoMusicMedia";

export const ERoutes = {
  MainPage: "/",
  AboutUs: "/about-us",
  Contact: "/contact",
  Projects: "/projects",
  VideoMusicMedia: "/brand-video-music",
  Anything: "*",
};

export const router = createBrowserRouter([
  { path: ERoutes.MainPage, element: <MainPage /> },
  { path: ERoutes.AboutUs, element: <AboutUs /> },
  { path: ERoutes.Contact, element: <Contact /> },
  { path: ERoutes.Projects, element: <Projects /> },
  { path: ERoutes.VideoMusicMedia, element: <VideoMusicMedia /> },
  { path: ERoutes.Anything, element: <MainPage /> },
]);
