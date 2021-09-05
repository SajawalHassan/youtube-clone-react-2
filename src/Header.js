import React from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import YoutubeLogo from "./Images/Youtube-Logo.PNG";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__leftIconMenu" />
        <div className="header__leftLogo">
          <img src={YoutubeLogo} alt="" />
        </div>
      </div>

      <div className="header__middle">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <MicIcon />
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar className="header__rightAvatar" />
      </div>
    </div>
  );
}

export default Header;
