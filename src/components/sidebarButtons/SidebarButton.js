import React from "react";
import "./SidebarButtons.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

export default function SidebarButton(props) {
  const location = useLocation()

  let isActive=location.pathname===props.to

  let btnClass= isActive ? "sidebar-btn active" : "sidebar-btn"
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{size:"25px", className:"btn-icons"}}>
          {props.icon}
          <p >{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
