import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { MyButton, OutlinedButton } from "../CustomComponents/MyComponents";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function LoginDialog({ openLoginDialog, handleCloseLogin }) {
  return (
    <React.Fragment>
      <Dialog
        open={openLoginDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseLogin}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="continer w-96 py-5">
          <div className="relative p-5 text-2xl font-bold text-black">
            Welcome!
            <br />
            <span className="text-sm font-light">
              Sign Up or Login to continue
            </span>
            <button
              onClick={handleCloseLogin}
              type="button"
              className="absolute right-4 top-2 inline-flex items-center rounded-full border border-pink p-1 text-center text-sm font-medium text-pink hover:bg-lightPink focus:outline-none focus:ring-1 focus:ring-pink dark:border-pink dark:text-pink dark:hover:bg-pink dark:hover:text-pink dark:focus:ring-dullPink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className=" container flex flex-col items-center justify-center space-y-3 p-5">
            <button
              type="button"
              className="text-md flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-1 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55 "
            >
              <svg
                class="me-2 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              Continue With Facebook
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border  border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300">
              <img
                className="h-6 w-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span> Continue With Google</span>
            </button>
            <span>or</span>
            <MyButton fullWidth={true}>Login</MyButton>
            <OutlinedButton fullWidth={true}>Sign Up</OutlinedButton>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
