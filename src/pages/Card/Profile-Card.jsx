import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import "./profile.css"
import { IoMdWifi } from "react-icons/io";
import {NavLink} from "react-router-dom"

const ProfileCard = () => {
  return (
    <div className='profile-container'>
      <div className='card m-3' style={{height:'115vh'}}>
        <div className='card-headers'>
        <div className='background-imag'>
        <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" alt=""/>
        </div>
        <div className="profile-headings d-flex p-2">
         <div  className="logos">
            <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
            width="70%" height="70%" alt=""/>
          </div>
         <div className="titles">
         <div className="justify-content-center align-items-center d-flex gap-3">
            <h4 className='fs-6 text-scondary'>Aditya Srivastava</h4>
            <VscVerifiedFilled className="circle-icons text-primary fs-6"/>
          </div>
          <div className='badge text-bg-light'>
           <span className='text-muted'style={{fontSize:'0.6rem'}}> @aditysrivastav</span>
          </div>
         </div>
         </div>
        </div>
        <div className='card-body'>
        <div className='d-flex  justify-content-center align-items-center w-100'>
        <button className="btn btn-primary btn-sm p-1 w-75 rounded rounded-1 mt-1 mb-1"
          style={{height:"25px"}}>
            Switch
          </button>
        </div>
          <div>
          <p className='text-muted' style={{fontSize:'0.8rem',marginBottom:'-1px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus perferendis neque, 
           vitae laudantium temporibus beatae eos quia in natus animi est iusto?</p>
           <div className='badge text-bg-light'>
           <span className='text-muted' style={{fontSize:'0.6rem'}}>Enterpernure</span>
          </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div><IoMdWifi className='icons me-1 text-primary' />
            <span style={{fontSize:'0.9rem',fontWeight:'400',color:'gray'}}>Creator Mode</span></div>
            <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
          </div>
        </div>
        
        <div className='mt-4 profileSidebar' style={{}}>
       <nav className=''>
                <ul className=''>
                    <li>
                        <NavLink to="/home" activeClassName="active-link">
                            <span className="bi bi-house-door-fill me-2 fs-6"></span>Home
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/explore" activeClassName="active-link">
                            <span className="bi bi-search me-2 fs-6"></span>Explore
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message" activeClassName="active-link">
                            <span className="bi bi-chat-dots me-2 fs-6"></span>Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/spread" activeClassName="active-link">
                            <span className="bi bi-person-video2 me-2 fs-6"></span>Spread Shorts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#" activeClassName="active-link">
                            <span className="bi bi-person-video2 me-2 fs-6"></span>Spread Live
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#" activeClassName="active-link">
                            <span className="bi bi-calendar2-event me-2 fs-6"></span>Event
                        </NavLink>
                    </li>
                   
                </ul>
                <div className='justify-content-center align-items-center d-flex'>
                <div className="dropdown">
                  <button class="btn btn-primary rounded-0" type="button"  data-bs-toggle="modal" data-bs-target="#createModal">
                  Create Post <i class="bi bi-plus"></i>
                </button>
                  
                </div>
                </div>
            </nav>
            <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h1 class="modal-title   fs-5 text-center w-100" id="exampleModalLabel">Create</h1>
        <button type="button" class="btn-close btn-close-custom" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3 d-flex">
            <div class="logos mt-1">
              <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
              style={{width:"60px",height:"60px"}} alt=""/>
            </div>
           <div className='ms-4'>
           <textarea class="form-control rounded-0" cols="40" rows="10" id="message-text"
            placeholder="Spreads with us . Try with Ai"></textarea>
           <div class="icon-container">
            <i class="bi bi-folder-fill" title="Add File"></i>
            <i class="bi bi-emoji-smile" title="Add Emoji"></i>
            <i class="bi bi-person-fill" title="Tag Person"></i>
            <i class="bi bi-file-earmark-image" title="Add GIF"></i>
            <i class="bi bi-bar-chart" title="Create Poll"></i>
            <i class="bi bi-chat-text" title="Add Text"></i>
          </div>
           </div>
          </div>
          <div class="mb-3 text-center">
            <button type="button" class="btn btn-primary rounded-0 w-25">Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


       </div>
        </div>
       
    </div>
    </div>
  )
}

export default ProfileCard