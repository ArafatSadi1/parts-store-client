import React from "react";
import storageBox from "../../../../assets/products/storageBox.jpg";

const PurchaseProduct = () => {
  const product = {
    _id: 3,
    name: "Storage box",
    about:
      "This Car Armrest Box is made of ABS + leather material. There are three colors to choose from: black, beige and gray. The leather has a fine and smooth surface, full color and smooth feel. ",
    image: storageBox,
    price: 22,
    available: 450,
    minOrder: 100,
  };
  return (
    <div class="min-h-screen bg-slate-50">
      <div class="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center">
        <img
          src={product.image}
          class="max-w-md w-full shadow-2xl mb-8"
          alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">
            <span>Parts:</span> {product.name}
          </h1>
          <p class="py-6">
            <span className="font-bold text-lg">Parts Detail: </span>
            {product.about}
          </p>
          <p className="font-bold text-lg">
            Price: ${product.price}/
            <span className="text-gray-500 font-semibold">piece</span>
          </p>
          <p className="font-bold text-lg">
            Available Quantity: {product.available}{" "}
            <span className="text-gray-500 font-semibold">piece</span>
          </p>
          <p className="font-bold text-lg">
            Minimum Order: {product.minOrder}{" "}
            <span className="text-gray-500 font-semibold">piece</span>
          </p>
          <div>
            <input
              type="number"
              placeholder="Quantity"
              class="input input-bordered border-secondary w-32 mt-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered border-secondary max-w-xs w-full mt-2 block"
            />
            <input
              type="text"
              placeholder="Your Address"
              class="input input-bordered border-secondary max-w-xs w-full mt-2 block"
            />
          </div>
          <button class="btn btn-primary block mt-4">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
