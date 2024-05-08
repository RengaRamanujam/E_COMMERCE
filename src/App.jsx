import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from './components/Register'
import RazorpayForm from "./components/payment/RazorpayForm";
import Login from "./components/Login";
import ProductDescription from "./components/ProductDescription";
import ShopCart from "./components/ShopCart";
import Payment from "./components/payment/Payment";
import Sucess from './components/payment/Sucess'
import Failed from "./components/payment/Failed";
function App() {
  return (
    <>
      <div >
          <Header/>
          <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/product/:id' element={<ProductDescription/>}/>
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<ShopCart/>} />
            <Route path='/payment' element={<Payment/>}/>
            <Route path="/sucess" element={<Sucess/>}/>
            <Route path="/failure" element={<Failed/>}/>
            <Route path={'/payment/sucess'} element={ <Sucess/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
