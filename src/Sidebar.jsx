import React from "react";
import SidebarRow from "./SidebarRow";
import { ExpandMoreSharp, HistorySharp, Home,  OndemandVideoSharp, Subscriptions, ThumbUpAltSharp, VideoLibrarySharp, WatchLaterSharp} from "@material-ui/icons";
import { Whatshot } from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
    return(
        <>
        <div className="sidebar">
            <SidebarRow selected Icon={Home}  title="Home" />
            <SidebarRow Icon={Whatshot} title="Trending" />
            <SidebarRow Icon={Subscriptions}  title="Subscription" />
            <hr/>
            <SidebarRow Icon={VideoLibrarySharp}  title="Library" />
            <SidebarRow Icon={HistorySharp} title="History" />
            <SidebarRow Icon={OndemandVideoSharp}  title="Your Videos" />
            <SidebarRow Icon={WatchLaterSharp}  title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltSharp} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreSharp}  title="Show More" />
            <hr/>
        </div>
        </>
    )
}

export default Sidebar;