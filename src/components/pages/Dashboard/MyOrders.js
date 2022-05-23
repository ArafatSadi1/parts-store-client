import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../pages/shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

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
        <div key={order._id} class="card card-side bg-base-100 shadow-xl">
          <img width={200} src={order.picture} alt="order" />
          <div class="card-body">
            <h2 class="card-title">{order.productName}</h2>
            <div>
              <p>
                Quantity: {order.orderQty}
                <span className="text-sm text-gray-500">piece</span>
              </p>
              <p>Total Price: ${order.totalPrice}</p>
            </div>
            <div class="card-actions justify-end">
              <button className="btn btn-primary">Pay</button>
              <label
                onClick={() => setDeleteOrder(order)}
                for="delete-modal"
                class="btn modal-button"
              >
                Delete
              </label>
              {deleteOrder && (
                <DeleteOrderModal
                setDeleteOrder={setDeleteOrder}
                  refetch={refetch}
                  deleteOrder={deleteOrder}
                ></DeleteOrderModal>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
