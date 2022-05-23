import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, price, about, picture, name, available, minOrder } = product;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="car parts" />
      </figure>
      <div class="card-body text-gray-700">
        <h2 class="card-title">
          <span className="font-bold text-neutral">Parts:</span> {name}
        </h2>
        <p className="text-gray-500">
          <span className="font-bold text-gray-700">About Parts</span> {about}
        </p>
        <p className="font-bold">
          Price: ${price}/
          <span className="text-slate-500 font-semibold">piece</span>
        </p>
        <p className="font-bold py-0">Available: {available}<span className="text-slate-500 font-semibold"> piece</span></p>
        <p className="font-bold">Min Order Qty: {minOrder}</p>
        <div class="card-actions justify-end">
          <Link to={`/purchase-product/${_id}`} class="btn btn-primary">Check Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
