import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, about, picture, name, available, minOrder } = product;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={picture} alt="car parts" />
      </figure>
      <div className="card-body text-gray-700">
        <h2 className="card-title text-2xl">
          <span className="text-neutral">Parts:</span> {name}
        </h2>
        <p className="text-gray-500">
          <span className="font-semibold text-gray-700">About Parts: </span>
          {about}
        </p>
        <div>
          <p className="font-semibold">
            Price: ${price}/<span className="text-slate-500">piece</span>
          </p>
          <p className="font-semibold py-0">
            Available: {available}
            <span className="text-slate-500"> piece</span>
          </p>
          <p className="font-semibold">
            Min Order Qty: {minOrder}
            <span className="text-slate-500"> piece</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/purchase-product/${_id}`} className="btn btn-primary">
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
