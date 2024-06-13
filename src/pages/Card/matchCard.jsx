import React from 'react'
import "./matchcard.css"
import { VscVerifiedFilled } from "react-icons/vsc";

const ProfileCards=()=>{
    return(
           <React.Fragment>
             <div className="match-card">
            <div className="avatar">
             <img
            src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
            class=""
            alt=""
            />    
        </div>
        <div className="titles ms-2">
        <div className="d-flex">
        <h4>Adity Shrivastava</h4>
        <VscVerifiedFilled className="circle-icons mt-1"/>
        </div>
        <div className="d-flex  align-items-center gap-0">
        <span className="badges">@srivastava</span>
        <span className="badges">Enterprenuer</span>
        </div>
        <div className='mt-1'>
         <p className='me-1 fw-semibold' style={{fontSize:"0.7rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis amet, 
             distinctio possimus modi rem suscipit sit dignissimos cupiditate nisi, 
          .</p>
             <div className='mt-0'>
        <button className='btn btn-primary btn-sm' style={{width:"80px"}}>
            Folllow
        </button>
        </div>
        </div>
        </div>
        </div>
        

    </React.Fragment>
    )
}
const MatchCard=()=>{
  return (
   <div className='match-container'>
    <div className='card p-1 border-0'>
        <h6 className='ms-2 mt-2'><strong>Perfect Match</strong></h6>
    <ProfileCards/>
    <ProfileCards/>
    <ProfileCards/>
    </div>
   </div>
  )
}

export default MatchCard