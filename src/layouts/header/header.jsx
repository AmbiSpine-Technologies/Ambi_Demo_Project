// import React, { useState, useRef, useEffect } from "react";
// import "./header.css";
// import { MdHome } from "react-icons/md";
// import { FaMicrophone } from "react-icons/fa6";
// import { MdNotificationsActive } from "react-icons/md";
// import { MdSlideshow } from "react-icons/md";
// import { BsSuitcaseLgFill,BsPersonCheckFill } from "react-icons/bs";
// import Notification from "../../components/Notification/notification";
// import {NavLink } from "react-router-dom"; 

// import SearchWithMic from './SearchWithMic';

// const Header = ({ toggleOpen }) => {
//     const [notify, setNotify] = useState(false);
//     const notificationRef = useRef(null);

//     const handleNotification = () => {
//         setNotify(!notify);
//     };

//     const handleClickOutside = (event) => {
//         if (notificationRef.current && !notificationRef.current.contains(event.target)) {
//             setNotify(false);
//         }
//     };

//     useEffect(() => {
//         if (notify) {
//             document.addEventListener("mousedown", handleClickOutside);
//         } else {
//             document.removeEventListener("mousedown", handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [notify]);

//     return (
//         <header className="d-flex justify-content-between p-2 mt-2">
//             <nav className="d-flex">
//                 <div className="logo ms-4 me-3" onClick={toggleOpen}>
//                <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" 
//               className="rounded-img" alt=""/>
//                 </div>
//                 {/* <div className="search-box">
//                     <form className="relative d-flex position-relative">
//                         <span className="search-icon bi bi-search position-absolute"></span>
//                         <input type="text" placeholder="Search.." className="search-input " />
//                         <span  className="bi bi-mic-fill position-absolute   text-white bg-primary rounded-circle px-1 mt-2" style={{left: "90%"}} ></span> 
//                     </form>
//                 </div> */}
//                 <div>
//                     <SearchWithMic />
//                 </div>
//                 <NavLink to="/connected">
//                     <img src="Ai.jpg" alt="" className="ms-3" style={{width:"50px",marginTop:"-5px"}} />
//                 </NavLink>
//             </nav>
          
//             <div className="left-icons">
//                 <nav className="d-flex gap-1 border-0">
//                 <div className="mt-2">
//                         <NavLink to="/"
//                         className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
//                             <MdHome className="fs-3"/>
//                             </NavLink>
//                 </div>   
//                 <div className="mt-2">
//                         <NavLink to="/connected"
//                         className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
//                             <BsPersonCheckFill className="fs-3"/>
//                             </NavLink>
//                 </div>
//                     <div className=" mt-2 h-notification" onClick={handleNotification}>
//                         <NavLink to="#" 
//                         className="d-flex text-decoration-none text-center justify-content-center flex-column align-items-center">
//                             <MdNotificationsActive className="fs-3" />
//                         </NavLink>
//                     </div>
//                     {notify && (
//                         <div ref={notificationRef} className="notification-page">
//                             <Notification />
//                         </div>
//                     )}
//                     <div className="mt-2">
//                         <NavLink to="/job"
//                         className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
//                             <BsSuitcaseLgFill className="fs-3"/>
//                             </NavLink>
//                     </div>
//                     {/* <div className="">
//                         <NavLink to="/show" 
//                         className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center "> 
//                              <img src="video_1.png" alt="" className="ms-3" style={{width:"30px",height:"30px",marginTop:"-5px"}} />
//                             <span  className="text-black fs-6 fw-bold">Show</span></NavLink>
//                     </div> */}
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;


import { MdHome, MdNotificationsActive } from "react-icons/md";
import { BsSuitcaseLgFill, BsPersonCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone } from "react-icons/fa6";
import Notification from "../../components/Notification/notification";
import './header.css';

export default function Header({ toggleOpen }) {

    const [notify, setNotify] = useState(false);
    const notificationRef = useRef(null);

    const handleNotification = () => {
        setNotify(!notify);
    };

    const handleClickOutside = (event) => {
        if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            setNotify(false);
        }
    };

    useEffect(() => {
        if (notify) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [notify]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler mt-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mt-3"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
                            <div className="d-flex align-items-center mb-2 mb-md-0" >
                                <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" onClick={toggleOpen}
                                    width="50" height="50" className="ms-3 mt-2 rounded-circle me-3" alt="" />
                                <form className="me-3" role="search" style={{width: "300px"}} >
                                    <input className="form-control outline-none w-100 me-2" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                                <NavLink to="/connected">
                                    <img src="Ai.jpg" alt="" className="bg-transparent" style={{ width: "50px", marginTop: "-5px" }} />
                                </NavLink>
                            </div>
                            <div className="d-flex flex-column flex-md-row gap-5 align-items-center">
                                <NavLink to="/" className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
                                    <MdHome className="fs-3" />
                                </NavLink>
                                <NavLink to="/connected" className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
                                    <BsPersonCheckFill className="fs-3" />
                                </NavLink>
                                <div className="mt-2 h-notification" onClick={handleNotification}>
                                    <NavLink to="#" 
                                    className="d-flex text-decoration-none text-center justify-content-center flex-column align-items-center">
                                        <MdNotificationsActive className="fs-3" />
                                    </NavLink>
                                </div>
                                {notify && (
                                    <div ref={notificationRef} className="notification-page">
                                        <Notification />
                                    </div>
                                )}
                                <NavLink to="/job" className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
                                    <BsSuitcaseLgFill className="fs-3 text-primary me-2" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
