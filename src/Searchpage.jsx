import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import Sidebar from "./Sidebar";
import "./Searchpage.css";

function Searchpage() {
    return(
        <>
        <div className="app___page">
            <Sidebar />
        <div className="searchpage">
            <div className="searchpage___filter">
                <TuneOutlined />
                <h2>Filter</h2>
            </div>
        </div>
        </div>
        </>
    )
}

export default Searchpage;