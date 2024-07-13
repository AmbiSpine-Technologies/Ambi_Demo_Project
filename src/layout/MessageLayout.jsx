import React, { Fragment } from 'react';
import ChatBox from '../components/Message/message';
import './messagelayout.css';

const MessageLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <Fragment>
        <div className='layout-containers'>
          <div className='chat-box'>
            <ChatBox />
          </div>
          <div className='message-box'>
            <WrappedComponent {...props} />
          </div>
        </div>
      </Fragment>
    );
  };
};

export default MessageLayout;
