import React from "react";
import { useQuery } from "react-query";
import Loading from "../../pages/shared/Loading";

const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews", {
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
    <div className="mt-12 bg-base-100 p-8">
      <h2 className="text-5xl font-bold text-neutral text-center">
        What Our Customers Are Saying
      </h2>
      <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews?.map((review) => (
          <div className="card shadow-lg p-4 bg-base-100" key={review._id}>
            <p className="text-gray-500 text-center">
              "{review.text}"
              <span className="underline font-bold text-lg">{review.name}</span>
            </p>
            <p className="font-bold mt-2">
              Ratings: <span className="text-secondary">{review.rating}/5</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
