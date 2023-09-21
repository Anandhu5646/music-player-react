import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Library from "../pages/Library";
import Trending from "../pages/Trending";
import Player from "../pages/Player";
import Favourite from "../pages/Favourite";
import './Route.css'
import Sidebar from "../components/Sidebar";
import Login from "../components/auth/Login.js";


export default function MainRoutes() {
  return (
    <Router>
      <div className="main-body">
      <Login/>
        {/* <Sidebar/>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes> */}
      </div>
    </Router>
  );
}
