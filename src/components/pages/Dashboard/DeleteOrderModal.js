import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { productName, _id } = deleteOrder;
  const handleDeleteOrder = () => {
    fetch(`https://protected-mountain-80420.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast("Your Order Delete");
          setDeleteOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-2xl">Are you sure?</h3>
          <p class="py-4">you want to delete {productName} from your order!!</p>
          <div class="modal-action">
            <button onClick={handleDeleteOrder} className="btn btn-error">
              Delete
            </button>
            <label for="delete-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
