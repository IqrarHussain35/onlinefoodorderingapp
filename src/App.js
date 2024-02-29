import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ResturantProfile from "./components/ResturantProfile";
import Resturants from "./components/Resturants";
import Sidebar from "./components/Sidebar";
import HeaderSidebar from "./components/HeaderSidebar";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <Router>
      <HeaderSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ResturantProfile" element={<ResturantProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
