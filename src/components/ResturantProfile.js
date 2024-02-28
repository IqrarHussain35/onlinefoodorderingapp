import React, { useEffect, useRef, useState } from "react";
import ResturantDetail from "./ResturantDetail";
import { MyInput } from "../CustomComponents/MyComponents";
import CousineCard from "./CousineCard";
import Cart from "./Cart";
const data = [
  {
    id: 1,
    name: "Papular",
  },
  { id: 2, name: "Cake" },
  { id: 3, name: "Pastery" },
  { id: 4, name: "Pizza" },
  { id: 5, name: "Sandwitches" },
];

const ResturantProfile = () => {
  const url = window.location.href;
  const [path, setpath] = useState(url.split("#")[1]);
  const scrollX = useRef(null);
  const [scroll, setScroll] = useState(0);

  const onScrollRight = () => {
    if (scrollX.current) {
      scrollX.current.scrollLeft += 100;
      setScroll(scrollX.current.scrollLeft);
    }
  };

  const onScrollLeft = () => {
    if (scrollX.current) {
      scrollX.current.scrollLeft -= 100;
      setScroll(scrollX.current.scrollLeft);
    }
  };
  function scrollToTarget(e, targetId) {
    e.preventDefault();
    setpath(targetId);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {}, [scrollX, path]);
  return (
    <div className=" md:container md:mx-auto">
      <ResturantDetail />
      <div className="my-6 flex flex-col space-y-4 border-b border-b-gray-300 pb-6">
        <h1 className="text-3xl font-light">Avialable Deals</h1>
        <div className="relative flex w-96 flex-col overflow-hidden rounded-lg bg-lightPink p-4 font-medium text-pink transition-all duration-300 hover:rounded-lg hover:bg-lightPink2 hover:text-dullPink  hover:ring-2 hover:ring-lightPink2 ">
          <div className="flex items-center">
            <img
              src="/percentage.svg"
              alt="logo"
              height={15}
              width={15}
              className="mr-2"
            />
            45% off
          </div>
          <span className="inline-block  text-sm  font-normal text-black">
            Min order Rs. 199 Valid for Selcted Items auto apply
          </span>
          <div className="absolute -bottom-3 -right-3">
            <img src="/percentage.svg" alt="logo" height={50} width={50} />
          </div>
        </div>
      </div>

      <div className="sticky top-[80px] z-10 flex h-16 place-items-center items-center justify-center space-x-2 bg-white px-14 ">
        <MyInput placeholder={"Search here"} />
        {scroll > 0 && (
          <button
            onClick={onScrollLeft}
            className=" h-10 w-10 rounded-full text-pink hover:bg-lightPink2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        )}
        <ul
          ref={scrollX}
          className="no-scrollbar flex w-full overflow-x-scroll scroll-smooth rounded font-sans "
        >
          {data.map((item) => (
            <li
              onClick={(e) => scrollToTarget(e, item.name.toLowerCase())}
              key={item.id}
              className={`${path === item.name.toLowerCase() ? "border-b-2 border-b-pink bg-lightPink" : null} mx-2 block h-10 w-full cursor-pointer border-2 border-b border-transparent px-4 py-3  text-center text-[15px] font-medium text-black transition-all hover:border-2 hover:border-b-pink hover:bg-lightPink `}
            >
              <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        {data.length > 8 && (
          <button
            type="button"
            className="h-10 w-10 rounded-full text-pink hover:bg-lightPink2"
          >
            <svg
              onClick={onScrollRight}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-10 w-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-6 overflow-y-auto bg-white p-4 lg:col-span-4">
          <section id="papular">
            <h1 className={`text-xl font-bold text-black`}>Popular</h1>
            <span className="mb-3 block font-light text-grey">
              Most Orderd Right Now
            </span>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
            </div>
          </section>
          <section id="pastery">
            <h1 className={`text-xl font-bold text-black`}>Pastery</h1>
            <span className="mb-3 block font-light text-grey">
              Most Orderd Right Now
            </span>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
            </div>
          </section>

          <section id="cake">
            <h1 className="text-xl font-bold text-black">Cake</h1>
            <span className="mb-3 block font-light text-grey">
              Most Orderd Right Now
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
            </div>
          </section>
          <section id="pizza">
            <h1 className="text-xl font-bold text-black">Pizza</h1>
            <span className="mb-3 block font-light text-grey">
              Most Orderd Right Now
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
            </div>
          </section>
          <section id="sandwitches">
            <h1 className="text-xl font-bold text-black">Sandwitches</h1>
            <span className="mb-3 block font-light text-grey">
              Most Orderd Right Now
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
              <CousineCard />
            </div>
          </section>
        </div>
        <div className=" sticky right-0 top-40 z-[11] hidden h-[460px] bg-white  lg:col-span-2 lg:block">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ResturantProfile;
