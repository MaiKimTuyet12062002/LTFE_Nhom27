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

                                <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/>
                                <div class="use-links" style={{textDecoration: "none"}}>
                                    <li><Link to="/"> Trang chủ</Link></li>
                                    <li><Link to="/products">Sản Phẩm</Link></li>
                                    <li><Link to="/about"> Về chúng tôi</Link></li>
                                    <li><Link to="/contact"> Liên hệ</Link>
                                    </li>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="social-links">
                                <h2>Theo dõi chúng tôi</h2>
                                <img src="" alt=""/>
                                <div class="social-icons" style={{textDecoration: "none"}}>
                                    <li><a href=""> Facebook</a></li>
                                    <li><a href=""> Instagram</a></li>
                                    <li><a href=""> Linkedin</a></li>
                                </div>
                            </div>


                        </div>
                        <div class="col-md-3">
                            <div class="address">
                                <h2>Địa chỉ</h2>
                                <img src="" alt="" class="img-fluid"/>
                                <div class="address-links" style={{textDecoration: "none"}}>
                                    <li><a href=""> Sđt: 90904500112</a></li>
                                    <li><a href="">Email: TuyetThi@1234567.com</a></li>
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