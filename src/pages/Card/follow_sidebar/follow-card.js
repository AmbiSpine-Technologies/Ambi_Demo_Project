import { VscVerifiedFilled } from "react-icons/vsc";
import "./follow.css"
const ProfileCards=()=>{
    return(
            <div className="follow-card">
            <div className="avatar">
        <img
            src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
            class=""
            alt=""
        />
            
        </div>
        <div className="subtitle">
        <div className="d-flex gap-3">
        <h4 style={{fontSize:"0.9rem"}}>Adity Shrivastava</h4>
        <VscVerifiedFilled className="mt-1 text-primary fs-6 ms-2 me-2"/>
        </div>
        <div className="d-flex justify-content-around align-items-center">
        <span className="badges">@srivastava</span>
        <span className="badges">Enterprenuer</span>
        </div>
        </div>
        </div>
    )
}
const FollowCard=()=>{
    return(
       <div className="follow-container">
         <div className="card">
          <div className="card-body">
          <h5 className="f-content"><strong>Recommended</strong></h5>
           <div className="w-100">
            <ProfileCards/>
            <ProfileCards/>
            <ProfileCards/>
            <ProfileCards/>
           </div>
          </div>
          <a href="#" className=" ms-2 mb-2">See more</a>
        </div>
       </div>
    )
}

export default FollowCard;