import React from 'react'
import './SidebarButtons.css'
import { Link } from 'react-router-dom'

export default function SidebarButton(props) {
  return (
    <div className='sidebar-btn'>
        <Link to={props.to}>
            {props.icon}
            <p>{props.title}</p>
        </Link>
    </div>
  )
}
