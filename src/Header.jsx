import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle, AppsOutlined, NotificationsSharp, Search, VideoCallSharp, YouTube } from "@material-ui/icons";
import { YoutubeSearchedForOutlined } from "@material-ui/icons";

function Header() {
    return(
    <>
    <div className="header">
        <div className="header___start">
            <MenuIcon />
            <h2>TruthTube</h2>
        </div>
        <div className="header___input">
            <input className="header___search" placeholder="Search" type="text" />
            <Search className="header___searchButton" />
        </div>
        <div className="header___icons">
            <VideoCallSharp className="header___icon" />
            <AppsOutlined className="header___icon" />
            <NotificationsSharp className="header___icon" />
            <AccountCircle className="header___icon" />
        </div>
    </div>
    </>
    )
}

export default Header;