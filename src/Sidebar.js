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
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SportsIcon from "@material-ui/icons/Sports";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

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
      <div title="Home" className="sidebar__Option sidebar__active">
        <HomeIcon />
        <SidebarOptions title="Home" />
      </div>

      <div title="Explore" className="sidebar__Option">
        <ExploreIcon />
        <SidebarOptions title="Explore" />
      </div>

      <div title="Subcription" className="sidebar__Option">
        <SubscriptionsIcon />
        <SidebarOptions title="Subscriptions" />
      </div>

      <div className="border"></div>

      <div title="Library" className="sidebar__Option">
        <LibraryAddIcon />
        <SidebarOptions title="Library" />
      </div>

      <div title="History" className="sidebar__Option">
        <HistoryIcon />
        <SidebarOptions title="History" />
      </div>

      <div title="Your Videos" className="sidebar__Option">
        <VideoLibraryIcon />
        <SidebarOptions title="Your Videos" />
      </div>

      <div title="Watch Later" className="sidebar__Option">
        <WatchLaterIcon />
        <SidebarOptions title="Watch Later" />
      </div>

      <div title="Your Clips" className="sidebar__Option">
        <AddPhotoAlternateIcon />
        <SidebarOptions title="Your Clips" />
      </div>

      <div title="Show More" className="sidebar__Option">
        <ExpandMoreIcon />
        <SidebarOptions title="Show More" />
      </div>

      <div className="border"></div>

      <h4>SUBSCRIPTIONS</h4>

      <div title="Edureka!" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_1} alt="" />
        <SidebarOptions title="Edureka!" />
      </div>

      <div title="EmKay" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_2} alt="" />
        <SidebarOptions title="EmKay" />
      </div>

      <div title="TheOddS1sOut" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_3} alt="" />
        <SidebarOptions title="TheOdds1sOut" />
      </div>

      <div title="Micheal Reeves" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_4} alt="" />
        <SidebarOptions title="Micheal Reeves" />
      </div>

      <div title="Skeppy" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_5} alt="" />
        <SidebarOptions title="Skeppy" />
      </div>

      <div title="Pewdiepie" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_6} alt="" />
        <SidebarOptions title="Pewdiepie" />
      </div>

      <div title="Pegasus" className="sidebar__Option">
        <img src={Sidebar_Subscription_img_7} alt="" />
        <SidebarOptions title="Pegasus" />
      </div>

      <div title="Show 89 More" className="sidebar__Option">
        <ExpandMoreIcon />
        <SidebarOptions title="Show 89 More" />
      </div>

      <div className="border"></div>

      <h4>MORE FROM YOUTUBE</h4>
      <div title="Gaming" className="sidebar__Option">
        <VideogameAssetIcon />
        <SidebarOptions title="Gaming" />
      </div>

      <div title="Live" className="sidebar__Option">
        <LiveTvIcon />
        <SidebarOptions title="Live" />
      </div>

      <div title="Sports" className="sidebar__Option">
        <SportsIcon />
        <SidebarOptions title="Sports" />
      </div>

      <div className="border"></div>

      <div title="Settings" className="sidebar__Option">
        <SettingsIcon />
        <SidebarOptions title="Settings" />
      </div>

      <div title="Report history" className="sidebar__Option">
        <FlagIcon />
        <SidebarOptions title="Report history" />
      </div>

      <div title="Help" className="sidebar__Option">
        <HelpIcon />
        <SidebarOptions title="Help" />
      </div>

      <div title="Send Feedback" className="sidebar__Option last">
        <FeedbackIcon />
        <SidebarOptions title="Send Feedback" />
      </div>
    </div>
  );
}

export default Sidebar;
