import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import "./css/home.css"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        <img
                            style={{borderRadius: 50}}
                            className="logo1"
                            alt="logo"
                            src="/assets/Logo/logo.png"
                            height="40px"
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Sản phẩm
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    Về chúng tôi
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button className="btn">
                                <NavLink to="/login" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user-plus me-1"></i> Đăng nhập
                                </NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user-plus me-1"></i> Đăng ký
                                </NavLink>
                                {/*<NavLink to="/cart" className="btn btn-outline-dark ms-2">*/}
                                {/*  <i className="fa fa-cart-plus me-1"></i>Giỏ hàng (0)*/}
                                {/*</NavLink>*/}
                            </button>
                        </div>
                        <CartBtn/>
                    </div>
                </div>
            </nav>
        </div>

    );
}
