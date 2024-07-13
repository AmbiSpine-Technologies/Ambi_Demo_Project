import React from "react";
import "./sidebar.css";
import { IoClose } from "react-icons/io5";
import { SiApachenetbeanside } from "react-icons/si";
import { TiAdjustBrightness } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";
import { useNavigate, NavLink } from "react-router-dom"; 

const Sidebar = ({ toggleClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="sidebar">
            <div className="sidebar-heading d-flex justify-content-between align-items-start p-1" style={{ marginLeft: "-15px" }}>
               
                <IoClose className="fs-5" onClick={toggleClose} />
            </div>
            
            

            <div className="sidebar-footer mt-4 d-flex justify-content-end">
                <button onClick={handleLogout} className="btn btn-primary btn-sm">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
