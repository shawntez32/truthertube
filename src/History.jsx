import React from "react";
import Sidebar from "./Sidebar";

function History({subscriptions,trending,library,history,yvids,lvids,wlater,smore}) {
    return(
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
            <div className="noResults">
                <h2>No Results</h2>
                <hr />
            </div>
        </div>
        </>
    )
}

export default History;