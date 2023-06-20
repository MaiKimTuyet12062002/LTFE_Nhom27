import React from "react";
import "./css/home.css"

import 'mdbootstrap/js/bootstrap';
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">

            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/slider/banner-03.jpg"
                             class="d-block w-100" alt="Wild Landscape"/>
                        <div class="mask" style={{background: "rgba(0, 0, 0, 0.4)"}}></div>

                    </div>
                    <div class="carousel-item">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg"
                             class="d-block w-100" alt="Camera"/>
                        <div class="mask" style={{background: "rgba(0, 0, 0, 0.4)"}}></div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg"
                             class="d-block w-100" alt="Exotic Fruits"/>
                        <div class="mask" style={{background: "rgba(0, 0, 0, 0.4)"}}></div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Trước</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Sau</span>
                </button>
            </div>
            <Products/>
        </div>);
};

export default Home;
