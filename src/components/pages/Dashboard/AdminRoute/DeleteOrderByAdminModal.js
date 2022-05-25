import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderByAdminModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { productName, _id, customerEmail } = deleteOrder;
  const handleDeleteOrder = () => {
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            toast.error('Order Delete');
            setDeleteOrder(null);
            refetch()
        }
    })
  };
    return (
        <div>
      <input type="checkbox" id="delete-order-byAdmin-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-2xl">Are you sure?</h3>
          <p class="py-4">you want to delete <span className='text-secondary'>{productName}</span> from <span className='text-secondary'>{customerEmail}</span> Order!!</p>
          <div class="modal-action">
            <button onClick={handleDeleteOrder} className="btn btn-error">
              Delete
            </button>
            <label for="delete-order-byAdmin-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DeleteOrderByAdminModal;