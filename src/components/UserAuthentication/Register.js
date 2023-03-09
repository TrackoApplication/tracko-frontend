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
  MDBValidation,
  MDBValidationItem,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Register.css';
import logo from '../images/T.png';
import NavLink from 'react-bootstrap/esm/NavLink';
import SystemUserService from '../../Services/SystemUserService';

const Register = () => {

    const navigate = useNavigate();

    const [systemUser, setsystemUser] = React.useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        emailId: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
      const value = e.target.value;
        setsystemUser({
            ...systemUser,
            [e.target.name]: e.target.value
        });
    }

    const saveSystemUser = (e) => {
      e.preventDefault();
      SystemUserService.saveSystemUser(systemUser).then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

      navigate ('/login');

    }
    
  return (

    <MDBContainer fluid className='my-2'>

    <MDBRow className='g-0 align-items-center'>
      <MDBCol col='6 '>

        <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
          <MDBCardBody className='p-5 shadow-5 text-center'>

            <h2 className="fw-bold mb-4">Sign up now</h2>


            <MDBValidation>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBValidationItem >
                      <MDBInput wrapperClass='mb-3' 
                      label='First name'
                      name ='firstName'
                      id='validationCustom01'
                      value={systemUser.firstName} 
                      onChange={(e)=>handleChange(e)}
                      required
                      type='text'/>
                    </MDBValidationItem >
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-3 ' 
                    label='Last name' 
                    name='lastName' 
                    value={systemUser.lastName}
                    onChange={(e)=>handleChange(e)}
                    type='text'/>
                  </MDBCol>
                </MDBRow>

                  <MDBInput wrapperClass='mb-3' 
                  label='User Name' 
                  name='userName' 
                  value={systemUser.userName}
                  onChange={(e)=>handleChange(e)}
                  type='text'/>
                  
                  <MDBInput wrapperClass='mb-3' 
                  label='Password' 
                  id='form5' 
                  name='password' 
                  value={systemUser.password}
                  onChange={(e)=>handleChange(e)}
                  type='password'/>

                  <MDBInput wrapperClass='mb-3' 
                  label='Confirm Password' 
                  id='form6' 
                  name='confirmPassword' 
                  value={systemUser.confirmPassword}
                  onChange={(e)=>handleChange(e)}
                  type='confirmPassword'/>

                  <MDBInput wrapperClass='mb-3' 
                  label='Email' 
                  name='emailId'
                  value={systemUser.emailId}
                  onChange={(e)=>handleChange(e)}
                  type='email'/>  

                  <MDBBtn 
                  type="submit"
                  onClick={saveSystemUser}
                  className='w-100 mb-3  bg-[#FF8484] hover:bg-[#fe7676]' size='md'>
                    sign up
                  </MDBBtn>

                  </MDBValidation>


                  <div className="text-center">
                    <p
                    className="cursor-pointer "
                    onClick={() => navigate('/Login')}
                    >Already have an account</p>
                  </div>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='6'>
        <img src={logo} class="w-90 h-85 m-0 p-0 rounded-4 shadow-4 "
          alt="" fluid/>
      </MDBCol>

    </MDBRow>

  </MDBContainer>

  )
}

export default Register;