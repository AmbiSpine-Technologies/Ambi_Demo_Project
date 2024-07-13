import "./CreatePost.css";

import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { PiGifLight } from "react-icons/pi";
import { FaSmile } from "react-icons/fa";

export default function CreatePost() {
  return (
    <React.Fragment>
      <div className="container-fluid Create-post-container" style={{ width: '600px', height: '550px' }}>
        <div className="d-flex justify-content-between align-items-center mt-4 ">
          <span className="fw-semibold fs-5 mx-auto">Create Post</span>
          <span className="me-2  border-0 rounded-5 p-1" style={{ background: "#C4C4C4" }}>
            <RxCross2 className="text-black fs-3" />
          </span>
        </div>
        <div className="d-flex justify-content-start  ">
          <div>
            <img src="profile.png" width="60" height="60" className="border-0 rounded-5" />
          </div>
         
          <div className="border border-1 rounded-2 border-secondary mt-4 ms-3" style={{ width: "450px", height: "350px" }}>
                    <div className="ms-3 mt-3">
            <h5 ><i>Spreads with us Try with Ai</i></h5>

                    </div>
          </div>
          </div>
          <div className="d-flex justify-content-between mt-2 ms-5">
                    <div className="fs-4 create-logo ms-4 ">
                    <span><BiSolidPhotoAlbum /></span>
                    <span><PiGifLight/></span>
                    <span>Poll</span>
                    <span><FaSmile id="smile"/></span>
                    <span>
                              <img src="contact.png" width="30" height="30" alt="contact" />
                    </span>

                    </div>
                    <div className="ms-3" style={{marginRight:"45px"}}>
                              <img src="ai1.png" width="40" height="35" className="border-0 rounded-5" />


                    </div>
          </div>
          <div className="text-center mt-3">
                    <button type="button" className="btn btn-primary px-5 fs-6 border-0 rounded-2 btn-sm">Post</button>
          </div>
        </div>
      
    </React.Fragment>
  );
}

