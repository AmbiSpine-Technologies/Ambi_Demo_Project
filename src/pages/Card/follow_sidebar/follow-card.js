import { BsFillCheckCircleFill } from "react-icons/bs";

import "./follow.css"
import React, { useState } from "react";
const ProfileCards=()=>{
    return(
            <div className="follow-card">
            <div className="avatar mt-3">
        <img
            src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
            class=""
            alt="" />
            
        </div>
        <div className="subtitle">
        <div className="d-flex gap-3">
        <h4 style={{fontSize:"0.9rem"}}>Adity Shrivastava</h4>
        <BsFillCheckCircleFill className="mt-1 text-primary fs-6 ms-2 me-2"/>
        </div>
        <div className="d-flex justify-content-around align-items-center">
        <span className="badges">@srivastava</span>
        <span className="badges">Enterprenuer</span>
        </div>
        </div>
        </div>
    )
}

const FollowCard = () => {
    const [expands, setExpands] = useState(false);
  
    const profileCardsArray = [
      <ProfileCards key={1} />,
      <ProfileCards key={2} />,
      <ProfileCards key={3} />,
      <ProfileCards key={4} />,
      <ProfileCards key={5} />,
      <ProfileCards key={6} />,
    ];
  
    const previewCount = 4;
  
    return (
      <div className="follow-container">
        <div className="card">
          <div className="card-body">
            <h5 className="f-content"><strong>Recommended</strong></h5>
            <div className="w-100">
              {expands ? profileCardsArray : profileCardsArray.slice(0, previewCount)}
            </div>
          </div>
          <a href="#" className="text-decoration-none ms-2 mb-2" onClick={(e) => { e.preventDefault(); setExpands(!expands); }}>
            {expands ? 'See less' : 'See more'}
          </a>
        </div>
      </div>
    );
  }
  
  export default FollowCard;
  
