import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../shared/Loading";
import minus from "../../../../assets/icons/minus-sign.png";
import plus from "../../../../assets/icons/plus.png";
import { toast } from "react-toastify";

const PurchaseForm = ({ product }) => {
    const { _id, picture, name, price, available, minOrder } = product;
    const [quantity, setQuantity] = useState(minOrder);
  const [user, loading] = useAuthState(auth);

  if (loading){ 
    return <Loading></Loading>
  }
  const handleIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const totalPrice = price * quantity;
    const order = {
      productId: _id,
      picture: picture,
      productName: name,
      totalPrice: totalPrice,
      customerName: user.displayName,
      customerEmail: user.email,
      customerPhone: phone,
      customerAddress: address,
      orderQty: quantity,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            e.target.reset()
          toast.success("Order success");
        }
      });
  };

  return (
    <div className="w-full lg:w-3/4">
      <form onSubmit={handlePurchase} className="form-control lg:mt-2">
        <div className="mt-2 pl-2 border border-secondary rounded-lg flex w-44">
          <button onClick={handleDecrease} className="btn btn-ghost">
            <img width={15} src={minus} alt="" />
          </button>
          <input type="text" value={quantity} class="input w-16 text-lg" />
          <button onClick={handleIncrease} className="btn btn-ghost">
            <img width={15} src={plus} alt="" />
          </button>
        </div>
        {quantity > available && (
          <p className="text-error">Your Order More Than Our Stock</p>
        )}
        {quantity < minOrder && (
          <p className="text-error">
            Your Order less Than Our Minimum Order Requirement
          </p>
        )}
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="text"
            readOnly
            value={user?.displayName}
            class="input input-bordered border-secondary max-w-xs w-full mt-2"
            required
          />
          <input
            type="text"
            readOnly
            value={user?.email}
            class="input input-bordered border-secondary max-w-xs w-full mt-2"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            class="input input-bordered border-secondary max-w-xs w-full mt-2"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            class="input input-bordered border-secondary max-w-xs w-full mt-2"
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="submit"
            disabled={quantity > available || quantity < minOrder}
            className="btn btn-secondary text-white font-semibold max-w-xs w-full lg:w-56 block mt-2"
            value="Order Now"
          />
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
