import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEventRepeat } from "react-icons/md";
import "./text.css"
const TextCard = () => {
  return (
   <div className='t-container'>
     <div className='card m-2' style={{height:'300px'}}>
        <div className='text-containers'>
           <input type="text" placeholder="What's in your mind ?" />
        </div>
        <div className='text-content'>
            <a href="" className='me-2'><MdOutlineEmojiEmotions/></a>
            <a href="" className='me-2'><strong>B</strong></a>
            <a href="" className='me-2'><strong>Aa</strong></a>
        </div>
        <div className='card-body'>
           <div className='icon-container'>
           <a href="">
            <CiImageOn className='icons'/>
            <p>Media</p>
            </a>
            <a href=""><MdBarChart className='icons'/>
            <p>Create Poll</p>
            </a>
            <a href=""><IoLocationSharp className='icons'/>
            <p>Tag Location</p></a>
            <a href=""><MdOutlineEventRepeat className='icons'/>
            <p>Schedule</p></a>
           </div>
        <div className='d-flex align-items-center justify-content-center w-100'>
            <button className='btn btn-primary btn-sm fw-bold'>Spread Now</button>
        </div>
        </div>
        
    </div>
   </div>
  )
}

export default TextCard