import React from "react";
import auth from "../../../../firebase.init";
import Loading from "../../shared/Loading";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import PurchaseForm from "./PurchaseForm";

const PurchaseProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery("product", () =>
    fetch(`https://protected-mountain-80420.herokuapp.com/product/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="min-h-screen bg-slate-50">
      <div class="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center">
        <img
          src={product.picture}
          class="max-w-md w-full shadow-2xl mb-8"
          alt=""
        />
        <div>
          <h1 class="text-3xl font-bold">
            <span>Parts:</span> {product.name}
          </h1>
          <p class="py-2">
            <span className="font-bold text-lg">Parts Detail: </span>
            {product.about}
          </p>
          <p className="font-bold text-lg">
            Price: ${product.price}/
            <span className="text-gray-500 font-semibold">piece</span>
          </p>
          <p className="font-bold text-lg">
            Available Quantity: {product.available}
            <span className="text-gray-500 font-semibold">piece</span>
          </p>
          <p className="font-bold text-lg">
            Minimum Order: {product.minOrder}
            <span className="text-gray-500 font-semibold">piece</span>
          </p>
          <PurchaseForm product={product}></PurchaseForm>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
