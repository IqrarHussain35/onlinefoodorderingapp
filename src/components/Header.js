import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 px-6 bg-white shadow-lg sticky top-0 z-50">
      <div className="w-30 h-16 my-auto">
        <img src="/foodcourt1.png" alt="logo" />
      </div>
      <ul className="flex gap-7 mx-auto cursor-pointer font-medium">
        <li className="nav-link hover:text-pink">Home</li>
        <li className="nav-link hover:text-pink">About</li>
        <li className="nav-link hover:text-pink">Contact Us</li>
        <li className="nav-link hover:text-pink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </li>
      </ul>
      <div className="self-end my-auto">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="/iqrar.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Header;
