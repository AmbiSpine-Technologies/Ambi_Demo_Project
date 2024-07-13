// import React from 'react';
// import { PiDotsThreeBold } from "react-icons/pi";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { FaRegComment } from "react-icons/fa6";
// import { RiSendPlaneFill } from "react-icons/ri";
// import { IoBookmarkOutline } from "react-icons/io5";
// import { FiSmile } from "react-icons/fi";

// import './Comment.css'; 

// const CommentModal = ({ isOpen, onClose, post }) => {
//   if (!isOpen) return null;

//   return (
//     <div className='CommentModal position-fixed ' style={{width: "1100px"}}>
//       <div className="modal-content">    
         
//         <div className="modal-body">
//           <div className='d-flex section-divider'>
//           <div className='modal-left'>
//             <img src={post.image} alt='Postcard' />
//           </div>

//           <div className='modal-right' style={{width: "500px"}}>     

//           <div className="d-flex header-comment justify-content-between align-items-center">
//                   <div className='d-flex'>
//                   <div className=' p-1 d-flex' style={{height: "55px"}}>
//                   <img src='https://images.unsplash.com/photo-1604725333736-1f962a6218d0?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width="50" height="40" className="img-fluid border rounded-1 border-2 rounded-circle mx-2" alt='userprofile' />
//                     <div className='ms-1'>      
//                     <span className='fs-6  fw-lighter  d-inline-block'>Adiya_Shivas_mca </span> <br />
//                     <span className='  fw-lighter  d-inline-block' style={{fontSize: "15px"}}>Govt.modal Science College</span>
//                     </div>
//                   </div>
//                    <span className='text-primary fs-6 mt-2 fw-lighter  px-1'>.Follow</span>
//                   </div>
//                   <div style={{marginTop: "-10px"}}>
//                   <PiDotsThreeBold className=' fs-3  fw-lighter mx-1 px-1' />
//                   </div>
                  
//           </div> 

//           <div className='comment-body-section position-relative '>

//            <div>
//             <UserComment name="Rupendra_vih763" />
//             <UserComment name="Aditya_vih763"   />
//             <UserComment  name="shivanshu_vih763"  />
//            </div>
            
           

//           </div>

//           <div className='comment-footer my-2'>
//             <div className='d-flex justify-content-between align-content-center'>
//             <div>
//             <span className='fs-4 fw-lighter mx-1 px-1'> <IoMdHeartEmpty /> </span>
//             <span className='fs-4 fw-lighter mx-1 px-1'> <FaRegComment /> </span>
//             <span className='fs-4 fw-lighter mx-1 px-1'> <RiSendPlaneFill /> </span>
//             </div>
//               <div>
//               <span className='fs-4 fw-lighter mx-1 px-1'> <IoBookmarkOutline /> </span>
//               </div>

//             </div>

//             <div className='mt-2'>
//               <img src='https://www.w3schools.com/w3css/img_lights.jpg' width="25" height="25" className='border rounded-2 rounded-circle' /> <span className='fs-6 fw-lighter ms-1 '>1099</span> <span className='fs-6 fw-lighter ms-1 '>likes</span>
//               <br/>
//               <span className='mt-1 ms-1'>12 hours ago</span>

//             </div>

//             <div className=' mt-3'>
//               <form className='d-flex'>
//               <FiSmile className='fs-4 fw-lighter mt-2 mx-1' /> <input type='text' className='border-0 form-control p-1 ps-2' placeholder='Add a comment.....' />
//               <button className='btn text-primary'> Post</button>
//               </form>
           
//             </div>
//           </div>
               
                
           
//           </div>
//           <div className='position-relative'>
//                     <button type="button" id="close-icon" className="btn-close" onClick={onClose}></button>
//          </div> 

//             {/* Add your comment section here */}
//           </div>
//         </div>      
//       </div>
//     </div>
//   );
// };

// export default CommentModal;


// function UserComment( {name} ) {

//   return(
//     <React.Fragment>
//        <div className="d-flex justify-content-between my-2  UserCommentSection" >            
//              <div className=' d-flex' style={{ height:"50px"}} >
//              <img src='contact.png'  className=" d-inline-block h-100 img-fluid  border rounded-1 border-2  rounded-circle m-2" style={{width:"30%"}}  alt='userprofile' />
//              <div className='ms-2 mt-3'>
//              <span className="fs-6   ps-1 pt-1 fw-lighter">{name} </span> 

//              <span className='ps-2 ms-1' > Baccho boss nazar nhi aa raheBaccho boss nazar nhi aa raheBaccho </span>
//              <div className='mt-1'>
//               <span className='mx-2'>14m</span> 
//               <span className='mx-2'>2likes</span>
//               <span className='mx-2'>Reply</span>
//               <span className='mx-2'>See translation</span>
//              </div>
//              <div className='mt-2'>
//               ----- Hide replies
//             </div>
//              </div>
            
