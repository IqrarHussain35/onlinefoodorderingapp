import React from "react";

const Page404 = () => {
  return (
    <section className="bg-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4  text-7xl font-extrabold tracking-tight text-grey lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-grey md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a href="/" className="text-blue-500">
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page404;
