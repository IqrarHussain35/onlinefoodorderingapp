import React from "react";

const Home = () => {
  return (
    <div className="mt-[73px] items-center justify-center">
      <img
        className="object-cover"
        src="https://partner.foodpanda.pk/resource/SSUFP_PK/PK_Assets/images/desktop/landing/bg_landing.webp"
        alt="banner"
      />
      <div className="container mx-auto">
        <h1 className="mb-6 text-center text-3xl font-bold text-black">
          Bring new opportunities with us
        </h1>
        <div className="mx-auto grid  justify-center  p-5 sm:grid-cols-3">
          <div className=" max-w-sm  rounded-lg border border-gray-200 bg-white p-6 shadow ">
            <svg
              className="mx-auto mb-3 h-7 w-7  dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-center text-xl font-semibold tracking-tight text-black ">
                Connect With New Customers
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Adding your business to the platform means access to thousands of
              new customers in different neighbourhoods.
            </p>
          </div>
          <div className="max-w-sm  rounded-lg border border-gray-200 bg-white p-6 shadow ">
            <svg
              className="mx-auto mb-3 h-7 w-7  dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-center text-xl font-semibold tracking-tight text-black ">
                Unlock Revenue
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Let customers enjoy your business from anywhere, and capture the
              interest of new ones who haven’t tried it yet.
            </p>
          </div>
          <div className="max-w-sm  rounded-lg border border-gray-200 bg-white p-6 shadow ">
            <svg
              className="mx-auto mb-3 h-7 w-7  dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-center text-xl font-semibold tracking-tight text-black ">
                Focus on Your Business
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We take care of all the payments and customer support, whilst our
              foodpanda riders take care of the delivery. Leaving you to focus
              on what matters!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
