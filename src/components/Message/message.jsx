import React from 'react';
import { AiOutlineMessage } from "react-icons/ai";
import "./message.css"; 
import { IoIosSearch } from "react-icons/io";
import ConversationList from './conversation/ConversationList';
import RequestModal from './Dailog/RequestModal.jsx';
import NetworkModal from './Dailog/NetworkModal.jsx';
import MessageModal from './Dailog/MessageModal/MessageModal.jsx';
import GroupModalComponent from './Dailog/MessageModal/GroupModal.jsx';




function ChatBox() {
  
  return (
    <div className="chat-containers-me ">
      <div className="chat-box">
       <div className='justify-content-between align-items-center d-flex p-2'>
       <div>
       <a href="/" className=' btn btn-light p-1 me-4 rounded-circle'>
        <i class="bi bi-arrow-left"></i>
        </a>
       <span className='text-left fw-semibold'>Messages</span>
       </div>
       <button className='btn'>
       <i class="bi bi-gear-fill"></i>
       </button>
       </div>
        <div className="messages">
            <form 
            className='bg-body-secondary border-dark rounded justify-content-between align-items-center d-flex
            rounded-1 p-2'>
                <input type="text"
                style={{ outline: "none" }}
                className='w-100 border-0 bg-transparent'
                placeholder='Search' />
                <IoIosSearch className='fs-4 me-2' style={{color:"blue"}}/>
            </form>
            <div className='justify-content-around align-items-center d-flex mt-3'>
            <button className='btn btn-sm fw-semibold w-25 me-1'
             data-bs-toggle="modal" data-bs-target="#messageModal"
            >Message</button>
            <div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <MessageModal/>
            </div>
            <button className='btn fw-semibold btn-sm w-25 me-1'
            data-bs-toggle="modal" data-bs-target="#natworkModal"
            >Network</button>
            <button className='btn fw-semibold  btn-sm w-25 me-1'
             data-bs-toggle="modal" data-bs-target="#groupModal"
            >Group</button>
            <div class="modal fade" id="groupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <GroupModalComponent/>
            </div>
            <button className='btn fw-semibold  btn-sm w-25 me-1'data-bs-toggle="modal" data-bs-target="#requestModal">Request</button>
            <div class="modal fade" id="requestModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <RequestModal/>
            </div>
            <div class="modal fade" id="natworkModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <NetworkModal/>
            </div>
          </div>

          <div className='p-2'>
            <ConversationList/>
          </div>
        </div>
         <div className='d-flex justify-content-end me-4 '>
        <button className='btn btn-light p-1 me-4 rounded-circle position-relative'>
        <AiOutlineMessage 
         className='fs-3'/>
         <i class="bi bi-plus fs-5 position-absolute bottom-0  start-100" style={{marginLeft:"-12px"}}></i>
        </button>

         </div>
        
      </div>
      
       
    
    </div>
  );
}

export default ChatBox;


// const Client=()=>{
//     return(
//         <Fragment>
//            <div className='mt-2'>
//            <div className='align-items-center  d-flex gap-2'>
//                 <div>
//                     <img src="https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc"
//                      width="50" height="50"
//                       alt="" 
//                       className='rounded rounded-5 border'/>
//                 </div>
//                 <div className='mt-3'>
//                 <h6 className='fs-6 fw-normal' style={{marginBottom:'-2px'}}>Dharmendra Kumar</h6>
//                 <span className='badge rounded-pill bg-dark-subtle text-secondary fw-light p-0'>Enterpernur</span>
//                 </div>
//                 <VscVerifiedFilled className='text-primary fs-6'/>
//                 <span className='badge rounded-pill bg-body-secondary  p-0'><CiGlobe />:2h</span>
//             </div>
//             <div className='justify-content-between align-items-center d-flex m-2'>
//                 <p className='text-secondary'>
//                     Hello there, I am waiting for you..
//                 </p>
//                 <p>+10 new</p>
//             </div>
//            </div>
//         </Fragment>
//     )
// }