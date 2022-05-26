import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "./Loading";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
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
      <li>
        <NavLink to="/myPortfolio">My Portfolio</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/myProfile">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <>
          <button
            onClick={handleSignOut}
            className="btn btn-secondary text-gray-200 mt-2 lg:mt-0"
          >
          <span className="pr-1 text-pink-100">({user.displayName})</span>
            Sign Out
          </button>
        </>
      ) : (
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-slate-100 sticky top-0 z-50 px-4 lg:px-12">
      <label
        htmlFor="dashboard-sidebar"
        className="btn btn-ghost drawer-button mr-2 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="navbar-start w-20">
        <Link to="/" className="normal-case text-2xl">
          Parts<span className="text-secondary">Store</span>
        </Link>
      </div>
      <div className="navbar-env ml-auto">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-2">{navbarItems}</ul>
        </div>
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
