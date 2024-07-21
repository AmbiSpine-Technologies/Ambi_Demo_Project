import { BsEarFill } from "react-icons/bs"
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { TbDots } from "react-icons/tb";
function Add_Audio_User() {
          return(
            <div className='Add_Audio_User '>
            <div className='d-flex px-2 fw-semibold justify-content-between '>
              <span className='text-danger mt-2'>
              End
              </span>
              <span className='mt-2' >
              <TbDots className='text-black fs-4' />
              </span>
            </div>
            <h5 className='ms-3 mt-3'>Speckers</h5>
            <hr id='hr-line' />
            <div>
              <div className='d-flex mt-2 ms-4'>
                <img src='deposit.jpg'   /> <h4 className='ms-2 mt-2 fs-5 fw-semibold'>Aditya Shivastava</h4> <BiSolidMicrophoneAlt className='text-danger mt-3 ms-5 fw-semibold fs-5' />
              </div> 
              <div className='d-flex mt-2 ms-4'>
                <img src='deposit.jpg'   /> <h4 className='ms-2 mt-2 fs-5 fw-semibold'>Aditya Shivastava</h4> <BiSolidMicrophoneAlt className='text-danger mt-3 ms-5 fw-semibold fs-5' />
              </div> 
            </div> 
            <hr id='hr-line' />
           <div className=''>
            <h5 className='ms-3 mt-3'> joined</h5>
            <div className='d-flex mt-2 ms-4 me-1'>
                <img src='deposit.jpg'   /> <h4 className='ms-2 mt-2 fs-5 fw-semibold'>Aditya Shivastava</h4> <button className='text-white rounded-2  my-3 ms-4 border-0 px-2 bg-primary '> Request</button>
              </div> 
           </div>
           </div>
          )
        }
export default Add_Audio_User;