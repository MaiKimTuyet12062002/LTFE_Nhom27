import React, {Component, useState} from 'react';
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox
} from 'mdb-react-ui-kit';
import {NavLink} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleLogin = () => {
        // Kiểm tra dữ liệu đăng nhập tại đây (ví dụ: gửi yêu cầu đăng nhập đến máy chủ hoặc kiểm tra trong cơ sở dữ liệu)
        // Ở đây, mình sẽ giả định rằng email và password đúng để kiểm tra thành công đăng nhập
        if (email === 'maithi@gmail.com' && password === '123') {
            setLoginSuccess(true);
            setLoginError(false);
        } else {
            setLoginSuccess(false);
            setLoginError(true);
        }
    };

    return (<>
        <MDBContainer fluid className="p-3 my-5">
            <MDBRow>
                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                         class="img-fluid" alt="Phone image"/>
                </MDBCol>
                <MDBCol col='4' md='6'>
                    <h2 className="fw-bold mb-2 text-center">Đăng nhập</h2>
                    {loginSuccess && (<div className="alert alert-success text-center">Đăng nhập thành công!</div>)}
                    {loginError && (
                        <div className="alert alert-danger text-center">Đăng nhập thất bại! Vui lòng kiểm tra lại
                            thông tin đăng nhập.</div>)}
                    <MDBInput wrapperClass='mb-4' label='Nhập Email' id='formControlLg' type='email' size="lg"
                              onChange={handleEmailChange}/>
                    <MDBInput wrapperClass='mb-4' label='Mật khẩu' id='formControlLg' type='password' size="lg"
                              onChange={handlePasswordChange}/>
                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nhớ mật khẩu'
                                     onChange={handleRememberMeChange}/>
                        <NavLink className="nav-link" to="/forgotpass">
                            Quên mật khẩu?
                        </NavLink>
                    </div>
                    <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>Đăng nhập</MDBBtn>
                    <div className="container signin" style={{textAlign: 'center'}}>
                        <p style={{color: 'black'}}>Bạn chưa có tài khoản?<NavLink to="/register"> Đăng ký</NavLink></p>
                    </div>
                    <div className=" align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">hoặc</p>
                    </div>
                    <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                        <MDBIcon className="mx-2"/>
                        Đăng nhập với google
                    </MDBBtn>
                    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                        <MDBIcon className="mx-2"/>
                        Đăng nhập với facebook
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>)
}

export default Login;