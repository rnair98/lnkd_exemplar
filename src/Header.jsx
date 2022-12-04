import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
export default function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" 
                alt="Facebook Logo" />
        </div>

        <div className="header__search">
            <SearchIcon />
            <input
                type="text"
                placeholder="Search"/>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" /> 
          <HeaderOption avatar="https://preview.redd.it/hn0wzs8xpyn81.jpg?width=640&crop=smart&auto=webp&s=c9d903bf4a5a397b2008a322f61b38878e556317" title="User" />         
        </div>
    </div>
  )
}

