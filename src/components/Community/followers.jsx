import React from "react";
import { NavLink } from "react-router-dom";
import "./community.css";
import Userprofile from './Userprofile'; // Ensure this import is correct

export default function Followers() {
  return (
    <div className='Community-Container'>
      <div className="card"> 
        <div className="card-body">
          <h5 className="card-title mx-3 pt-3">Rupendra's Network</h5>
          <hr />
          <div className="nav positon-relative">
            <NavLink to="/followers" className="nav-link" activeClassName="active">
              Followers
            </NavLink>
            <NavLink to="/following" className="nav-link" activeClassName="active">
              Following
            </NavLink>
          </div>
          <hr />
        <div className="">
        <p className="mx-3 pt-1 text-secondary fs-6 fw-normal">17 people are following you</p>
          <div className="d-flex flex-column g-4">
            <Userprofile description="Attended Awadesh Pratap Singh University, Rewa" />
            <Userprofile description="Attended Awadesh Pratap Singh University, Rewa" />
            <Userprofile description="Attended Awadesh Pratap Singh University, Rewa" />
            <Userprofile description="Attended Awadesh Pratap Singh University, Rewa" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
