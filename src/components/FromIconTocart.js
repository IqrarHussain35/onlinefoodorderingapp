import React from "react";
import Cart from "./Cart";
import BreadCrumb from "./BreadCrumb";
const data = [
  {
    name: "Dashboard",
    url: "/",
  },
  {
    name: "Cart",
    url: "/Cart",
  },
];
const FromIconTocart = () => {
  return (
    <div className=" mt-14  p-5 md:mx-24">
      <div className="my-2">
        <BreadCrumb data={data} />
      </div>
      <Cart />
    </div>
  );
};

export default FromIconTocart;
