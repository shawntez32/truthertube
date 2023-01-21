import React from "react";
import Sidebar from "./Sidebar";
import ReccomendedVideos from "./ReccomendedVideos";

function Homepage({trending, subscriptions}) {
    return(
        <>
        <div className='app___page'>
              <Sidebar 
              trending={trending} 
              subscriptions={subscriptions}
               />
              <ReccomendedVideos />        
            </div>
        </>
    )
}

export default Homepage;