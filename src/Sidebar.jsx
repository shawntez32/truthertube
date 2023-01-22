import React from "react";
import SidebarRow from "./SidebarRow";
import { ExpandMoreSharp, HistorySharp, Home,  OndemandVideoSharp, Subscriptions, ThumbUpAltSharp, VideoLibrarySharp, WatchLaterSharp} from "@material-ui/icons";
import { Whatshot } from "@material-ui/icons";
import { Link, Routes, Route, HashRouter as Router } from "react-router-dom";
import "./Sidebar.css";
import Trending from "./Trending";

function Sidebar({trending,subscriptions,library,history,yvids,lvids,wlater,smore}) {
    return(
        <>
        <div className="sidebar">
            <SidebarRow selected Icon={Home}  title="Home" />
            <SidebarRow link={trending} Icon={Whatshot} title="Trending" />
            <SidebarRow link={subscriptions} Icon={Subscriptions}  title="Subscription" />
            <hr/>
            <SidebarRow link={library} Icon={VideoLibrarySharp}  title="Library" />
            <SidebarRow link={history} Icon={HistorySharp} title="History" />
            <SidebarRow link={yvids} Icon={OndemandVideoSharp}  title="Your Videos" />
            <SidebarRow link={wlater} Icon={WatchLaterSharp}  title="Watch Later" />
            <SidebarRow link={lvids} Icon={ThumbUpAltSharp} title="Liked Videos" />
            <SidebarRow link={smore} Icon={ExpandMoreSharp}  title="Show More" />
            <hr />
        </div>
        <hr />
        </>
    )
}

export default Sidebar;