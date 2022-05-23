import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/authentication/Login";
import SignUp from "./components/pages/authentication/SignUp";
import Home from "./components/pages/Home/Home";
import PurchaseProduct from "./components/pages/Home/Products/PurchaseProduct";
import RequiredAuth from "./components/pages/Required/RequiredAuth";
import Navbar from "./components/pages/shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import MyOrders from "./components/pages/Dashboard/MyOrders";
import AddReview from "./components/pages/Dashboard/AddReview";
import MyProfile from "./components/pages/Dashboard/MyProfile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/purchase-product/:id"
          element={
            <RequiredAuth>
              <PurchaseProduct />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="myProfile" element={<MyProfile />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
