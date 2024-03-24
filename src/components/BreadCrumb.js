import React from "react";
import { useLocation } from "react-router-dom";
const BreadCrumb = ({ data }) => {
  let { pathname } = useLocation();
  pathname = decodeURIComponent(pathname);
  return (
    <div className="flex items-center ">
      {data.map((item, index) => {
        return (
          <div key={item.name} className="flex space-x-1">
            <a
              href={item.url}
              className={`border-b border-transparent ${pathname === item.url ? "text-pink hover:border-b hover:border-pink hover:border-opacity-100" : "text-black"} cursor-pointer font-medium `}
            >
              {item.name}
            </a>
            {index !== data.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="my-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
