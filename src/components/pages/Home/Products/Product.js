import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, about, picture, name, available, minOrder } = product;

  return (
    <div className="w-full h-full bg-base-100 shadow-xl rounded border">
      <div className=" flex items-center justify-center">
        <img className="w-60 h-60 object-fill" src={picture} alt="car parts" />
      </div>
      <div className="text-gray-700 mt-6">
        <div className="p-3">
          <h2 className="text-xl">
            <span className="text-neutral">Parts:</span> {name}
          </h2>
          <div className="flex items-center justify-between mt-6">
            <div className="">
              <p className="font-bold text-lg">
                ${price}
                <span className="text-slate-500 text-sm font-normal">
                  /piece
                </span>
              </p>
              <p className="font-semibold">
                {minOrder}
                <span className="text-slate-500 text-sm"> pieces</span>
                <span className="text-slate-500 text-sm font-normal ml-1">
                  (min order)
                </span>
              </p>
            </div>
            <Link
              to={`/purchase-product/${_id}`}
              className="bg-primary py-2 px-4 rounded font-semibold text-white hover:bg-[#0166d9] duration-300"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
