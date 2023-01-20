import { Whatshot } from "@material-ui/icons";
import React from "react";
import VideoRow from "./VideoRow";

function Trending() {
    return (
        <>
        <div className="trending">
            <div className="trending___header">
                <Whatshot />
                <h2>Trending</h2>
                <VideoRow />
                <VideoRow />
                <VideoRow />
            </div>
        </div>
        </>
    )
}

export default Trending;