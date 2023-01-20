import React from "react";
import Sidebar from "./Sidebar";
import ReccomendedVideos from "./ReccomendedVideos";

function Homepage({link}) {
    return(
        <>
        <div className='app___page'>
              <Sidebar link={link} />
              <ReccomendedVideos />        
            </div>
        </>
    )
}

export default Homepage;