import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "./Loading";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const navbarItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/myProfile">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <button
          onClick={handleSignOut}
          className="btn btn-secondary text-gray-200"
        >
          Sign Out
        </button>
      ) : (
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div class="navbar bg-slate-100 sticky top-0 z-50 px-4 lg:px-12">
        <label
          for="dashboard-sidebar"
          class="btn btn-ghost drawer-button mr-2 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      <div class="navbar-start">
        <Link to="/" class="normal-case text-2xl">
          Parts<span className="text-secondary">Store</span>
        </Link>
      </div>
      <div className="navbar-env ml-auto">
        <div class="hidden lg:flex">
          <ul class="menu menu-horizontal p-0 gap-2">{navbarItems}</ul>
        </div>
        <div class="dropdown dropdown-left">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
