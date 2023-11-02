import { useState } from "react";

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
const videos = [
  "/images/stock.m4v",
  "/images/stock2.m4v",
  "/images/stock3.m4v",
  "/images/stock4.m4v",
  "/images/stock5.m4v",
];
const Dasboard = () => {
  const [video, _setVideo] = useState(getRandom(videos));

  return (
    <div className="dashboard">
      <video className="dashboard-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="dashboard-footer">isonfilmproductions.rs © 2023</div>
    </div>
  );
};

export default Dasboard;
