import React, { useEffect, useRef, useState } from "react";
import ResturantDetail from "./ResturantDetail";
import CousineCard from "./CousineCard";
import Cart from "./Cart";
import { resData } from "./Test";

const ResturantProfile = () => {
  const url = window.location.href;
  const scrollX = useRef(null);
  const sectionRefs = useRef([]);
  const [path, setpath] = useState(url.split("#")[1]);
  const [scroll, setScroll] = useState(0);
  const [resdata, setresData] = useState(resData);
  const [cousines, setCousines] = useState(
    resdata.data?.menus[0].menu_categories,
  );

  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setpath(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 },
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {}, []);
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
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
    }
  };
  useEffect(() => {}, [scrollX, path]);
  return (
    <div className=" mt-10 p-10">
      <ResturantDetail resdata={resdata} />
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

      <div className="sticky top-[70px] z-10 flex  flex-col gap-2 bg-white p-3">
        <form>
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
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
              type="search"
              id="search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Search"
            />
            <button
              onClick={handleSearch}
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-pink px-4 py-2 text-sm font-medium text-white hover:bg-dullPink focus:outline-none focus:ring-4 focus:ring-lightPink dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        {/* {scroll > 0 && (
         
        )} */}
        <div className="flex">
          <button
            onClick={onScrollLeft}
            className="block h-10 w-10 rounded-full text-pink hover:bg-lightPink2 lg:hidden "
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
          <ul
            ref={scrollX}
            className="no-scrollbar flex w-full flex-1 justify-between overflow-x-scroll scroll-smooth rounded font-sans "
          >
            {cousines.map((item) => (
              <li
                onClick={(e) => scrollToTarget(e, item.name.toLowerCase())}
                key={item.id}
                className={`${path === item.name.toLowerCase() ? " border-b-2 border-b-pink bg-lightPink" : null} mx-2 inline-block  h-10 w-full cursor-pointer border-2 border-b border-transparent px-4  py-3 text-center text-[15px] font-medium text-black transition-all hover:border-2 hover:border-b-pink hover:bg-lightPink`}
              >
                <a href={`#${item.name.toLowerCase()}`}>
                  {item.name}({item.products?.length})
                </a>
              </li>
            ))}
          </ul>
          {/* {data.length > 9 && (
          
        )} */}
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
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-6 overflow-y-auto bg-white p-4 lg:col-span-4">
          {cousines.map((item) => (
            <section
              key={item.id}
              ref={(ref) => (sectionRefs.current[item.id] = ref)}
              id={item.name.toLowerCase()}
            >
              <h1 className={`text-xl font-bold text-black`}>{item.name}</h1>
              {/* <span className="mb-3 block font-light text-grey">
                Most Orderd Right Now
              </span> */}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
                {item.products.map((subitem) => {
                  return <CousineCard key={subitem.id} data={subitem} />;
                })}
              </div>
            </section>
          ))}
        </div>
        <div className="sticky right-0 top-40 z-[9]  hidden h-[460px] bg-white  lg:col-span-2 lg:mt-5 lg:block">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ResturantProfile;
