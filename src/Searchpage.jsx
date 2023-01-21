import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import Sidebar from "./Sidebar";
import "./Searchpage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function Searchpage({trending, subscriptions}) {
    return(
        <>
        <div className="app___page">
            <Sidebar
            trending={trending}
            subscriptions={subscriptions}
             />
        <div className="searchpage">
            <div className="searchpage___filter">
                <TuneOutlined />
                <h2>Filter</h2>
            </div>

            <ChannelRow
            image="https://tse3.mm.bing.net/th?id=OIP.W47SKptrvaToph3irnXzVgHaFj&pid=Api&P=0"
            channel="Idlehands4637"
            subs="22,158"
            numOfViews="8,007"
            description="America will never be the same again after all of the turmoil currently going on"
            verified
            />
            <VideoRow 
            views="453"
            subs="5.2k"
            description="The war on drugs never stops"
            timestamp="2 hours ago"
            channel="R.A.Wwar"
            title="The Never Ending War"
            image="https://tse3.mm.bing.net/th?id=OIP.9ges0k1GjhMTfJaCP91_ZAHaEL&pid=Api&P=0"
            />
            <VideoRow 
            views="22k"
            subs="18.6k"
            description="The war on drugs never stops"
            timestamp="6 days ago"
            channel="R.A.Wwar"
            title="The truth about Corruption"
            image="https://tse2.mm.bing.net/th?id=OIP.miuDDriXU3hFQL0at4Z-pAHaEA&pid=Api&P=0"
            />
            <VideoRow 
            views="12k"
            subs="3.3k"
            description="The war on drugs never stops"
            timestamp="2 weeks ago"
            channel="Mr.Y?"
            title="End Game"
            image="https://tse1.mm.bing.net/th?id=OIP.a7-yE-6MsCEgpfvradJ9-AHaEK&pid=Api&P=0"
            />
            <VideoRow 
            views="13"
            subs="517"
            description="The war on drugs never stops"
            timestamp="1 day ago"
            channel="Pointaa"
            title="Who they really work for"
            image="https://tse1.mm.bing.net/th?id=OIP.wo-pz0COyfQ6Qe1D2S3xwAAAAA&pid=Api&P=0"
            />
            <VideoRow 
            views="65k"
            subs="105k"
            description="The war on drugs never stops"
            timestamp="3 weeks ago"
            channel="DeeperKnowledge"
            title="Seeds of the Spirit"
            image="https://tse2.mm.bing.net/th?id=OIP.lR4p6RZ58vAzXQiFsg0ALwHaFj&pid=Api&P=0"
            />
            <VideoRow 
            views="453"
            subs="5.2k"
            description="The war on drugs never stops"
            timestamp="2 hours ago"
            channel="BlXX0W"
            title="Epstein Island Secrets"
            image="https://tse4.mm.bing.net/th?id=OIP.0Hj-XIHybh7gmhcfphltwAHaE8&pid=Api&P=0"
            />
            <VideoRow 
            views="453"
            subs="5.2k"
            description="The war on drugs never stops"
            timestamp="3 days ago"
            channel="R.A.Wwar"
            title="Scapegoat?"
            image="https://tse1.mm.bing.net/th?id=OIP.5SjHxZT3bVg-SlOjSwBYaQHaE8&pid=Api&P=0"
            />
            <VideoRow 
            views="453"
            subs="5.2k"
            description="The true sickness we have in this world."
            timestamp="4 weeks ago"
            channel="RythimBlue"
            title="The true sickness"
            image="https://tse4.mm.bing.net/th?id=OIP.hED1sVOc1aClsdyIEFWC2wHaE8&pid=Api&P=0"
            />
        </div>
        </div>
        </>
    )
}

export default Searchpage;