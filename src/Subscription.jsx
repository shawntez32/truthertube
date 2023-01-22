import { Whatshot, Subscriptions } from "@material-ui/icons";
import React from "react";
import Sidebar from "./Sidebar";
import VideoRow from "./VideoRow";
import "./Subscription.css";

function Subscription({trending, subscriptions,library,history,yvids,lvids,wlater,smore}) {
    return (
        <>
        <div className="app___page">
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
        <div className="subscription">
            <div className="subscription___header">
                <Subscriptions />
                <h2>Subscriptions</h2>
            </div>
            <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.QdUYczu6fvdOQ94jXf8hEQHaEK&pid=Api&P=0"}
                 title={"Nothing but politics"}
                 channel={"Mr.Krank"}
                 views={"657"}
                 timestamp={"3 weeks ago"}
                 />
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.GQqEKlPCowzJXcVqVzpcrQHaEK&pid=Api&P=0"}
                 title={"2 sides of the same coin."}
                 channel={"Veloc"}
                 views={"2k"}
                 timestamp={"3 months ago"}
                 />
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.KQEdqZRwQyIpSY16dr9uoQHaE8&pid=Api&P=0"}
                 title={"Showtime?!"}
                 channel={"Mr.Krank"}
                 views={"13k"}
                 timestamp={"2 weeks ago"}
                 />
        </div>
        </div>
        </>
    )
}

export default Subscription;