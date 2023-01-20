import React from "react";
import "./SidebarRow.css";
import { Link, Router } from "react-router-dom";

function SidebarRow({selected, Icon, title,link}) {
    return(
        <>
        <Link to={link}><div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow___icon" />
            <h2 className="sidebarRow___title">{title}</h2>
        </div></Link>

        </>
    )
}

export default SidebarRow;