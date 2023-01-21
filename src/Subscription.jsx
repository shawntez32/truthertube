import { Whatshot, Subscriptions } from "@material-ui/icons";
import React from "react";
import Sidebar from "./Sidebar";
import VideoRow from "./VideoRow";
import "./Subscription.css";

function Subscription({trending, subscriptions}) {
    return (
        <>
        <div className="app___page">
            <Sidebar
            trending={trending} 
            subscriptions={subscriptions}  
             />
        <div className="subscription">
            <div className="subscription___header">
                <Subscriptions />
                <h2>Subscriptions</h2>
            </div>
                <VideoRow />
                <VideoRow />
                <VideoRow />
        </div>
        </div>
        </>
    )
}

export default Subscription;