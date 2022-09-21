import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import minus from "../../../assets/icons/minus-sign.png";
import plus from "../../../assets/icons/plus.png";
import auth from "../../../firebase.init";
import Loading from "../shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(5);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleAddReview = (e) => {
    e.preventDefault();
    const reviewText = e.target.review.value;
    const review = {
      name: user.displayName,
      text: reviewText,
      rating: starRating,
    };
    fetch(`https://parts-store.onrender.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Thanks For Your Compliment");
          e.target.reset();
        }
      });
  };
  return (
    <div className="max-w-xs mx-auto">
      <form onSubmit={handleAddReview} className="flex flex-col gap-2 my-8">
        <input
          type="text"
          value={user.displayName}
          readOnly
          className="input input-bordered border-primary w-full rounded focus:outline-none"
        />
        <textarea
          name="review"
          className="textarea textarea-bordered border-primary w-full rounded focus:outline-none"
          placeholder="Enter Your Review"
        ></textarea>
        <div className="mb-3 flex gap-1">
          {[...Array(5)]?.map((star, i) => {
            const ratingValue: any = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  className="hidden"
                  onClick={() => setStarRating(ratingValue)}
                />
                <FaStar
                  className="cursor-pointer duration-300"
                  color={
                    ratingValue <= (hover || starRating) ? "#ffc107" : "#e4e5e9"
                  }
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-primary rounded focus:outline-none"
        />
      </form>
    </div>
  );
};

export default AddReview;
