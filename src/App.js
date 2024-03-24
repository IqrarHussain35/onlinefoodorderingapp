import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import ResturantProfile from "./components/ResturantProfile";
import Resturants from "./components/Resturants";
import Sidebar from "./components/Sidebar";
import HeaderSidebar from "./components/HeaderSidebar";
import Dashboard from "./components/Dashboard";
import Page404 from "./components/Page404";
import Footer from "./components/Footer";
import Cheackout from "./components/Cheackout";
import RegisterResturant from "./PartnerWithUs.js/RegisterResturant";
import FromIconTocart from "./components/FromIconTocart";
import Home from "./PartnerWithUs.js/Home";
import { DataProvider } from "./context/CartState";
const App = () => {
  return (
    <Router>
      <HeaderSidebar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/ResturantProfile/:name"
            element={<ResturantProfile />}
          />
          <Route path="/Cheackout" element={<Cheackout />} />
          <Route path="/RegisterResturant" element={<RegisterResturant />} />
          <Route path="/Cart" element={<FromIconTocart />} />
          <Route path="/PartnerWithUs" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </DataProvider>
      <Footer />
    </Router>
  );
};

export default App;
