import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            <img
                src="/assets/Logo/logo.png"
                height="50px"
            />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sản phẩm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Về chúng tôi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                <a href="" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>Đăng nhập
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i> Đăng ký
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-cart-plus me-1"></i>Giỏ hàng (0)
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}