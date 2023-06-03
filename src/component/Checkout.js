import React from 'react'
import {useSelector} from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Giỏ hàng của bạn</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng giá (VND)</span>
                                <strong>{total}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Thông tin đặt hàng</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username"
                                               placeholder="Nhập địa chỉ email"
                                               required=""/>
                                        <div className="invalid-feedback">
                                            Tên người dùng là bắt buộc.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Họ và tên<span
                                        className="text-muted"></span></label>
                                    <input type="username" className="form-control" id="username"
                                           placeholder="Họ và tên"/>
                                    <div className="invalid-feedback">
                                        Vui lòng nhập Họ và tên.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Địa chỉ</label>
                                    <input type="text" className="form-control" id="address" required=""/>
                                    <div className="invalid-feedback">
                                        Vui lòng nhập địa chỉ.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="number" className="form-label">Số điện thoại<span
                                        className="text-muted"></span></label>
                                    <input type="number" className="form-control" id="number"/>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Quốc gia</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Chọn...</option>
                                        <option>Việt Nam</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Vui lòng chọn một quốc gia hợp lệ.
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Tỉnh/TP</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Chọn...</option>
                                        <option>Hồ Chí Minh</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Vui lòng chọn một Tỉnh/TP hợp lệ.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Xã/Phường</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Chọn...</option>
                                        <option>Thủ Đức</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Vui lòng chọn một Xã/Phường hợp lệ.
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address"/>
                                <label className="form-check-label" htmlFor="same-address">Địa chỉ giao hàng mặc định</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info"/>
                                <label className="form-check-label" htmlFor="save-info">Lưu thông tin</label>
                            </div>
                            <hr className="my-4"/>
                            <h4 className="mb-3">Phương thức thanh toán</h4>
                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input"
                                           checked="" required=""/>
                                    <label className="form-check-label" htmlFor="credit">Chuyển khoản</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input"
                                           required=""/>
                                    <label className="form-check-label" htmlFor="debit">Thanh toán khi nhận hàng</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input"
                                           required=""/>
                                    <label className="form-check-label" htmlFor="paypal">Credit Card</label>
                                </div>
                            </div>
                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Tên chủ thẻ</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder=""
                                           required=""/>
                                    <small className="text-muted">Tên đầy đủ như hiển thị trên thẻ</small>
                                    <div className="invalid-feedback">
                                        Tên trên thẻ là bắt buộc
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Số thẻ</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder=""
                                           required=""/>
                                    <div className="invalid-feedback">
                                        Số thẻ là bắt buộc
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Ngày hến hạn</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder=""
                                           required=""/>
                                    <div className="invalid-feedback">
                                        Yêu cầu ngày hết hạn
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <button className="w-100 btn btn-primary btn-lg" type="submit">Tiếp tục thanh toán</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout