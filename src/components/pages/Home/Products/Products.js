import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://parts-store.onrender.com/products").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="pt-52 mb-8 p-8 bg-base-100">
      <h1 className="text-5xl text-neutral font-bold text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-8 mt-12 gap-8">
        {products?.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
