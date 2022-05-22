import React from "react";
import homeBanner from "../../../assets/homeBanner.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div
        class="hero h-[60vh]"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-2xl">
            <h3 className="text-2xl">
              Welcome To Parts<span className="text-secondary">Store</span>
            </h3>
            <h1 class="mb-5 text-5xl font-bold">Find The Right Parts</h1>
            <p class="my-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto mb-[-130px] mt-[-50px] relative z-20 bg-primary shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-gray-800 font-bold">Select Your Vehicles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          <input
            type="text"
            placeholder="Make"
            class="input input-bordered w-full"
          />
          <input
            type="number"
            placeholder="Year"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Model"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Engine Model"
            class="input input-bordered w-full"
          />
          <input className="btn btn-neutral" type="submit" value="Find My Parts" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
