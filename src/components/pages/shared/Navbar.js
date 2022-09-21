import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "./Loading";
import { signOut } from "firebase/auth";
import { BiDownArrow } from "react-icons/bi";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const firstLetter = user?.displayName?.slice(0, 1);

  if (loading) {
    return (
      <p className="hidden">
        <Loading></Loading>
      </p>
    );
  }
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const navbarItems = (
    <>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary font-semibold"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary font-semibold"
              : ""
          }
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary font-semibold"
              : ""
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary font-semibold"
              : ""
          }
          to="/myPortfolio"
        >
          My Portfolio
        </NavLink>
      </span>
      {user && (
        <span>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary font-semibold"
                : ""
            }
            to="/dashboard/myProfile"
          >
            Dashboard
          </NavLink>
        </span>
      )}
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="cursor-pointer flex justify-center items-center gap-2"
            >
              <BiDownArrow />
              <div className="w-8 rounded-full ">
                <p className="w-full rounded-full border border-primary p-1 flex justify-center items-center bg-gray-200">
                  <span className="text-md font-semibold uppercase">{firstLetter}</span>
                </p>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-6 shadow bg-base-100 rounded w-52"
            >
              <span>
                <button
                  className="font-semibold rounded py-2 px-3 bg-primary text-white hover:bg-[#0166d9]"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </span>
            </ul>
          </div>
        </>
      ) : (
        <span>
          <NavLink className="font-semibold" to="/login">
            Log in
          </NavLink>
        </span>
      )}
    </>
  );
  return (
    <div className="navbar bg-slate-100 sticky top-0 z-50 px-4 lg:px-12 shadow-xl">
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
        <Link to="/" className="normal-case text-2xl font-semibold">
          Parts<span className="text-secondary">Store</span>
        </Link>
      </div>
      <div className="navbar-env ml-auto">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-8">{navbarItems}</ul>
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
