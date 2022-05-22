import React from "react";
import { useForm } from "react-hook-form";
import storageBox from "../../../../assets/products/storageBox.jpg";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../shared/Loading";
import { toast } from 'react-toastify';

const PurchaseProduct = () => {
  const product = {
    _id: 3,
    name: "Storage box",
    about:
      "This Car Armrest Box is made of ABS + leather material. There are three colors to choose from: black, beige and gray. The leather has a fine and smooth surface, full color and smooth feel. ",
    image: storageBox,
    price: 22,
    available: 450,
    minOrder: 100,
  };

  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = async (data) => {
    if(data.quantity < product.minOrder){
      return toast.error(`Your Order Must be more than ${product.minOrder}`)
    }
    if(data.quantity > product.available){
      return toast.error(`Sorry! Your Order More than our avaiable stock`)
    }

  };
  
  return (
    <div class="min-h-screen bg-slate-50">
      <div class="grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center">
        <img
          src={product.image}
          class="max-w-md w-full shadow-2xl mb-8"
          alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">
            <span>Parts:</span> {product.name}
          </h1>
          <p class="py-6">
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
          <form onSubmit={handleSubmit(onSubmit)} className="form-control lg:mt-2">
            <div className="flex flex-col lg:flex-row gap-2">
              <div>
                <input
                  type="text"
                  readOnly
                  value={user?.displayName}
                  class="input input-bordered border-secondary max-w-xs w-full mt-2"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.name?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.name?.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  readOnly
                  value={user?.email}
                  class="input input-bordered border-secondary max-w-xs w-full mt-2"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.email?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.email?.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div>
                <input
                  type="number"
                  placeholder="Quantity"
                  class="input input-bordered border-secondary max-w-xs w-full mt-2"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.quantity?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.quantity?.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="input input-bordered border-secondary max-w-xs w-full mt-2"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone Number is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.phone?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.phone?.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Your Address"
                  class="input input-bordered border-secondary max-w-xs w-full mt-2"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.address?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.address?.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                type="submit"
                className="btn btn-secondary text-white font-semibold max-w-xs w-full lg:w-48 block mt-2"
                value="Book Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
