import React from "react";
import { Link } from "react-router-dom";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrderCard = ({ order, setDeleteOrder, deleteOrder, refetch }) => {
  const {
    _id,
    picture,
    productName,
    orderQty,
    totalPrice,
    paid,
    transactionId,
  } = order;
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <img className="lg:w-48" src={picture} alt="order" />
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <div>
          <p>
            Quantity: {orderQty}
            <span className="text-sm text-gray-500">piece</span>
          </p>
          <p>Total Price: ${totalPrice}</p>
          {transactionId && (
            <p className="mb-2 break-words">Transaction Id: {transactionId}</p>
          )}
        </div>
        <div class="card-actions justify-end">
          {paid ? (
            <button className="btn btn-success text-green-100">paid</button>
          ) : (
            <div className="mt-2">
              <Link
                to={`/dashboard/payment/${_id}`}
                className="btn btn-accent text-gray-500 lg:mr-2"
              >
                Payment
              </Link>

              <label
                onClick={() => setDeleteOrder(order)}
                for="delete-modal"
                class="btn modal-button ml-2"
              >
                Delete
              </label>
            </div>
          )}
          <div>
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
    </div>
  );
};

export default MyOrderCard;
