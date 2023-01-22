import React from "react";
import Sidebar from "./Sidebar";
import ReccomendedVideos from "./ReccomendedVideos";

function Homepage({trending, subscriptions,library,history,yvids,lvids,wlater,smore,video}) {
    return(
        <>
        <div className='app___page'>
              <Sidebar 
              trending={trending} 
              subscriptions={subscriptions}
              library={library}
              history={history}
              yvids={yvids}
              lvids={lvids}
              wlater={wlater}
              smore={smore}
               />
              <ReccomendedVideos video={video} />        
            </div>
        </>
    )
}

export default Homepage;