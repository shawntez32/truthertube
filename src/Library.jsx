import React from "react";
import Sidebar from "./Sidebar";

function Library({subscriptions,trending}) {
    return(
        <>
        <div className="app___page">
            <Sidebar
            subscriptions={subscriptions}
            trending={trending}
            />
            <div className="noResults">
                <h2>No Results</h2>
                <hr />
            </div>
        </div>
        </>
    )
}

export default Library;