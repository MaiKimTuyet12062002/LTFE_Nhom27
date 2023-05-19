import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;