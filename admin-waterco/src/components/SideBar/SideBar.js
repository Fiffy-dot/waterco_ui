import React from "react";

import "./SideBar.scss";

const SideBar = (props) => {
    return (
        <div className="side-bar">
            {props.children}
        </div>
    )
}

export default SideBar;
