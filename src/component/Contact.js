import React from "react";

function Contact() {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 style={{color: "black"}}>Bạn cần hỗ trợ vấn đề gì?</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/contact.png" alt="Contact Us" height="300px" width="300px"/>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Họ và tên: </label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Nhập họ và tên"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email: </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                       placeholder="ten@gmail.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Nội dung phản hồi: </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Gửi</button>
                        </form>
                    </div>
                </div>
            </div>

            <div id="map" style={{width: "800px", height: "450px", margin: "185px"}}><h3>Bạn có thể liên hệ chungs tôi qua địa chỉ sau:</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.214594666049!2d106.7895730147193!3d10.87127639225723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRwLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1667629178457!5m2!1svi!2s"
                    width="1150" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact;