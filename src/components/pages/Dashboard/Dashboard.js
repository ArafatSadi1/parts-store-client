import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../shared/Loading";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    const email = user?.email;
    fetch(`https://parts-store.onrender.com/user/${email}`, {
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

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-pink-50">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content gap-8">
          {/* <!-- Sidebar content here --> */}
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
              }
              to="/dashboard/myProfile"
            >
              My Profile
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
              }
              to="/dashboard/myOrders"
            >
              My Orders
            </NavLink>
          </span>
          {dbUser.role === "admin" || (
            <span>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
                }
                to="/dashboard/addReview"
              >
                Add A Review
              </NavLink>
            </span>
          )}
          {admin && (
            <>
              <span>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
                  }
                  to="/dashboard/addProduct"
                >
                  Add A Product
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
                  }
                  to="/dashboard/manageProducts"
                >
                  Manage All Products
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
                  }
                  to="/dashboard/manageAllOrders"
                >
                  Manage All Orders
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "pl-2 border-l-2 border-primary font-semibold text-primary" : ""
                  }
                  to="/dashboard/makeAdmin"
                >
                  Make an Admin
                </NavLink>
              </span>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
