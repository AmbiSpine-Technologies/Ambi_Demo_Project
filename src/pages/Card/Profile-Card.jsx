import React, { useState } from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./profile.css";
import { IoMdWifi } from "react-icons/io";
import { NavLink } from "react-router-dom";
import CreatePost from '../../components/Create-Post/CreatePost';
import EventCard from '../../components/Event/EventCard';
import { BsFillCheckCircleFill } from "react-icons/bs";


const ProfileCard = () => {


  return (
    <div className='profile-container'>
      <div className='card m-3' style={{ height: '115vh' }}>
        <div className='card-headers'>
          <div className='background-imag'>
            <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" alt="" />
          </div>
          <div className="profile-headings d-flex p-2">
            <div className="logos">
              <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" width="70%" height="70%" alt="" />
            </div>
           
            <div className="titles">
            <NavLink to="/profile" className="text-decoration-none">
              <div className="justify-content-center align-items-center d-flex gap-3">
                <h4 className='fs-6 text-secondary'>Aditya Srivastava</h4>
                <BsFillCheckCircleFill className="text-primary fs-6" />

              </div>
              </NavLink>  
              <div className='badge text-bg-light'>
                <span className='text-muted' style={{ fontSize: '0.6rem' }}> @aditysrivastav</span>
              </div>
            </div>
            
          </div>
        </div>
        <div className='card-body'>
          <div className='d-flex position-relative justify-content-center align-items-center w-100'>
            <button className="btn btn-primary btn-sm p-1 w-75 rounded rounded-1 mt-1 mb-1" data-bs-toggle="modal"  data-bs-target="#SwitcheUser" >
              Switch
            </button>
          </div>
          <div className="modal fade" id="SwitcheUser" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" style={{marginLeft: "200px"}}>
          <SwitchUser />
          </div>
    
          <div className='mt-2'>
            <p className='text-muted' style={{ fontSize: '0.8rem', marginBottom: '-1px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus perferendis neque, 
           vitae laudantium temporibus beatae eos quia in natus animi est iusto?</p>
            <div className='badge text-bg-light my-1'>
              <span className='text-muted' style={{ fontSize: '0.6rem' }}>Enterpernure</span>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div><IoMdWifi className='icons me-1 text-primary' />
              <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'gray' }}>Creator Mode</span></div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
            </div>
          </div>

          <div className='mt-4 profileSidebar' style={{}}>
       <nav className=''>
                <ul className=''>
                    <li>
                        <NavLink to="/" activeClassName="active-link">
                            <span className="bi bi-house-door-fill b-icon"></span>Home
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/explore" activeClassName="active-link">
                            <span className="bi bi-search b-icon"></span>Explore
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message" activeClassName="active-link">
                            <span className="bi bi-chat-dots b-icon"></span>Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/spread" activeClassName="active-link">
                            <span className="bi bi-person-video2 b-icon"></span>Spread Shorts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/spread-live" activeClassName="active-link">
                            <span className="bi bi-person-video2 b-icon"></span>Spread Live
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#"data-bs-toggle="modal" data-bs-target="#createEvent"  activeClassName="active-link">
                            <span className="bi bi-calendar2-event b-icon"></span>Event
                        </NavLink>
                    </li>
                   
                </ul>
                <div className='justify-content-center align-items-center d-flex'>
                <div className="dropdown">
                  <button className="btn btn-primary rounded-2" type="button"  data-bs-toggle="modal" data-bs-target="#createModal">
                  Create Post <i className="bi bi-plus"></i>
                </button>
                </div>
                </div>
            </nav>
            {/* ---model---- */}
            <div className="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <CreatePost />
            </div>
            <div className="modal fade" id="createEvent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <EventCard />
            </div>

       </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProfileCard;

function SwitchUser() {
  return (
    
      <div className="modal-dialog modal-dialog-centered text-center ">
    <div className='bg-white rounded-2 ms-5 p-1 py-4'  style={{width: "300px"}}>
      <div className="justify-content-center align-items-center d-flex gap-2 rounded-2 py-2 px-1">
      <img src='https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg' 
      className='img-fluid border rounded-circle' width="50" height="50" />
                <h5 className='fs-6 text-secondary'>Aditya Srivastava</h5>
                <BsFillCheckCircleFill className="circle-icons text-primary fs-5" />
      </div>
      <div className="justify-content-center align-items-center d-flex gap-1 mt-3">
                <IoIosAddCircleOutline className=" fw-light text-black fs-1" />
                <h6 className='fs-6 fw-medium text-black'>Add Another Account</h6>

      </div>
      </div>
      </div>
  
  );
}