import { AccountCircle, AccountCircleOutlined, AccountCircleSharp } from "@material-ui/icons";
import React from "react";
import "./VideoCard.css";

function VideoCard({image,title,channel,views,timestamp,channelImg}) {
    return (
        <>
        <div className="videoCard">
            <img className="videoCard___thumbnail" src={image} alt="" />
            <div className="videoCard___info">
                <img className="videoCard___avatar" src={channelImg} />
                <div className="videoCard___text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoCard;