import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import './Login.css';
  import logo from '../images/T.png';
import NavLink from 'react-bootstrap/esm/NavLink';

const Login = () => {

    const navigate = useNavigate();

    const successLogin = () => {
        navigate('/userlist');
    }

    
  return (
    <div className='mx-auto my-auto'>

    <MDBContainer fluid className='m first-letter:first-line: m-2 '>

    <MDBRow className='g-0 align-items-center'>
      
    <MDBCol col='6'>
        <img src={logo} class="w-90 rounded-4 shadow-4 "
          alt="" fluid/>
    </MDBCol>

    <MDBCol col='6 '>

        <MDBCard className='my-5 cascading-left' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
          <MDBCardBody className='p-5 shadow-5 text-center'>

            <h2 className="fw-bold mb-4">Sign in </h2>

            <MDBInput wrapperClass='mb-3' label='Email' id='form3' type='email' required/>
            <MDBInput wrapperClass='mb-3' label='Password' id='form4' type='password'/>


            <MDBBtn 
            onClick={() => navigate('/userlist')}
            className='w-100 mb-3 bg-[#FF8484] hover:bg-[#fa7676] cursor-pointer' size='md'>
              sign in
            </MDBBtn>

            <div className="text-center">

              <p onClick={() => navigate('/Register')}
              className="cursor-pointer my-2" >
              Create a new Account</p>               

                <p
                className="cursor-pointer my-2" 
                onClick={() => navigate('/ResetPass')}>Forgot Password?</p>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>

  </MDBContainer>
  </div>

  )
}

export default Login