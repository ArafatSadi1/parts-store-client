import React from "react";

const Product = ({ product }) => {
  const { price, about, image, name, available } = product;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="car parts" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          <span className="font-bold text-neutral">Parts:</span> {name}
        </h2>
        <p>
          <span className="font-bold">About Parts</span> {about}
        </p>
        <p className="font-bold">
          Price: ${price}/
          <span className="text-slate-500 font-semibold">piece</span>
        </p>
        <p className="font-bold">Available Quantity: {available}/<span className="text-slate-500 font-semibold text-sm">(min order 100)</span></p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
