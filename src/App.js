import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ResturantProfile from "./components/ResturantProfile";
import Resturants from "./components/Resturants";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Resturants />} />
        <Route path="/ResturantProfile" element={<ResturantProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
