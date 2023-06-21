import React from "react";
import "./css/home.css"

import 'mdbootstrap/js/bootstrap';
import Products from "./Products";
import ListSlider from "./ListSlider";

const Home = () => {
    return (
        <div className="hero">
            <ListSlider/>
            <Products/>
        </div>);
};

export default Home;
