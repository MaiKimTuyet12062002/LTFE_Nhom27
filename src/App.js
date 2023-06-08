import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import About from './component/About';
import Contact from "./component/Contact";
import Login from "./component/buttons/Login";
import Signup from './component/buttons/Signup';
import Checkout from "./component/Checkout";
import Cart from "./component/Cart";
import ProductDetail from "./component/ProductDetail";
import React from "react";
import ForgotPass from "./component/buttons/ForgotPass";


function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/products/:id" element={<ProductDetail/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path="/checkout" element={<Checkout/>}/>
                <Route exact path="/forgotpass" element={<ForgotPass/>}/>
            </Routes>
        </Router>
    );
}

export default App;