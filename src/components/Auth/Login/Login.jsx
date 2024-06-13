import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function LoginComponent() {
  return (
      <div className="loginConainer">
        <div className="login-content d-flex justify-content-between p-4 ">
          <div className=' d-flex flex-column align-items-center mt-4 w-50'>
            <img src="logo_1.JPG" alt="Logo" height="80" width="80" />
            <h1><strong>Spreads</strong></h1>
            <div className='w-100 mt-3 text-center   d-flex flex-column align-items-center'>
              <p className='fw-3 fw-bold text-primary w-50'>
                #Unlock Your Moment! Feel the beat of opportunities,
                create connections, and build your career.
              </p>
            </div>
          </div>

         <div>
         <div className='login-form-container text-center p-3'>
            <h3 className='fw-semibold mt-3 mb-3' style={{ fontFamily: "'Petit Formal Script', cursive" }}>
                Welcome Back
                </h3>
            <form>
              <div className='mb-3 mt-3'>
                <label htmlFor="email" className='form-label'>Enter Email or User ID</label>
                <input type="text" id="email" placeholder='Enter Email or User ID' className='form-control' />
              </div>
              <div className='mb-3 mt-3'>
                <label htmlFor="password" className='form-label'>Enter Password</label>
                <input type="password" id="password" placeholder='Enter Password' className='form-control' />
              </div>
              <div className=' mt-3 d-flex align-items-center'>
                <input type="checkbox" id="rememberMe" className='me-2' />
                <label htmlFor="rememberMe" className='form-label mb-0'>Remember me</label>
              </div>
              <div>
                <Link to="#" className='text-decoration-none fw-semibold'>Forgot password?</Link>
              </div>
              <div className='mt-3'>
                <button type="submit" className='btn btn-primary btn-sm w-100 fw-semibold'>Login</button>
              </div>
            </form>
            <div className='d-flex justify-content-center align-items-center mt-4'>
              <div className='line-bar'></div>
              <span className='me-1 ms-1 text-muted'>OR</span>
              <div className='line-bar'></div>
            </div>
            <div>
            <a href="www.google.com" className='d-flex justify-content-center align-items-center mt-3'>
              <img src="gi.png" alt="Google Icon" width="20" height="20" className='me-2' />
              {/* <span>Login with Google</span> */}
            </a>
            </div>
          </div>
          <div className='mt-4'>
                <Link to="register" className='btn btn-primary btn-sm w-100 fw-semibold'>
                    Don't have an account ? Join Us
                </Link>
            </div>
         </div>
        </div>
      </div>
  );
}

export default LoginComponent;
