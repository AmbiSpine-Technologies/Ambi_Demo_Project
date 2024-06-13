import React, { useState } from 'react';
import Banner from '../Register/Banner';
import { BsPersonFillCheck } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { BsSuitcaseLgFill } from "react-icons/bs";
import {NavLink} from "react-router-dom"


const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log('Form data submitted:', formData);
      // Reset form data
      setFormData({
        email: '',
        password: '',
        termsAccepted: false,
      });
      setErrors({});
    }
  };

  return (
    <section className='mt-4'>
      <div className='d-flex justify-content-center align-items-center flex-column' id='banner-container'>
        <Banner />
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <h5 className="text-center mt-3 mb-4" style={{ fontFamily: "'Petit Formal Script', cursive" }}>
              <strong>See trends and start your journey</strong>
            </h5>
          
            <div className='mt-3'>
              <input
                type="email"
                name="email"
                placeholder='Enter your email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className='mt-4'>
              <input
                type="password"
                name="password"
                placeholder='Enter your password'
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="form-check mt-2">
              <input
                type="checkbox"
                name="termsAccepted"
                id="Checkbox"
                className={`form-check-input ${errors.termsAccepted ? 'is-invalid' : ''}`}
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="Checkbox" className="form-check-label text-black text-left">
               Remeber Me
              </label>
              {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
            </div>
            <div className='mt-2'>
                <a href="/fpassword" type='buttom' data-bs-toggle="modal" data-bs-target="#forgotPwd">Forgot Password</a>
            </div>
            <div className='mt-3 d-flex justify-content-center align-items-center'>
              <button type="submit" className="SignUp btn btn-primary btn-sm w-50">
                Sign In
              </button>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-4'>
              <div className='line-bar'></div>
              <span className='me-1 ms-1 text-muted'>OR</span>
              <div className='line-bar'></div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <a href="www.google.com">
              <img src="gi.png" alt="" width="20" height="20" />
            </a>
            </div>
           
          </form>
          <div className='d-flex justify-content-center align-items-center'>
            <NavLink to="/register">Don't  have an account ? Register Here</NavLink>
          </div>
        </div>
      </div>
      <div className='content-container d-flex justify-content-center align-items-center flex-column p-4 mt-4 bg-white'>
      <div className='w-75'>
          <div className='d-flex justify-content-around gap-3 align-items-center'>
            <div className='w-25'>
              <div>
                <BsPersonFillCheck className='text-primary fs-3 m-1'/>
              </div>
              <div>
                <p>
                Spreads has exciting features to connect with each other and share videos, music, audios, and more.
                </p>
              </div>
            </div>
            <div className='w-25'>
              <div>
                <FiTrendingUp className='text-primary fs-3 m-1'/>
              </div>
              <div>
                <p>
                Explore trending charts, videos, audios, and reels.
                </p>
              </div>
            </div>
            <div className='w-25'>
              <div>
                <TbBulb className='text-primary fs-3 m-1'/>
              </div>
              <div>
                <p>
                Explore thousands of learning programs, increase your knowledge, 
                your potential with certification, and improve your skills.
                </p>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around gap-3 p-4 align-items-center'>
            <div className='w-25'>
              <div>
                <BsSuitcaseLgFill className='text-primary fs-3 m-1'/>
              </div>
              <div>
                <p>
                Set your job alert on Spreads and grab your job opportunities.
                </p>
              </div>
            </div>
            <div className='w-25'>
              <div>
                <BsBuildings className='text-primary fs-3 m-1'/>
              </div>
              <div>
                <p>Create a marketplace, stay updated with your product, and promote your brand.
                </p>
              </div>
            </div>
            <div className='w-25'>
              <div className='text-primary fs-3 fw-bold m-1'>
                <h3>BS</h3>
              </div>
              <div>
                <p>
                Use Spreads Business Solutions to solve your business problems, hire with us, and find your best solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   

{/* <!-- Modal --> */}
<div class="modal fade" id="forgotPwd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h1 class="modal-title fs-6 text-center" id="staticBackdropLabel">Forgot Password</h1>
        <button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form action="">
       <div className='mt-4'>
              <input
                type="email"
                name="email"
                placeholder='Enter your email'
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
       </form>
      </div>
      <div class="modal-footer border-0">
        <a type="button" href='login' class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Back</a>
        <button type="button" class="btn btn-primary btn-sm">Send</button>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default UserLogin;
