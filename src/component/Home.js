import React from "react";
import Products from "./Products";
import "./css/home.css"
import PaginationPage from "./PaginationPage";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img
                    src="/assets/slider/banner-01.jpg"
                    className="card-img"
                    alt="Background"
                    height="550px"
                />
            </div>
            <Products/>
            <PaginationPage/>
        </div>
    );
};

export default Home;
