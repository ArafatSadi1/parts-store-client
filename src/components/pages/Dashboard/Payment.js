import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0g7kHBvOlerm2EEroltSS1rRM2MHgJAVMRp27pdfsSh1pa8WNrNq8ntLvB4F4nusQdyvSzmHoYcq6grGkhTMfX0045fMYQvO"
);

const Payment = () => {
  const { orderId } = useParams();
  const [user, loading] = useAuthState(auth);
  const { data: order, isLoading } = useQuery("payment", () =>
    fetch(`https://parts-store.onrender.com/payment/${orderId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          value={user.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          value={user.email}
          readOnly
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          value={order?.productName}
          readOnly
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="max-w-xs mx-auto mt-2">
        <label className="block">
          <span className="text-sm">
            Your Total Quantity: {order?.orderQty}
          </span>
        </label>

        <label>
          <span className="text-sm">
            Your Total Price Is:
            <span className="text-secondary font-semibold ml-1">
              ${order?.totalPrice}
            </span>
          </span>
        </label>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
