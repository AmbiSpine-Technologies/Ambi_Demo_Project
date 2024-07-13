import React from 'react';
import { IoMdImages } from "react-icons/io";
import './EditProfile.css'; 

const Edit_Profile = () => {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content" style={{width:"1600px"}}>
        <div className="modal-body">
          <div className='cover-avatar'>
            <img src="https://i.pinimg.com/736x/07/c9/f4/07c9f488cb6381d020a8397fe112c2cc.jpg" alt="" width="100%" />
          </div>
          <div className='avatar text-center'>
            <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" alt="" className="img-fluid rounded-circle me-2" height="100" width="100" />
            <h5 className='fs-6'>Amber Logan</h5>
            <p className='text-muted fs-6'>Hii Friend</p>
          </div>
          <h5 className="modal-title  fs-6 w-100" id="exampleModalLabel">Edit User Profile</h5>
          <hr />
          <div className='row'>
            <div className='col-3'>
              <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                width="150" height="140" className="img-fluid rounded-circle me-2" alt="..." />
            </div>
            <div className='col-9'>
              <form action="">
                <div className='position-relative'>
                  <label htmlFor="file-input" className="form-label">Image :</label>
                  <input type="file" id="file-input" className="file-input" />
                  <IoMdImages className="file-input-icon" />
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <label className='form-label'>First Name</label>
                    <div>
                      <input type="text" placeholder='Enter first name..' className='form-control' />
                    </div>
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>Last Name</label>
                    <div>
                      <input type="text" placeholder='Enter last name..' className='form-control' />
                    </div>
                  </div>
                </div>
                <div className='row mt-2'>
                <div className='col-6'>
                  <label className='form-label'>Email</label>
                  <div>
                    <input type="text" placeholder='Enter email..' className='form-control' />
                  </div>
                </div>
                <div className='col-6'>
                  <label className='form-label'>Username</label>
                  <div>
                    <input type="text" placeholder='Enter username..' className='form-control' />
                  </div>
                </div>
                </div>
                <div className='row mt-2'>
                  <label className='form-label'>Mobile</label>
                  <div>
                    <input type="text" placeholder='Enter mobile number..' className='form-control' />
                  </div>
                </div>
                <div className='row mt-2'>
                  <label className='form-label'>Date of Birth</label>
                  <div>
                    <input type="date" className='form-control' />
                  </div>
                </div>
                <div className='row mt-2'>
                  <label className='form-label'>Country</label>
                  <div>
                    <input type="text" placeholder='Enter country..' className='form-control' />
                  </div>
                </div>
                <div className='row mt-2'>
                  <label className='form-label'>Description</label>
                  <div>
                    <textarea placeholder='Enter description..' className='form-control'></textarea>
                  </div>
                </div>
                
                <div className='d-flex justify-content-between'>
                <button type="submit" className='btn btn-dark rounded-0 btn-sm mt-3'>Update</button>
                <button className='text-danger fw-semibold btn' data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_Profile;
