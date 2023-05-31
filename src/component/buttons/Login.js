import React, {Component} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Login() {
    return (
        <>
            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                             class="img-fluid" alt="Phone image"/>
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        <h2 className="fw-bold mb-2 text-center">Đăng nhập</h2>
                        <MDBInput wrapperClass='mb-4' label='Nhập Email' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4' label='Mật khẩu' id='formControlLg' type='password' size="lg"/>


                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nhớ mật khẩu'/>
                            <a href="!#">Quên mật khẩu?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg">Đăng nhập</MDBBtn>

                        <div className="divider d-flex align-items-center my-4">
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
        </>
    )
}

export default Login;