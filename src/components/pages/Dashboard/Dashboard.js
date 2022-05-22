import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-pink-50">
        {/* <!-- Page content here --> */}
        <h2>Welcome To Your Dashboard</h2>
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
              <NavLink to='myOrders'>My Orders</NavLink>
          </li>
          <li>
              <NavLink to='addReview'>Add Review</NavLink>
          </li>
          <li>
              <NavLink to='myProfile'>My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
