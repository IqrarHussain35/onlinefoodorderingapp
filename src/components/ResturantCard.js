import React from "react";

const ResturantCard = ({ data }) => {
  return (
    <div className="container rounded-lg bg-white shadow-lg">
      <div className="container  relative ">
        <div className=" overflow-hidden rounded-t-lg bg-cover bg-no-repeat">
          <img
            className="h-52 w-full cursor-pointer object-fill  shadow-lg transition duration-500 ease-in-out hover:scale-105"
            // src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image3-min-1024x569.png"
            src={data.cloudinaryImageId}
            alt="Popular menu items at a restaurant"
          />
        </div>
        <div className="absolute left-2 top-2">
          <h4 className="m-1 flex  w-20 flex-row rounded-lg bg-pink p-0.5 font-normal text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="my-auto h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clipRule="evenodd"
              />
            </svg>
            10% off
          </h4>
          <h4 className="m-1 flex w-44 flex-row rounded-lg bg-pink p-0.5 font-normal text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="my-auto h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clipRule="evenodd"
              />
            </svg>
            welcome gift free de...
          </h4>
        </div>
      </div>

      <div className="justify-center p-3">
        <div className="flex justify-between">
          <h1 className="line-clamp-1 font-bold text-black">{data.name}</h1>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 h-6 w-6 fill-yellow-500 stroke-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <p>({data.avgRating})</p>
          </div>
        </div>

        <h1 className="line-clamp-1 font-normal text-black">
          {/* $ . Pizza,Burger,Fries  */}$ . {data.cuisines.join(", ")}
        </h1>
        <div className="flex gap-1">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-grey  ring-offset-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {/* 30 min . */}
            {data.sla.deliveryTime} min .
          </h4>
          <h4 className="flex items-center gap-2  text-sm font-semibold text-pink ring-offset-1">
            <img src="./delivery-bike.png" alt="bike" className="h-6 w-6 " />
            Free
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
