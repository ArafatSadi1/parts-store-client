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
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <img className="lg:w-48" src={picture} alt="order" />
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div>
          <p>
            Quantity: <span className="font-semibold">{orderQty}</span>
            <span className="text-sm text-gray-500">piece</span>
          </p>
          <p>Total Price: <span className="font-semibold">${totalPrice}</span></p>
          {transactionId && (
            <p className="mb-2 break-words">
              Transaction Id:
              <span className="text-secondary font-semibold"> {transactionId}</span>
            </p>
          )}
        </div>
        <div className="card-actions justify-end">
          {paid ? (
            <button className="btn btn-success rounded">paid</button>
          ) : (
            <div className="mt-2">
              <Link
                to={`/dashboard/payment/${_id}`}
                className="btn btn-accent lg:mr-2 rounded"
              >
                Payment
              </Link>

              <label
                onClick={() => setDeleteOrder(order)}
                htmlFor="delete-modal"
                className="btn modal-button ml-2 rounded"
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
