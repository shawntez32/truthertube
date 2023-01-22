import React from "react";

function RickRoll() {
    function play() {
       var vid = document.getElementById("myVid");
       vid.play();
    }
    return (
        

        <>
        <div className="app___page">
        <video onClick={play} id="myVid" width="400" height="200">
        <source src="//player.vimeo.com/video/658604398?portrait=0&autoplay=1" type="video/mp4"/>
        Sorry, your browser does not support HTML5 video.
        </video>
            
        </div>
        </>
    )
}

export default RickRoll;