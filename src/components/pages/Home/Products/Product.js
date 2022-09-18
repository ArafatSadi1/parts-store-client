import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, about, picture, name, available, minOrder } = product;

  return (
    <div className="card bg-base-100 shadow-xl border border-primary">
      <figure>
        <img className="w-full" src={picture} alt="car parts" />
      </figure>
      <div className="text-gray-700">
        <div className="p-2">
          <h2 className="card-title text-2xl">
            <span className="text-neutral">Parts:</span> {name}
          </h2>
          <div className="my-3">
            <p className="font-semibold">
              Price: ${price}/<span className="text-slate-500 text-sm">piece</span>
            </p>
            <p className="font-semibold py-0">
              Available: {available}
              <span className="text-slate-500 text-sm"> piece</span>
            </p>
            <p className="font-semibold">
              Min Order Qty: {minOrder}
              <span className="text-slate-500 text-sm"> piece</span>
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
