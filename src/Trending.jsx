import { Whatshot } from "@material-ui/icons";
import React from "react";
import Sidebar from "./Sidebar";
import VideoRow from "./VideoRow";
import "./Trending.css";

function Trending({trending, subscriptions}) {
    return (
        <>
        <div className="app___page">
            <Sidebar
            trending={trending} 
            subscriptions={subscriptions} 
            />
        <div className="trending">
            <div className="trending___header">
                <Whatshot />
                <h2>Trending</h2>
            </div>
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.QdUYczu6fvdOQ94jXf8hEQHaEK&pid=Api&P=0"}
                 title={"Nothing but politics"}
                 channel={"Mr.Krank"}
                 views={"657"}
                 timestamp={"3 weeks ago"}
                 />
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.GQqEKlPCowzJXcVqVzpcrQHaEK&pid=Api&P=0"}
                 title={"2 sides of the same coin."}
                 channel={"Veloc"}
                 views={"2k"}
                 timestamp={"3 months ago"}
                 />
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.KQEdqZRwQyIpSY16dr9uoQHaE8&pid=Api&P=0"}
                 title={"Showtime?!"}
                 channel={"Mr.Krank"}
                 views={"13k"}
                 timestamp={"2 weeks ago"}
                 />
        </div>
        </div>
        </>
    )
}

export default Trending;