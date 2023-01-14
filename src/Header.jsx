import React from "react";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle, AppsOutlined, NotificationsSharp, Search, VideoCallSharp, YouTube } from "@material-ui/icons";
import { YoutubeSearchedForOutlined } from "@material-ui/icons";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return(
    <>
    <div className="header">
        <div className="header___start">
            <MenuIcon />
            <Link to={"/"}>
            <h2>TruthTube</h2>
            </Link>
            
        </div>
        <div className="header___input">
            <input 
            onChange={e => setInputSearch(e.target.value)} 
            className="header___search" 
            placeholder="Search" 
            type="text"
            value={inputSearch} 
            />
            <Link to={`/Search/${inputSearch}`}>
            <Search className="header___searchButton" />
            </Link>
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