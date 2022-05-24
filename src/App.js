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
import Payment from "./components/pages/Dashboard/Payment";
import AddProduct from "./components/pages/Dashboard/AdminRoute/AddProduct"
import ManageProducts from "./components/pages/Dashboard/AdminRoute/ManageProducts";
import ManageAllOrders from "./components/pages/Dashboard/AdminRoute/ManageAllOrders";
import MakeAdmin from "./components/pages/Dashboard/AdminRoute/MakeAdmin";

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
          <Route path="myProfile" element={<MyProfile />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="payment/:orderId" element={<Payment/>}></Route>
          <Route path="addReview" element={<AddReview />}></Route>

          <Route path="addProduct" element={<AddProduct/>}></Route>
          <Route path="manageProducts" element={<ManageProducts/>}></Route>
          <Route path="manageAllOrders" element={<ManageAllOrders/>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin/>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
