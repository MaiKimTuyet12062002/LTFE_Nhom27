
import React from 'react'
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

const Signup = () => {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng kí</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon icon="user me-3" size='lg' />
                <MDBInput label='Họ và tên' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon icon="envelope me-3" size='lg'/>
                <MDBInput label='Email ' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
        
                <MDBIcon icon="lock me-3" size='lg' />
                <MDBInput label='Mật khẩu' id='form3' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon icon="key me-3" size='lg'/>
                <MDBInput label='Nhập lại mật khẩu của bạn' id='form4' type='password'/>
              </div>

              <MDBBtn className='mb-4' size='lg'>Đăng kí</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}

export default Signup