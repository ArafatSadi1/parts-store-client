import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrderCard = ({ order, setDeleteOrder, deleteOrder, refetch }) => {
  const { _id, picture, productName, orderQty, totalPrice } = order;
  return (
    <div class="card card-side bg-base-100 shadow-xl">
      <img width={200} src={picture} alt="order" />
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <div>
          <p>
            Quantity: {orderQty}
            <span className="text-sm text-gray-500">piece</span>
          </p>
          <p>Total Price: ${totalPrice}</p>
        </div>
        <div class="card-actions justify-end">
          <Link
            to={`myOrder/payment/${_id}`}
            className="btn btn-accent text-gray-800"
          >
            Pay
          </Link>
          <label
            onClick={() => setDeleteOrder(order)}
            for="delete-modal"
            class="btn modal-button"
          >
            Delete
          </label>
          {deleteOrder && (
            <DeleteOrderModal
            refetch={refetch}
              setDeleteOrder={setDeleteOrder}
              deleteOrder={deleteOrder}
            ></DeleteOrderModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
