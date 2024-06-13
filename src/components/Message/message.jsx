import React, { useState, useRef, useEffect, Fragment } from 'react';
import { BsSend } from "react-icons/bs";
import "./message.css"; 
import { IoIosSearch } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import { CiGlobe } from "react-icons/ci";
function ChatBox() {
  
  return (
    <div className="chat-containers">
      <div className="chat-box">
        <h4 className='text-center'>Messages</h4>
        <div className="messages">
            <form 
            className='border border-2 border-dark rounded justify-content-between align-items-center d-flex
            rounded-5 p-2'>
                <input type="text"
                style={{ outline: "none" }}
                className='w-100 border-0 bg-transparent'
                placeholder='Search' />
                <IoIosSearch className='fs-4 me-2'/>
            </form>
            <div className='justify-content-around align-items-center d-flex mt-3'>
            <button className='btn btn-primary btn-sm w-25 me-1'>Message</button>
            <button className='btn btn-primary btn-sm w-25 me-1'>Network</button>
            <button className='btn btn-primary btn-sm w-25 me-1'>Group</button>
          </div>

          <div className='p-2'>
            <Client/>
            <Client/>
            <Client/>

            <Client/>

            <Client/>
          </div>
        </div>
         <div className='messages d-flex justify-content-end'>
         <MdAddCircle className='fs-1 me-2 text-primary'/>
         </div>
         {/* <div className='card  p-3 position-absolute float-end' style={{width:"250px",height:"100px", zIndex: "1000"}}>
            <ul className='list-unstyled gap-3'>
                <li><a href="" className='text-decoration-none  fs-6 text-dark'>Send new message</a></li>
                <li><a href="" className='text-decoration-none  fs-6 text-dark'>Create new group</a></li>
                <li><a href="" className='text-decoration-none  fs-6 text-dark'>Create Network</a></li>
            </ul>
         </div> */}
      </div>
      <div className='chat-main-box justify-content-center align-items-center d-flex m-auto'>
        <div className=' justify-content-center align-items-center d-flex flex-column text-center gap-1'>
            <MdAddCircle className='fs-1 text-primary'/>
            <p className='text-muted fw-semibold'>Tab to Send Message</p>
            <h4><strong>New Message</strong></h4>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;


const Client=()=>{
    return(
        <Fragment>
           <div className='mt-2'>
           <div className='align-items-center  d-flex gap-2'>
                <div>
                    <img src="https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc"
                     width="50" height="50"
                      alt="" 
                      className='rounded rounded-5 border'/>
                </div>
                <div className='mt-3'>
                <h6 className='fs-6 fw-normal' style={{marginBottom:'-2px'}}>Dharmendra Kumar</h6>
                <span className='badge rounded-pill bg-dark-subtle text-secondary fw-light p-0'>Enterpernur</span>
                </div>
                <VscVerifiedFilled className='text-primary fs-6'/>
                <span className='badge rounded-pill bg-body-secondary  p-0'><CiGlobe />:2h</span>
            </div>
            <div className='justify-content-between align-items-center d-flex m-2'>
                <p className='text-secondary'>
                    Hello there, I am waiting for you..
                </p>
                <p>+10 new</p>
            </div>
           </div>
        </Fragment>
    )
}