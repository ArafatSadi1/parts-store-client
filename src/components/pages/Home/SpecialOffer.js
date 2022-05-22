import React from "react";
import { Link } from "react-router-dom";
import car1 from "../../../assets/products/car1.jpg";
import car2 from "../../../assets/products/car2.jpg";
import car3 from "../../../assets/products/car3.jpg";

const SpecialOffer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <Link to="/mercideze">
        <img src={car1} alt="" />
      </Link>
      <Link to="/bmw">
        <img src={car2} alt="" />
      </Link>
      <Link to="/ferrari">
        <img src={car3} alt="" />
      </Link>
    </div>
  );
};

export default SpecialOffer;
