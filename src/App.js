
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div >
      
        <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />} ></Route>
          <Route path='/women' element={<Shopcategory category="women"/>} ></Route>
          <Route path='/men' element={<Shopcategory category="men"/>} ></Route>
        <Route path='product' element={<Product />} >
        <Route path=':productId'element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/login' element={<LoginSignup/>} ></Route>



        </Routes>


        </BrowserRouter>

    </div>
  );
}

export default App;
