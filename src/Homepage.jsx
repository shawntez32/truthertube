import React from "react";
import Sidebar from "./Sidebar";
import ReccomendedVideos from "./ReccomendedVideos";

function Homepage() {
    return(
        <>
        <div className='app___page'>
              <Sidebar />
              <ReccomendedVideos />        
            </div>
        </>
    )
}

export default Homepage;