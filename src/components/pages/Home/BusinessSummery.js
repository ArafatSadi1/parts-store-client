import React from "react";
import flag from "../../../assets/icons/flag.png";
import carParts from "../../../assets/icons/car-parts.png";
import users from "../../../assets/icons/user.png";

const BusinessSummery = () => {
  return (
    <div className="my-12 p-8">
      <h4 className="text-lg text-center text-secondary">
        We Try To Understand Client Expectation
      </h4>
      <h2 className="text-5xl font-bold text-neutral text-center divider">
        Our Achievement
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 mx-12">
        <div class="bg-base-100 flex flex-col justify-center items-center">
            <img width={70} src={flag} alt="Shoes" />
            <h4 class="text-2xl font-bold text-secondary mt-4">72+</h4>
            <h2 className="text-3xl font-bold text-neutral">Countries</h2>
        </div>
        <div class="bg-base-100 flex flex-col justify-center items-center">
            <img width={70} src={carParts} alt="Shoes" />
            <h4 class="text-2xl font-bold text-secondary mt-4">450+</h4>
            <h2 className="text-3xl font-bold text-neutral">Complete Projects</h2>
        </div>
        <div class="bg-base-100 flex flex-col justify-center items-center">
            <img width={70} src={users} alt="Shoes" />
            <h4 class="text-2xl font-bold text-secondary mt-4">355+</h4>
            <h2 className="text-3xl font-bold text-neutral">Happy Client</h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
