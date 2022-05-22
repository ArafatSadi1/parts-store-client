import React from "react";
import homeBanner from "../../../assets/homeBanner.jpg";

const HomeBanner = () => {
  return (
      <div
        class="hero h-[60vh]"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-2xl">
              <h3 className="text-2xl">Welcome To Parts<span className="text-secondary">Store</span></h3>
            <h1 class="mb-5 text-5xl font-bold">Find The Right Parts Faster</h1>
            <p class="my-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
  );
};

export default HomeBanner;
