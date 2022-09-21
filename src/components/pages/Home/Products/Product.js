import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, about, picture, name, available, minOrder } = product;

  return (
    <div className="w-full h-full bg-base-100 shadow-xl border border-primary rounded">
      <div className=" flex items-center justify-center">
        <img className="w-60 h-60 object-fill" src={picture} alt="car parts" />
      </div>
      <div className="text-gray-700">
        <div className="p-2">
          <h2 className="text-xl">
            <span className="text-neutral">Parts:</span> {name}
          </h2>
          <div className="my-3">
            <p className="font-bold">
              ${price}
              <span className="text-slate-500 text-sm font-normal">/piece</span>
            </p>
            <p className="font-semibold">
              {minOrder}
              <span className="text-slate-500 text-sm"> pieces</span>
              <span className="text-slate-500 text-sm font-normal ml-1">(min order)</span>
            </p>
          </div>
        </div>
        <div>
          <Link
            to={`/purchase-product/${_id}`}
            className="btn btn-primary w-full rounded-none"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
