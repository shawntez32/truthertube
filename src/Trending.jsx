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
                <VideoRow />
                <VideoRow />
                <VideoRow />
        </div>
        </div>
        </>
    )
}

export default Trending;