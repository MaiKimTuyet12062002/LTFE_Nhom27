import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/ProductDetail';
import About from './component/About';
import Contact from "./component/Contact";
import Login from "./component/buttons/Login";
import Signup from './component/buttons/Signup';
import CartBtn from "./component/buttons/CartBtn";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/products/:id" element={<Product/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                {/*<Route exact path="/cart" element={<CartBtn/>}/>*/}
            </Routes>
        </Router>
    );
}

export default App;