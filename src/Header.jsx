import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './slices/userSlice';
import { auth } from './firebase';




export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
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
          <HeaderOption 
              name= {user.displayName}
              title="Me"
              onClick={logoutOfApp} />         
        </div>
    </div>
  )
}

