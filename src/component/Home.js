import React from "react";
import Products from "./Products";
import "./css/home.css"

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img
                    src="/assets/slider/banner-01.jpg"
                    className="card-img-1"
                    alt="Background"
                    height="550px"
                />
                <img
                    src="/assets/slider/banner-02.jpg"
                    className="card-img-2"
                    alt="Background"
                    height="550px"
                />
                <img
                    src="/assets/slider/banner-03.jpg"
                    className="card-img-3"
                    alt="Background"
                    height="550px"
                />
                <img
                    src="/assets/slider/banner-04.jpg"
                    className="card-img-4"
                    alt="Background"
                    height="550px"
                />
                <img
                    src="/assets/slider/banner-05.jpg"
                    className="card-img-5"
                    alt="Background"
                    height="550px"
                />
            </div>
            <Products/>
        </div>
    );
};

export default Home;
