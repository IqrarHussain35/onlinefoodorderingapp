import React, { useEffect, useState } from "react";
import { MyButton } from "../CustomComponents/MyComponents";
import { useLocation, useNavigate } from "react-router";
import { useData } from "../context/CartState";

const Cart = () => {
  const { products, incrementQuantity, decrementQuantity, deleteProduct } =
    useData();
  const total = products.reduce((acc, curr) => acc + curr.price, 0);
  const { pathname } = useLocation();
  const fromTopBar = pathname === "/Cart";
  const navigate = useNavigate();
  const gotoCheckout = (e) => {
    e.preventDefault();
    navigate("/Cheackout");
  };

  return (
    <div
      className={`container flex  ${fromTopBar ? "" : "h-[460px]"} flex-col  rounded-lg  border p-2`}
    >
      <div className="m-2 flex justify-around rounded-lg bg-lightgrey p-2">
        <h1 className="flex flex-1 flex-col rounded-md border-[1px] bg-white text-center  font-medium text-pink shadow-lg">
          Delivery
          <span>45 min</span>
        </h1>
        <h1 className="flex flex-1 flex-col  text-center font-medium text-grey">
          Pickup
          <span>Not Available</span>
        </h1>
      </div>
      <div className={`${fromTopBar ? "" : "overflow-y-scroll"}`}>
        <div className="">
          <h1 className="my-2 font-medium">Your Items</h1>
          {/* Cart Item */}
          {products &&
            products.map((item, index) => (
              <>
                <div key={item.id} className="my-2 flex flex-row space-x-1">
                  <img
                    src={item.logo_path}
                    alt="product"
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col space-y-2">
                    <h1 className="text-lg font-medium text-pink">
                      {item.name}
                    </h1>
                    <span className="line-clamp-1 text-sm font-light text-grey">
                      {item.description}
                    </span>
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold text-black">Rs .{item.price}</h1>
                      <div className="mx-1 flex justify-between space-x-3 rounded-full border-[1px] bg-white p-2">
                        {item.quantity > 1 ? (
                          <svg
                            onClick={() => decrementQuantity(item.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6  text-pink hover:scale-110 "
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            onClick={() => deleteProduct(item.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6  text-pink hover:scale-110 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        )}

                        <span>{item.quantity}</span>
                        <svg
                          onClick={() => incrementQuantity(item.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6  text-pink hover:scale-110 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
        </div>
      </div>

      <div className="mx-3 flex  flex-col space-y-2 ">
        <div className="my-3 flex justify-between">
          <h className="text-lg font-bold text-black">Total</h>
          <h className="text-lg font-bold text-black">Rs .{total}</h>
        </div>
        <MyButton fullWidth={true} onClick={gotoCheckout}>
          Review Payment and Address
        </MyButton>
      </div>
    </div>
  );
};

export default Cart;
