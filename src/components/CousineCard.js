import React from "react";
import { useData } from "../context/CartState";
import { succeccsAlert } from "../common";

const CousineCard = ({ data }) => {
  const { name, logo_path, description, product_variations } = data;
  const basePrice = product_variations[0]?.price;
  const { products, setProducts } = useData();

  const handleClick = () => {
    let _products = [...products];
    const newProduct = { ...data, quantity: 1, price: basePrice };
    const check = _products.find((item) => item.id === data.id);
    if (check) {
      succeccsAlert("Product already exists in the cart.");
    } else {
      _products.push(newProduct);
      succeccsAlert("Product added to cart.");
    }
    setProducts(_products);
  };

  return (
    <div
      // className="m-1 flex flex-1 transform cursor-pointer flex-row items-center
      // rounded-lg border-[1px] bg-white p-2 transition-transform hover:scale-105
      // hover:bg-lightPink"
      className="m-1 flex flex-1 transform cursor-pointer flex-row items-center
      rounded-lg border-[1px] bg-white p-2 transition-transform duration-300 ease-out hover:scale-105
      hover:bg-lightPink"
    >
      <div className=" flex flex-grow flex-col space-y-2">
        <h1 className="font-medium text-black">{name}</h1>
        <h2 className="line-clamp-2 font-medium text-grey">{description}</h2>
        <h1 className="text-lg font-medium text-black">From Rs.{basePrice}</h1>
      </div>
      <div className="relative h-32 w-32 flex-shrink-0 rounded-lg">
        <img
          src={logo_path}
          alt="cuisine"
          className="h-full w-full rounded-lg object-cover object-center"
        />
        <button
          onClick={handleClick}
          className="absolute bottom-2 right-2  flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-grey bg-white hover:scale-110"
        >
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
