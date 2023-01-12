import React from "react";
import "./SidebarRow.css";

function SidebarRow({selected, Icon, title}) {
    return(
        <>
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow___icon" />
            <h2 className="sidebarRow___title">{title}</h2>
        </div>

        </>
    )
}

export default SidebarRow;