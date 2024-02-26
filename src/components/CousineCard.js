import React from "react";

const CousineCard = () => {
  return (
    <div
      className="m-1 flex flex-1 transform cursor-pointer flex-row items-center
      rounded-lg border-[1px] bg-white p-2 transition-transform hover:scale-105
      hover:bg-lightPink"
    >
      <div className=" flex flex-grow flex-col space-y-2">
        <h1 className="font-medium text-black">Chicken Supreme</h1>
        <h2 className="line-clamp-2 font-medium text-grey">
          Chicken tikka, Black olives, Cheese, capsicum, Chicken tikka, Black
          olives, Cheese, capsicum
        </h2>
        <h1 className="text-lg font-medium text-black">From Rs. 290</h1>
      </div>
      <div className="relative h-32 w-32 flex-shrink-0 rounded-lg">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAoQhMJX_3TBCaeA2sgnatJfnTsHFX1j-keZ_KNKoEi2pAC56W"
          alt="cuisine"
          className="h-full w-full rounded-lg object-cover"
        />
        <button className="absolute bottom-2 right-2  flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-grey bg-white hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CousineCard;
