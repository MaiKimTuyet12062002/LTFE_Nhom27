import React, {useState} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import {NavLink} from "react-router-dom";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setEmail(e.target.value);
    };
    const handleRegister = event => {
        event.preventDefault();
        setSubmitting(true);
    }
    return (<>
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <h2 className="fw-bold mb-2 text-center">Đăng ký</h2>
                            {submitting && (<div className="alert alert-success text-center">Đăng ký thành công!</div>)}
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon icon="user me-3" size='lg'/>
                                <MDBInput label='Họ và tên' id='form1' type='name' className='w-100'
                                          onChange={handleNameChange}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon icon="envelope me-3" size='lg'/>
                                <MDBInput label='Email ' id='form2' type='email' onChange={handleEmailChange}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon icon="lock me-3" size='lg'/>
                                <MDBInput label='Mật khẩu' id='form3' type='password' onChange={handlePasswordChange}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon icon="key me-3" size='lg'/>
                                <MDBInput label='Nhập lại mật khẩu của bạn' id='form4' type='password'
                                          onChange={handlePasswordChange}/>
                            </div>
                            <MDBBtn className='mb-4' size='lg' onClick={handleRegister}>Đăng kí</MDBBtn>
                            <div className="container signin" style={{textAlign: 'center'}}>
                                <p style={{color: 'black'}}>Bạn đã có tài khoản?<NavLink to="/login"> Đăng
                                    nhập</NavLink></p>
                            </div>
                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage
                                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                                fluid/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    </>)
}

export default Signup