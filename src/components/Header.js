import React from "react";
import { MyButton, OutlinedButton } from "../CustomComponents/MyComponents";
import LoginDialog from "./LoginDialog";

const Header = () => {
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);

  const handleOpenLogin = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLogin = () => {
    setOpenLoginDialog(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-2 shadow-lg">
        <div className="w-30 my-auto h-16">
          <img src="/foodcourt1.png" alt="logo" />
        </div>
        <ul className="mx-auto hidden cursor-pointer gap-7 font-medium md:flex">
          <li className="nav-link hover:text-pink">Home</li>
          <li className="nav-link hover:text-pink">About</li>
          <li className="nav-link hover:text-pink">Contact Us</li>
          <li className="nav-link hover:text-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </li>
        </ul>
        <div className="flex space-x-3 self-end ">
          <OutlinedButton onClick={handleOpenLogin}>Login</OutlinedButton>
          <MyButton>Sign Up</MyButton>
          <img
            className=" h-12 w-12 rounded-full object-cover"
            src="/iqrar.png"
            alt="Profile"
          />
        </div>
      </div>
      <LoginDialog
        openLoginDialog={openLoginDialog}
        handleCloseLogin={handleCloseLogin}
      />
    </>
  );
};

export default Header;
