import React from "react";
import "./css/home.css"

export default function Footer() {
    return (
        <div className="container my-5">
            <footer className="text-center text-lg-start text-white footer">
                <div className="container p-4 pb-0">
                    <section className="content">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Office Supplies</h6>
                                <p >
                                    Cửa hàng văn phòng phẩm của chúng tôi là một địa chỉ tin cậy cho những ai cần
                                    mua sắm đồ dùng văn phòng, học tập và làm việc.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none"/>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h6>
                                <p class="contact">ĐH Nông Lâm TP.HCM</p>
                                <p class="contact">tuyetthi@gmail.com</p>
                                <p class="contact">0763154879</p>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    )
}