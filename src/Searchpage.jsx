import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import Sidebar from "./Sidebar";
import "./Searchpage.css";
import ChannelRow from "./ChannelRow";

function Searchpage() {
    return(
        <>
        <div className="app___page">
            <Sidebar />
        <div className="searchpage">
            <div className="searchpage___filter">
                <TuneOutlined />
                <h2>Filter</h2>
            </div>

            <ChannelRow
            image="https://tse3.mm.bing.net/th?id=OIP.W47SKptrvaToph3irnXzVgHaFj&pid=Api&P=0"
            channel="Idlehands4637"
            subs="22,158"
            numOfViews="8,007"
            description="America will never be the same again after all of the turmoil currently going on"
            verified
            />
        </div>
        </div>
        </>
    )
}

export default Searchpage;