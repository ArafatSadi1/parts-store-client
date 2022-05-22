import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import PurchaseProduct from './components/pages/Home/Products/PurchaseProduct';
import Navbar from './components/pages/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/purchase-product' element={<PurchaseProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
