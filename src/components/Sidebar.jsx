import React from 'react'
import './Sidebar.css'
import SidebarButton from './sidebarButtons/SidebarButton'
import { MdOutlineFeed,MdFavorite,MdLogout } from "react-icons/md";
import { FaPlay,FaGripfire } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div>
      <div className='sidebar-outer'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFBbM7geZtGULC2JdEq2uZCVszQsK3gzN5w&usqp=CAU"
         alt="profile-img"
        className='image-profile' />
        <div className='sidebar-buttons'>
          <SidebarButton title="Feed" to="/feed" icon={<MdOutlineFeed/>}/>
          <SidebarButton title="Favourite" to="/favourite" icon={<MdFavorite/>}/>
          <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
          <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrarySharp/>}/>
        </div>
        <SidebarButton title="Logout" to="/logout" icon={<MdLogout/>}/>
      </div>
    </div>
  )
}
