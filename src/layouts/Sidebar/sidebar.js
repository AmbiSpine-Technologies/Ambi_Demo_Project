import React from "react";
import "./sidebar.css"
import { IoClose } from "react-icons/io5";
import { SiApachenetbeanside } from "react-icons/si";
import { TiAdjustBrightness } from "react-icons/ti";

const Sidebar=({toggleClose})=>{
   
    return(
        <div className="sidebar">
           <div className="sidebar-heading d-flex justify-content-between align-items-star p-1" style={{marginLeft:"-15px"}}>
         
            <img src="logo.jpeg" width="30px" height="30px" className="ms-2" alt="logo"/>
            <IoClose className="fs-5" onClick={toggleClose}/>
           </div>
            <nav>
                <ul>
                    
                    <li><a href="/"><span class="bi bi-house-door-fill me-2 fs-5"></span>Home</a></li>
                    <li><a href="profile"><span className="bi bi-person me-2 fs-5"></span>Profile</a></li>
                    <li><a href="explore"><span class="bi bi-search me-2 fs-5"></span>Explore</a></li>
                    <li><a href="message"><span  class="bi bi-chat-dots me-2 fs-5"></span>Messages</a></li>
                    <li><a href="spread"><span class="bi bi-person-video2 me-2 fs-5"></span>Spread Shorts</a></li>
                    <li><a href="#"><span class="bi bi-plus-circle-dotted me-2 fs-5"></span>Create post</a></li>
                    
                    <li><a href="#"><span class="bi bi-three-dots-vertical me-2 fs-5"></span>More</a></li>
                    <li><a href="#"><span class="me-2 fs-5"><SiApachenetbeanside className="ai-cons"/></span>Spreads AI </a></li>
                </ul>
            </nav>
            <div className="news">
               <h6>Business page </h6>
               <div className="d-flex align-items-star ">
                <img src="ambi.jpeg" width="50" height="50" alt="ambi"/>
                <p>AmbiSpine Technologies</p>
               </div>
               <div>
               </div>
            </div>

            <div className="sidebar-footer mt-4 d-flex justify-content-between">
                <a href="login" className="btn btn-primary btn-sm">Logout</a>
                <TiAdjustBrightness className="fs-4"/>
            </div>
            
        </div>
    )
}

export default Sidebar;