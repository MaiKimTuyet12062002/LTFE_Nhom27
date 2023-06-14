import React from "react";
import "./css/Footer.css"
import {Link, NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <div style={{background: "white"}}>
            <footer id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <NavLink to="/">
                                <img
                                    style={{borderRadius: 50}}
                                    className="logo1"
                                    alt="logo"
                                    src="/assets/Logo/logo.png"
                                    height="80px"
                                /></NavLink>
                            <div class="footer-about">
                                <p style={{color: "black"}}>Cửa hàng văn phòng phẩm của chúng tôi là một địa chỉ tin
                                    cậy.
                                </p>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="useful-link">
                                <h2>Useful Links</h2>
                                <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
                                <div class="use-links">
                                    <li><Link to="/"><i class="fa-solid fa-angles-right"></i> Trang chủ</Link></li>
                                    <li><Link to="/products"><i className="fa-solid fa-angles-right"></i> Sản
                                        Phẩm</Link></li>
                                    <li><Link to="/about"><i className="fa-solid fa-angles-right"></i> Về chúng
                                        tôi</Link></li>
                                    <li><Link to="/contact"><i className="fa-solid fa-angles-right"></i> Liên hệ</Link>
                                    </li>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="social-links">
                                <h2>Theo dõi chúng tôi</h2>
                                <img src="" alt=""/>
                                <div class="social-icons">
                                    <li><a href=""><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                    <li><a href=""><i className=" fa-user-plus"></i> Instagram</a></li>
                                    <li><a href=""><i className="fa-brands fa-linkedin"></i> Linkedin</a></li>
                                </div>
                            </div>


                        </div>
                        <div class="col-md-3">
                            <div class="address">
                                <h2>Địa chỉ</h2>
                                <img src="" alt="" class="img-fluid"/>
                                <div class="address-links">
                                    <li><a href=""><i class="fa-solid fa-phone"></i> +91 90904500112</a></li>
                                    <li><a href=""><i class="fa-solid fa-envelope"></i>TuyetThi@1234567.com</a></li>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>

            <section id="copy-right">
                <div class="copy-right-sec">
                    Cửa hàng văn phòng phẩm
                </div>
            </section>

        </div>
    )
}