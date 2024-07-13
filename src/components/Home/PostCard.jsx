import React, { useEffect, useRef, useState } from 'react'
import { GoHeartFill,GoHeart  } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";


import "./home.css"
import ColonCard from './ColonCard';
function PostCard() {
  const [colon, setColon] = useState(false);
  const colonRef = useRef(null);

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(20000);

  const handleLike = () => {
    setLiked(!liked);
    setCount(prevCount => liked ? prevCount - 1 : prevCount + 1);
  };

  const handleColon = () => {
    setColon(!colon);
  };

  const handleClickOutside = (event) => {
    if (colonRef.current && !colonRef.current.contains(event.target)) {
      setColon(false);
    }
  };

  

  useEffect(() => {
    if (colon) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mousewheel",handleClickOutside );
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousewheel",handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousewheel", handleClickOutside);
    };
  }, [colon]);



  return (
    <div className='cards w-100 h p-2 bg-white mb-2'>
        <div className="profile-contents mt-4">
        <div className="profile-headings">
         <div  className="imgBox">
            <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" alt=""/>
          </div>
         <div className="titles">
         <div className="subtitles">
           <div className="d-flex">
           <h4>Aditya Srivastava</h4>
           </div>
           <div className="d-flex">
           <BsFillCheckCircleFill className="circle-icons"/>
            <span className='badge text-bg-light text-small'><BsPlusCircleDotted/> : 2h</span>
           </div>
          </div>
          <div className="small-titles">
          <span>xyz@gmail.com</span>
            <span>Entrepreneur</span>
          </div>
         </div>
         </div>
          <div>
          <div className="position-relative" ref={colonRef}>
            <BiDotsVerticalRounded className="icons" onClick={handleColon} />
            {colon && (
              <div className='position-absolute' style={{ marginLeft: "-13.9rem", zIndex: "1000", marginTop: "-3.6rem" }}>
                <ColonCard />
              </div>
            )}
          </div>
          </div>
        </div>
        <div className="profile-sub-content">
          <p>Certainly! Here's 1 1000-word easy on the topic of artificial intelligence
             artificial intelligence: A Journey into the Future</p>
             <a href="#" className="see">...See More</a>
        </div>
        <div className="img-thumbnails">
          <img src="https://static4.depositphotos.com/1000816/446/i/450/depositphotos_4463055-stock-photo-handshake-isolated-in-office.jpg" alt="" />
          <div className="share-card">
          <div className="share-icons">
          <div className="s-icon" onClick={handleLike} style={{ cursor: 'pointer' }}>
      {liked ? (
        <GoHeartFill 
          className="icons" 
          style={{ 
            color: 'red',
          }} 
        />
      ) : (
        <GoHeart
          className="icons" 
          style={{ 
            color: 'black',
          }} 
        />
      )}
      <span>{count.toLocaleString()}</span>
    </div>
            <div className="s-icon"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                <BsChat className="icons"/>
                <span>20k</span>
            </div>
  

{/* -- Modal -- */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <form>
          <div class="mb-3">
            {/* <label for="message-text" class="col-form-label">Your Comments:</label> */}
            <textarea class="form-control rounded-0" placeholder='Your comment..' id="message-text"></textarea>
          </div>
          <div class="mb-3 text-center">
        <button type="button" class="btn btn-primary rounded-0 w-100">Comment</button>
        </div>
        </form>
      </div>
     
    </div>
  </div>
</div>
            <div className="s-icon">
                <PiArrowsClockwiseBold className="icons"/>
                <span>30k</span>
            </div>
           </div>
           <div className="share-icons">
           <div className="s-icon">
                <IoArrowRedoSharp className="icons"/>
            </div>
            
           </div>
          </div>
        </div>
    </div>
  )
}

export default PostCard