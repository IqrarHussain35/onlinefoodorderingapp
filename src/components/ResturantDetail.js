import React from "react";
import BreadCrumb from "./BreadCrumb";
import { useParams } from "react-router";

const ResturantDetail = ({ resdata }) => {
  const { name } = useParams();
  const { cuisines } = resdata?.data;
  const data = [
    {
      name: "Dashboard",
      url: "/",
    },
    {
      name: name,
      url: `/ResturantProfile/${name}`,
    },
  ];
  return (
    <div className=" my-2 flex flex-col space-y-2 border-b border-b-gray-300  pb-6">
      {" "}
      <div className="my-1">
        {" "}
        <BreadCrumb data={data} />
      </div>
      <div className="flex flex-row space-x-1">
        <h2 className="font-normal text-grey">
          {cuisines.map((item) => item.name + ". ")}
        </h2>
      </div>
      <h1 className="text-3xl font-bold text-black">{name}</h1>
      <div className="font-medium text-grey">
        <strong className="mr-2 inline-block rounded-3xl bg-lightPink2 px-2 py-1 text-xs font-bold text-dullPink">
          45 % off
        </strong>
        Service fee apply
      </div>
      <div className="flex space-x-2">
        <p className="flex items-center space-x-1 text-xs font-medium text-grey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-1 h-4 w-4 fill-yellow-500 stroke-orange-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>{" "}
          4/5 (78)
        </p>
        <h1 className="p-1 font-medium text-pink transition-all duration-300 hover:rounded-lg hover:bg-lightPink hover:text-dullPink">
          See reviews
        </h1>
        <div className="flex items-center p-1 font-medium text-pink transition-all duration-300 hover:rounded-lg hover:bg-lightPink hover:text-dullPink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-2 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More info
        </div>
      </div>
    </div>
  );
};

export default ResturantDetail;
