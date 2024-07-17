import React, { useState } from 'react';
import './network.css';
import { MdPersonAddAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import AddUserModal from './AddUserModal';
import UserListItem from './UserListItem';

const NetworkModal = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const handleOpenAddUserModal = () => {
    setIsAddUserModalOpen(true);
  };

  const handleCloseAddUserModal = () => {
    setIsAddUserModalOpen(false);
  };

  const handleInviteUser = (userData) => {
    console.log('User invited:', userData);
    setIsAddUserModalOpen(false);
  };

  const users = [
    { name: 'Albert Rodarte' },
    { name: 'John Doe' },
    { name: 'Jane Smith' }
  ];

  return (
         <div className="modal-dialog modal-dialog-left" id="Network">
        <div className="modal-content">
          <div className="modal-body">
            <div>
              <div className='d-flex justify-content-between'>
                <p className='fs-5 fw-bold'>Network</p>
                <button className='btn'
                 onClick={handleOpenAddUserModal}
                 data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Add Contact"
                 ><MdPersonAddAlt className="fs-3" /></button>
              </div>
              <div className='input-search d-flex align-items-center'>
                <CiSearch className="fs-5 me-2" />
                <input type="text" placeholder='Search users...' className='w-100' />
              </div>
            </div>
            <div className='mt-4 searchlist overflow-y-auto h-100'>
              <p className='text-primary fw-semibold border-buttom-3'>A</p>
              {users?.map(user => (
                <UserListItem key={user.name} user={user} />
              ))}
            </div>
          </div>
        </div>

        {isAddUserModalOpen && (
        <div className="modal fade show d-block" tabIndex="-1" id='addModal'>
        
            <AddUserModal onClose={handleCloseAddUserModal} onInvite={handleInviteUser} />
          
        </div>
      )}
      </div>
      
    
  );
};

export default NetworkModal;


