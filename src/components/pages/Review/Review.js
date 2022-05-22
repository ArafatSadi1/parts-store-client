import React from "react";

const Review = () => {
  const reviews = [
    {
      _id: 1,
      name: "henry ford",
      text: "Have had it for several years, no problems, has pushed cows other vehicles and hay bales around no problem. Hit a few deer with the most recent being first thing to damage cause a slight crease in metal covering fog lights.",
      rating: 4,
    },
    {
      _id: 2,
      name: "henry ford",
      text: "Have had it for several years, no problems, has pushed cows other vehicles and hay bales around no problem. Hit a few deer with the most recent being first thing to damage cause a slight crease in metal covering fog lights.",
      rating: 4,
    },
    {
      _id: 3,
      name: "henry ford",
      text: "Have had it for several years, no problems, has pushed cows other vehicles and hay bales around no problem. Hit a few deer with the most recent being first thing to damage cause a slight crease in metal covering fog lights.",
      rating: 4,
    },
    {
      _id: 4,
      name: "henry ford",
      text: "Have had it for several years, no problems, has pushed cows other vehicles and hay bales around no problem. Hit a few deer with the most recent being first thing to damage cause a slight crease in metal covering fog lights.",
      rating: 4,
    },
    {
      _id: 5,
      name: "henry ford",
      text: "Fits great, looks great. Descent room for adjustment in the mounting brackets for horizontal, vertical positioning. I was able to do the entire install solo using a long reach car jack, balancing the bumper in the middle under the camera window. Sits perfectly level so the line up is easy.",
      rating: 4,
    },
  ];
  return (
    <div className="mt-28 bg-slate-100 p-8">
      <h2 className="text-5xl font-bold text-neutral text-center">
        What Our Customers Are Saying
      </h2>
      <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div className="card shadow-lg p-4 bg-base-100" key={review._id}>
            <p className="text-gray-500">
              "{review.text}"
              <span className="underline font-bold text-lg">
                {" "}
                {review.name}
              </span>
            </p>
            <p className="font-bold mt-2">
              Ratings: <span>{review.rating}</span>/5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
