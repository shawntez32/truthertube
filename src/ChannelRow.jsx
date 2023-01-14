import React from "react";
import { CheckCircleOutline } from "@material-ui/icons";
import "./ChannelRow.css";

function ChannelRow({image, channel, subs, numOfViews, description, verified}) {
    return (
        <>
        <div className="channelRow">
            <img className="channelRow___logo" src={image} alt="" />
            <div className="channelRow___text">
                <h4>{channel} {verified && <CheckCircleOutline />}</h4>
                <p>subscribers . {numOfViews} videos</p>
                <p>{description}</p>
            </div>
        </div>
        <hr />
        </>
    )
}

export default ChannelRow;