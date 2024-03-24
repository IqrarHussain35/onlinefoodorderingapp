import React, { useEffect, useState } from "react";
import Resturants from "./Resturants";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";
import { MyButton, MyInput } from "../CustomComponents/MyComponents";
import Footer from "./Footer";
import { getAllResturants } from "../services/ApiCall";
import { imgUrl, succeccsAlert } from "../common";

const Dashboard = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchResturants();

    // eslint - disable - next - line;
  }, []);
  const fetchResturants = async () => {
    const res = await getAllResturants();
    if (res.status) {
      const resturantArr = res.data;
      for (let i = 0; i < resturantArr.length; i++) {
        resturantArr[i].info.cloudinaryImageId =
          imgUrl + resturantArr[i].info.cloudinaryImageId;
      }
      setdata(resturantArr);
    }
  };
  return (
    <>
      <div className="items-center justify-center p-4 sm:ml-52">
        {/* <div className=" sticky top-16 z-10 mx-auto flex flex-col items-center justify-center bg-white">
          <div className="m-5  flex flex-row space-x-2">
            <MyInput
              // fullWidth={true}
              id="search"
              type={"text"}
              placeholder={"search resturants"}
            />
            <MyButton onClick={() => alert("clicked")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </MyButton>
          </div>

          <h1 className="mx-5 my-2 self-start text-2xl font-bold text-black ">
            All Resturants
          </h1>
        </div> */}
        <div className=" sticky top-16 z-10 mx-auto items-center justify-center bg-white p-5 ">
          <form className="m-5">
            <label
              htmlFor="search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-pink "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-pink px-4 py-2 text-sm font-medium text-white hover:bg-dullPink focus:outline-none focus:ring-4 focus:ring-lightPink dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <h1 className="mx-5 my-2  text-2xl font-bold text-black ">
            All Resturants
          </h1>
        </div>

        <div className="mt-14 rounded-lg p-4 ">
          <div className="md:container md:mx-auto">
            {/* <div className="container m-auto"> */}
            {/* <div className="mx-5"> <BreadCrumb data={data} /></div> */}

            {/* className=" grid gap-5 bg-white p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item) => (
                <Link to={`/ResturantProfile/${item.info.name}`}>
                  <ResturantCard data={item.info} />
                </Link>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
