import React, { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router";

const HeaderSidebar = () => {
  const { pathname } = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <TopBar toggleDrawer={toggleDrawer} />
      {pathname === "/" && <Sidebar isDrawerOpen={isDrawerOpen} />}
    </>
  );
};

export default HeaderSidebar;
