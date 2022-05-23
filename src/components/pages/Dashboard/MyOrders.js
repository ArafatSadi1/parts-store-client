import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../pages/shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState({});
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/order").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-6">
      {orders.map((order) => (
        <MyOrderCard
          key={order._id}
          refetch={refetch}
          order={order}
          setDeleteOrder={setDeleteOrder}
          deleteOrder={deleteOrder}
        ></MyOrderCard>
      ))}
    </div>
  );
};

export default MyOrders;
