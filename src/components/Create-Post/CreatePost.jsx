import { HiOutlineGif } from "react-icons/hi2";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import "./createPost.css"
import React from 'react'

const CreatePost = () => {
  return (
      
    <div class="modal-dialog modal-dialog-centered" style={{width:"700px"}}>
    <div class="modal-content">
      <div class="modal-header border-0">
        <h1 class="modal-title   fs-5 text-center w-100" id="exampleModalLabel">Create</h1>
        <button type="button" class="btn-close btn-close-custom" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3 d-flex">
            <div class="logos mt-1">
              <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
              style={{width:"60px",height:"60px"}} alt=""/>
            </div>
           <div className='ms-4'>
           <textarea class="form-control rounded-0" cols="40" rows="10" id="message-text"
            placeholder="Spreads with us . Try with Ai"></textarea>
           <div class="icon-container">
           <CiImageOn className="border border-0 fs-3"/>
           <div className="poll">GIF</div>
           <div className="poll">Poll</div>
           <BsEmojiSmileFill style={{color:"goldenrod"}}/>
           <BsFillPersonFill/>

            
          </div>
           </div>
          </div>
          <div class="mb-3 text-center">
            <button type="button" class="btn btn-primary rounded-0 w-25">Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CreatePost