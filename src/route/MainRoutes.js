import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import Library from "../pages/Library";
import Trending from "../pages/Trending";
import Player from "../pages/Player";
import Favourite from "../pages/Favourite";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </Router>
  );
}