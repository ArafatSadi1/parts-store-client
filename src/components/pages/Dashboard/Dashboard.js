import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../shared/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-pink-50">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/myProfile">My Profile</NavLink>
          </li>
          {dbUser.role === "admin" || (
            <>
              <li>
                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">Add A Review</NavLink>
              </li>
            </>
          )}
          {dbUser.role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/addProduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">Manage Products</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageAllOrders">Manage Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