//              </div>
//              <div className='fs-5 mt-3'>
//               <IoMdHeartEmpty />
//             </div>
//               </div>
             
//     </React.Fragment>
//   )
// }



import React, { useState } from 'react';
import { PiDotsThreeBold } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
import { FiSmile } from "react-icons/fi";

import './Comment.css'; 

const CommentModal = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <div className='CommentModal position-fixed ' >
      <div className="modal-content" style={{width: "900px"}}>    
         
        <div className="modal-body">
          <div className='d-flex section-divider'>
          <div className='modal-left'>
            <img src={post.image} alt='Postcard' />
          </div>

          <div className='modal-right' style={{width: "500px"}}>     

          <div className=" header-comment-section">
              <div className='d-flex justify-content-between align-content-center'> 
              <div className='d-flex'>
                  <div className=' p-1 d-flex' style={{height: "55px"}}>
                  <img src='https://images.unsplash.com/photo-1604725333736-1f962a6218d0?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width="50" height="40" className="img-fluid border rounded-1 border-2 rounded-circle mx-2" alt='userprofile' />
                    <div className='ms-1'>      
                    <span className='fs-6  fw-lighter  d-inline-block'>Adiya_Shivas_mca </span> <br />
                    <span className='  fw-lighter  d-inline-block' style={{fontSize: "15px"}}>Govt.modal Science College</span>
                    </div>
                  </div>
                   <span className='text-primary fs-6 mt-2 fw-lighter  px-1'>.Follow</span>
                  </div>
                  <div className='mt-1'>
                  <PiDotsThreeBold className=' fs-3  fw-lighter  px-1' />
                  </div>
              </div>
                  <hr />
          </div> 

          <div className='comment-body-section position-relative '>

           <div>
            <UserComment name="Rupendra_vih763" />
            <UserComment name="Aditya_vih763"   />
            <UserComment  name="shivanshu_vih763"  />
           </div>
            
           

          </div>

          <div className='comment-footer my-2'>
            <div className='d-flex justify-content-between align-content-center'>
            <div>
            <span className='fs-4 fw-lighter mx-1 px-1'> <IoMdHeartEmpty /> </span>
            <span className='fs-4 fw-lighter mx-1 px-1'> <FaRegComment /> </span>
            <span className='fs-4 fw-lighter mx-1 px-1'> <RiSendPlaneFill /> </span>
            </div>
              <div>
              <span className='fs-4 fw-lighter mx-1 px-1'> <IoBookmarkOutline /> </span>
              </div>

            </div>

            <div className='mt-2'>
              <img src='https://www.w3schools.com/w3css/img_lights.jpg' width="25" height="25" className='border rounded-2 rounded-circle' /> <span className='fs-6 fw-lighter ms-1 '>1099</span> <span className='fs-6 fw-lighter ms-1 '>likes</span>
              <br/>
              <span className='mt-1 ms-1'>12 hours ago</span>

            </div>

            <div className=' mt-3'>
              <form className='d-flex'>
              <FiSmile className='fs-4 fw-lighter mt-2 mx-1' /> <input type='text' className='border-0 form-control p-1 ps-2' placeholder='Add a comment.....' />
              <button className='btn text-primary'> Post</button>
              </form>
           
            </div>
          </div>
               
                
           
          </div>
          <div className='position-relative  '>
            <button type="button" id="close-icon" className="btn-close" onClick={onClose}></button>
         </div> 

            {/* Add your comment section here */}
          </div>
        </div>      
      </div>
    </div>
  );
};

export default CommentModal;

function UserComment({ name }) {
  const [showReplies, setShowReplies] = useState(false);
  const [toggleText, setToggleText] = useState("Hide replies");

  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
    setToggleText(showReplies ? "View replies" : "Hide replies");
  };

  return (
    <React.Fragment>
      <div className="UserCommentSection container-fluid">
      <div className="d-flex justify-content-between  ">            
        <div className='d-flex' style={{ height:"35px" }}>
          <img src='contact.png' className="d-inline-block h-100 img-fluid border rounded-1 border-2 rounded-circle m-2 "   alt='userprofile' />
          <div className='ms-2 mt-2 ' style={{fontSize: "15px"}}>
            <span className="ps-1 pt-1 fw-lighter">{name} </span> 
            <span className=' ms-1'> Baccho boss nazar nhi aa  </span>
            <div className='mt-1'>
              <span className='mx-2'>14m</span> 
              <span className='mx-2'>2 likes</span>
              <span className='mx-2'>Reply</span>
              <span className='mx-2'>See translation</span>
            </div>
            <div className='mt-2' onClick={handleToggleReplies} style={{cursor: 'pointer', color: 'blue'}}>
              ----- {toggleText}
            </div>
            {showReplies && (
              <div className="nested-replies mt-2 ms-2">
                <UserComment name="NestedUser1" />
              </div>
            )}
          </div>
        </div>
        <div className='fs-5 mt-3'>
          <IoMdHeartEmpty />
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

