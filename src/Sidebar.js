import React from "react";
import "./Sidebar.css";

import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Sidebar_Subscription_img_1 from "./Images/Sidebar_Subscription_img_1.jpg";
import Sidebar_Subscription_img_2 from "./Images/Sidebar_Subscription_img_2.jpg";
import Sidebar_Subscription_img_3 from "./Images/Sidebar_Subscription_img_3.jpg";
import Sidebar_Subscription_img_4 from "./Images/Sidebar_Subscription_img_4.jpg";
import Sidebar_Subscription_img_5 from "./Images/Sidebar_Subscription_img_5.jpg";
import Sidebar_Subscription_img_6 from "./Images/Sidebar_Subscription_img_6.jpg";
import Sidebar_Subscription_img_7 from "./Images/Sidebar_Subscription_img_7.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__Option sidebar__active">
          <HomeIcon />
          <SidebarOptions title="Home" />
        </div>

        <div className="sidebar__Option">
          <ExploreIcon />
          <SidebarOptions title="Explore" />
        </div>

        <div className="sidebar__Option">
          <SubscriptionsIcon />
          <SidebarOptions title="Subscriptions" />
        </div>
      </div>

      <div className="border"></div>

      <div className="sidebar__middle">
        <div className="sidebar__Option">
          <LibraryAddIcon />
          <SidebarOptions title="Library" />
        </div>

        <div className="sidebar__Option">
          <HistoryIcon />
          <SidebarOptions title="History" />
        </div>

        <div className="sidebar__Option">
          <VideoLibraryIcon />
          <SidebarOptions title="Your Videos" />
        </div>

        <div className="sidebar__Option">
          <WatchLaterIcon />
          <SidebarOptions title="Watch Later" />
        </div>

        <div className="sidebar__Option">
          <AddPhotoAlternateIcon />
          <SidebarOptions title="Your Clips" />
        </div>

        <div className="sidebar__Option">
          <ExpandMoreIcon />
          <SidebarOptions title="Show More" />
        </div>
      </div>

      <div className="border"></div>

      <div className="sidebar__bottom">
        <h4>Subsciption</h4>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_1} alt="" />
          <SidebarOptions title="Edureka!" />
        </div>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_2} alt="" />
          <SidebarOptions title="EmKay" />
        </div>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_3} alt="" />
          <SidebarOptions title="TheOdds1sOut" />
        </div>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_4} alt="" />
          <SidebarOptions title="Micheal Reeves" />
        </div>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_5} alt="" />
          <SidebarOptions title="Skeppy" />
        </div>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_6} alt="" />
          <SidebarOptions title="Pewdiepie" />
        </div>

        <div className="sidebar__Option">
          <img src={Sidebar_Subscription_img_7} alt="" />
          <SidebarOptions title="Pegasus" />
        </div>

        <div className="sidebar__Option">
          <ExpandMoreIcon />
          <SidebarOptions title="Show 89 More" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
