import { AccountCircle, AccountCircleOutlined, AccountCircleSharp } from "@material-ui/icons";
import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

function VideoCard({image,title,channel,views,timestamp,channelImg,video}) {
    return (
        <>
        <div className="videoCard">
        <Link to={video}><img className="videoCard___thumbnail" src={image} alt="" /></Link>
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