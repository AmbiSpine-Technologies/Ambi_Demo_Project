import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import "./profile.css"
import { IoMdWifi } from "react-icons/io";


const ProfileCard = () => {
  return (
    <div className='profile-container'>
      <div className='card m-3' style={{height:'380px'}}>
        <div className='card-headers'>
        <div className='background-imag'>
        <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" alt=""/>
        </div>
        <div className="profile-headings d-flex p-2">
         <div  className="logos">
            <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
            width="100%" height="100%" alt=""/>
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
        </div>
       
    </div>
    </div>
  )
}

export default ProfileCard