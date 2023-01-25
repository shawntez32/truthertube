import React from "react";
import {DefaultPlayer as Video} from "react-html5video";
import Comments from "./Comments";
import Sidebar from "./Sidebar";
import "./Video.css";

function RickRoll({subscriptions,trending,library,history,yvids,lvids,wlater,smore}) {
    
    return (
        

        <>
        <div className="app___page">
        <Sidebar
            subscriptions={subscriptions}
            trending={trending}
            library={library}
            history={history}
            yvids={yvids}
            lvids={lvids}
            wlater={wlater}
            smore={smore}
            />
        <div className="video___frame">
        <iframe className="iframe" src="https://archive.org/embed/Rick_Astley_Never_Gonna_Give_You_Up&autoplay=1" width="640" height="480" frameborder="0" allow="autoplay" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
        
        </div>
        </div>
        <hr />
        <Comments />
        </>
    )
}

export default RickRoll;