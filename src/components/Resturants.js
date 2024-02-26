import React from "react";
import { MyButton, MyInput } from "../CustomComponents/MyComponents";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
const data = [
  {
    name: "Lahore",
    url: "/",
  },
  {
    name: "Resturants List",
    url: "/",
  },
  {
    name: "Food Court By Hinfy Dinfy",
    url: "/ResturantProfile",
  },
];
const Resturants = () => {
  return (
    <div classclassName="md:container md:mx-auto">
      <div className="sticky top-20 z-10 flex justify-center  bg-white">
        <div className="flex flex-row space-x-2 m-5">
          <MyInput
            id="search"
            type={"text"}
            placeholder={"search resturants"}
          />
          <MyButton onClick={() => alert("clicked")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </MyButton>
        </div>
      </div>

      <div className="container m-auto">
        <div className="mx-5">
          {" "}
          <BreadCrumb data={data} />
        </div>

        <h1 className="text-black text-xl font-bold mx-5 my-2">
          All Resturants
        </h1>
        <div className=" bg-white p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <Link to="/ResturantProfile">
            <ResturantCard />
          </Link>
          <Link to="/ResturantProfile">
            <ResturantCard />
          </Link>
          <Link to="/ResturantProfile">
            <ResturantCard />
          </Link>
          <Link to="/ResturantProfile">
            <ResturantCard />
          </Link>
          <Link to="/ResturantProfile">
            <ResturantCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resturants;
