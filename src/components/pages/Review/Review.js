import React from "react";
import { useQuery } from "react-query";
import Loading from "../../pages/shared/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactStars from "react-stars";


const Review = () => {
  const settings = {
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://parts-store.onrender.com/reviews", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-32 bg-base-100 p-8">
      <h2 className="text-5xl font-bold text-neutral text-center">
        What Our Customers Are Saying
      </h2>
      <div>
        <Slider {...settings}>
          {reviews?.map((review) => (
            <div>
              <div className="relative mt-20 w-full text-black ">
                <div className="bg-gray-100 h-72 p-10 m-5 border rounded-md shadow-lg">
                  <div>
                    <p className="text-sm md:text-lg text-justify mt-4">
                      {review.text.slice(0, 150)}...
                    </p>
                    <div>
                      <div className="flex items-center gap-2 pt-4">
                        <h2 className="text-sm md:text-lg text-justify font-bold">
                          {review.name}
                        </h2>
                      </div>
                      <div>
                        <div>
                          <div>
                            <ReactStars
                              size={20}
                              value={review.rating}
                              edit={false}
                            ></ReactStars>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
