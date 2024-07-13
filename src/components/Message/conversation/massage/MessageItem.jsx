import React from 'react';
import { fileFormat } from '../../../lib/feature.js';
import RenderAttachement from '../../../Shareds/RenderAttachement.jsx';
import { PiDotsThreeCircleVerticalLight } from 'react-icons/pi'; 
import './MessageItem.css';

const MessageItem = ({ message, user }) => {
  const { content, attachements = [], sender, createAt } = message;
  const sameSender = sender?._id === user?._id;
  const messageClass = sameSender ? 'message-item sender' : 'message-item receiver';

  return (
    <div className={messageClass}>
      <PiDotsThreeCircleVerticalLight className='icon fs-1' />
      <div className='bg-white p-1'>
        {!sameSender && (
          <h6 className="sender-name">
            {sender.name}
          </h6>
        )}

        {content && <p className="message-content">
          {content}
        </p>}

        {attachements.length > 0 &&
          attachements.map((atta, index) => {
            const url = atta.url;
            const file = fileFormat(url);
            return (
              <div key={index}>
                <a href={url} target='_blank' rel="noopener noreferrer" className="attachment-link" download>
                  {RenderAttachement(url, file)}
                </a>
              </div>
            );
          })
        }

        <p className="timestamp">
          {createAt || '3 min'} 
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
