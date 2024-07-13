import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { BsPersonFillCheck } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { BsSuitcaseLgFill } from "react-icons/bs";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../../actions/userActions';

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user,loading } = useSelector((state) => state.user); 
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '',
    mobile: '',
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
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
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
      console.log('Form data before dispatch:', formData); 
      dispatch(register(formData));
       //Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        termsAccepted: false,
      });
      setErrors({});
    }
  };
  useEffect(() => {
    if (user) {
      navigate('/');
    }
    if (error) {
      setErrors((prevErrors) => ({ ...prevErrors, general: error }));
      dispatch(clearErrors());
    }
  }, [user, error, dispatch, navigate]);



  return (
    <section className='mt-4'>
      <div className='d-flex justify-content-center align-items-center flex-column' id='banner-container'>
        <Banner />
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <h5 className="text-center mt-3" style={{ fontFamily: "'Petit Formal Script', cursive" }}>
              <strong>See trends and start your journey</strong>
            </h5>
            <div className='mt-3'>
              <input
                type="text"
                name="firstName"
                placeholder='Enter your first name'
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className='mt-3'>
              <input
                type="text"
                name="lastName"
                placeholder='Enter your last name'
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
            <div className='mt-3'>
              <input
                type="text"
                name="mobile"
                placeholder='Enter your mobile no.'
                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>
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
            <div className='mt-3'>
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
              <label htmlFor="Checkbox" className="form-check-label text-muted text-small">
                People are sharing photos, videos, audio, and stories using Spreads. Read and{' '}
                <NavLink to='#'>Apply T&C Privacy and Policy</NavLink>.
              </label>
              {errors.termsAccepted && <div className="invalid-feedback">{errors.termsAccepted}</div>}
            </div>
            <div className='mt-3 d-flex justify-content-center align-items-center'>
              <button type="submit" className="SignUp btn btn-primary btn-sm w-50">
              {loading ? 'Loading...' : 'Register'}
              </button>
              
            </div>
            {errors.general && <div className="alert alert-danger mt-2">{errors.general}</div>}
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
          <div className='d-flex justify-content-center align-items-center '>
            <NavLink to="/">Already have an account? Sign In</NavLink>
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
                <p>
                  Create a marketplace, stay updated with your product, and promote your brand.
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
    </section>
  );
};

export default UserRegister;
