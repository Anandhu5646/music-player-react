import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Library from "../pages/Library";
import Trending from "../pages/Trending";
import Player from "../pages/Player";
import Favourite from "../pages/Favourite";
import './Route.css'
import Sidebar from "../components/Sidebar";
import Login from "../components/auth/Login.js";
import { setClietToken } from "../spotify";


export default function MainRoutes() {
  const [token, setToken]=useState("")

  useEffect(()=>{
    const token=window.localStorage.getItem("token")
    const hash=window.location.hash
    window.location.hash("")
    if(!token && hash){

      const _token=hash.split("&")[0].split("=")[1]
      window.localStorage.setItem("token",_token)
      setToken(_token)
      setClietToken(_token)
    }else{
      setToken(token)
      setClietToken(token)
    }
  },[])
  return (!token ?
      <Login/>:
    <Router>
      <div className="main-body">
        <Sidebar/>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      </div>
    </Router>
  );
}
