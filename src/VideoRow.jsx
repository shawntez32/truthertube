import React from "react";
import "./VideoRow.css";

function VideoRow({views, subs, description, timestamp,channel,title,image}) {
    return(
        <>
            <div className="videoRow">
                <img src={image} alt="" />
                <div className="videoRow___text">
                    <h3>{title}</h3>
                    <p className="videoRow___headline">{channel} . <span className="videoRow___subsNumber">{subs} Subscribers</span>  {views}  Views . {timestamp} </p>
                    <p className="videoRow___description">{description}</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default VideoRow;