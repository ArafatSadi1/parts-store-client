import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/authentication/Login';
import SignUp from './components/pages/authentication/SignUp';
import Home from './components/pages/Home/Home';
import PurchaseProduct from './components/pages/Home/Products/PurchaseProduct';
import RequiredAuth from './components/pages/Required/RequiredAuth';
import Navbar from './components/pages/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/purchase-product' element={<RequiredAuth><PurchaseProduct/></RequiredAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
