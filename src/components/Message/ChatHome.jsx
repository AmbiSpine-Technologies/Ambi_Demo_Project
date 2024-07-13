import React from 'react';
import MessageLayout from '../../layout/MessageLayout'; 

const ChatHome = () => {
  return (
    <div className='justify-content-center align-items-center text-center d-flex flex-column w-100' style={{height:"100vh"}}>
        <h4><strong>Stay Here!</strong></h4>
        <p className='text-muted fw-semibold text-center'>Select a message and start your conversation</p>
        <button className='btn btn-primary rounded-4 btn-sm'>Send Message</button>
    </div>
  );
}

export default MessageLayout(ChatHome);
