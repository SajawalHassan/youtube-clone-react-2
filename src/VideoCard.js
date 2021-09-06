import React from "react";
import "./VideoCard.css";

function VideoCard({ img, title, channelTitle, channelImg, views, date }) {
  return (
    <div className="videoCard">
      <div className="videoCard__top">
        <img src={img} alt="" />
      </div>

      <div className="videoCard__middle">
        <img src={channelImg} alt="" />
        <p>{title}</p>
      </div>

      <div className="videoCard__bottom">
        <span>{channelTitle}</span>
        <div className="videoCard__bottomVD">
          <p>{views}</p>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
