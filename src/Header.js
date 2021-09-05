import React from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import YoutubeLogo from "./Images/Youtube-Logo.PNG";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Avatar, Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__topLeft">
          <div className="header__topleftIconMenu">
            <MenuIcon />
          </div>
          <div className="header__topLeftLogo">
            <img src={YoutubeLogo} alt="" />
          </div>
        </div>

        <div className="header__topMiddle">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>

        <div className="header__topRight">
          <MicIcon />
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar className="header__topRightAvatar" />
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__bottomTags">
          <div className="header__bottomTag active">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>

          <div className="header__bottomTag">
            <p>All</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
