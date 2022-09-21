import React from "react";
import Slider from "react-slick";
import brand1 from "../../../assets/brands/1.jpg";
import brand2 from "../../../assets/brands/2.jpg";
import brand3 from "../../../assets/brands/3.jpg";
import brand4 from "../../../assets/brands/4.jpg";
import brand5 from "../../../assets/brands/5.jpg";
import brand6 from "../../../assets/brands/6.jpg";
import brand7 from "../../../assets/brands/7.jpg";
import brand8 from "../../../assets/brands/8.jpg";
import brand9 from "../../../assets/brands/9.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    // autoplaySpeed: 20,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="py-32 p-8 bg-base-100">
      <h1 className="text-5xl text-neutral font-bold text-center">
        Brands We Trust
      </h1>
      <div className="container mx-auto sm:px-16 pt-16">
        <Slider {...settings}>
          <div>
            <img className="w-[120px]" src={brand1} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand2} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand3} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand4} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand5} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand6} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand7} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand8} alt="" />
          </div>
          <div>
            <img className="w-[120px]" src={brand9} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
