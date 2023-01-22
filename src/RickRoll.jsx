import React from "react";
import {DefaultPlayer as Video} from "react-html5video";
import "./Video.css";

function RickRoll() {
    
    return (
        

        <>
        <div className="app___page">
        <div className="video___frame">
        <iframe src="https://archive.org/embed/Rick_Astley_Never_Gonna_Give_You_Up&autoplay=1" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
        </div>
        </div>
        </>
    )
}

export default RickRoll;