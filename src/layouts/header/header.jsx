import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { MdNotificationsActive } from "react-icons/md";
import { MdSlideshow } from "react-icons/md";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import Notification from "../../components/Notification/notification";
import {NavLink} from "react-router-dom"

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
        <header className="d-flex justify-content-around p-2 mt-2">
            <div className="d-flex justify-content-center align-items-center ">
                <div className="logo ms-4 me-3" onClick={toggleOpen}>
                    <FaBars className="icons" />
                </div>
            </div>
            <div className="search-box">
                <form className="relative d-flex position-relative">
                    <span className="bi bi-search position-absolute ms-2 mt-2"></span>
                    <input type="text" placeholder="" className="form-control" />
                    <span className="bi bi-mic-fill position-absolute end-0 me-2 mt-2"></span>
                </form>
            </div>
            <div className="left-icons">
                <nav className="d-flex border-0">
                    <div className="me-4 h-notification" onClick={handleNotification}>
                        <a href="#" 
                        className="d-flex text-decoration-none text-center justify-content-center flex-column align-items-center text-primary">
                            <MdNotificationsActive className="fs-4" />
                            <span>Notification</span></a>
                    </div>
                    {notify && (
                        <div ref={notificationRef} className="notification-page">
                            <Notification />
                        </div>
                    )}
                    <div className="me-4">
                        <a href="/job"
                        className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center text-primary">
                            <BsSuitcaseLgFill className="fs-4"/>
                            <span>Jobs</span></a>
                    </div>
                    <div className="me-4">
                        <a href="/show" 
                        className="d-flex justify-content-center text-decoration-none text-center flex-column align-items-center text-primary"> 
                            <MdSlideshow className="fs-4" />
                            <span>Show</span></a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
