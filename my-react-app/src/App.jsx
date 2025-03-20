import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Woman from "./pages/Woman";
import Kids from "./pages/Kids";
import ProductDetails from './pages/ProductDetails'
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function Layout() {
  return (
    <>
    {/* <Navbar /> */}
    <Routes> 
    <Route path="/login" element={<Login/>} />
    {/* <Route path="/register" element={<Register/>} /> */}
      <Route path="/" element={<Home />} />
       <Route path="/men" element={<Men />} /> 
       <Route path="/woman" element={<Woman/>} />
       <Route path="/kids" element={<Kids/>}/>
       <Route path="/productdetails" element={<ProductDetails/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
