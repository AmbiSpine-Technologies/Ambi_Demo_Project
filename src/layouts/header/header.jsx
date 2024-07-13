import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { MdNotificationsActive } from "react-icons/md";
import { MdSlideshow } from "react-icons/md";
import { BsSuitcaseLgFill,BsPersonCheckFill } from "react-icons/bs";
import Notification from "../../components/Notification/notification";
import {NavLink } from "react-router-dom"; 

const Header = ({ toggleOpen }) => {
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
        <header className="d-flex justify-content-between p-2 mt-2">
            <nav className="d-flex">
                <div className="logo ms-4 me-3" onClick={toggleOpen}>
               <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" 
              className="rounded-img" alt=""/>
                </div>
                <div className="search-box">
                    <form className="relative d-flex position-relative">
                        <span className="search-icon bi bi-search position-absolute"></span>
                        <input type="text" placeholder="Search.." className="search-input" />
                    </form>
                </div>
                <NavLink to="/connected">
                    <img src="Ai.jpg" alt="" className="ms-3" style={{width:"50px",marginTop:"-5px"}} />
            </NavLink>
            </nav>
          
            <div className="left-icons">
                <nav className="d-flex gap-3 border-0">
                <div className="">
                        <NavLink to="/connected"
                        className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
                            <BsPersonCheckFill className="fs-3"/>
                            <span className="text-secondary  w-100 ">Spreads connecte</span></NavLink>
                </div>
                    <div className=" h-notification" onClick={handleNotification}>
                        <NavLink to="#" 
                        className="d-flex text-decoration-none text-center justify-content-center flex-column align-items-center">
                            <MdNotificationsActive className="fs-3" />
                            <span  className="text-secondary">Notification</span></NavLink>
                    </div>
                    {notify && (
                        <div ref={notificationRef} className="notification-page">
                            <Notification />
                        </div>
                    )}
                    <div className="">
                        <NavLink to="/job"
                        className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center">
                            <BsSuitcaseLgFill className="fs-3"/>
                            <span  className="text-secondary">Jobs</span></NavLink>
                    </div>
                    {/* <div className="">
                        <NavLink to="/show" 
                        className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center "> 
                             <img src="video_1.png" alt="" className="ms-3" style={{width:"30px",height:"30px",marginTop:"-5px"}} />
                            <span  className="text-black fs-6 fw-bold">Show</span></NavLink>
                    </div> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
