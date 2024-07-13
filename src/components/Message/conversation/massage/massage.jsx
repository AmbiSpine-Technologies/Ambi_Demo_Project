import React from 'react';
import { HiCheckBadge } from 'react-icons/hi2';
import './MessageList.css'; 
import NewConversation from '../New-Conversation/New-Conversation'; 
import Title from '../Tittle/Title';
import AppLayout from '../../../../layout/MessageLayout'; 
import MessageItem from './MessageItem'; 

export const SampleMessage = [
  {
    attachments: [{
      public_id: 'adjjkkj',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg'
    }],
    content: '',
    _id: 'ofdklirlrgee1', // Ensure unique ID
    sender: {
      _id: 'user_id1',
      name: 'Dharmendra Kumar'
    },
    chat: 'chatId',
    createAt: '2024-05-19T10:41:30.630Z'
  },
  {
    content: 'Hii How are doing..? Nice and u..',
    _id: 'ofdklirlrgee2', // Ensure unique ID
    sender: {
      _id: 'fjkfklfg',
      name: 'Amit'
    },
    chat: 'chatId',
    createAt: '2024-05-19T10:41:30.630Z'
  },
  {
    attachments: [{
      public_id: 'adjjkkj',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg'
    }],
    content: '',
    _id: 'ofdklirlrgee1', 
    sender: {
      _id: 'user_id1',
      name: 'Dharmendra Kumar'
    },
    chat: 'chatId',
    createAt: '2024-05-19T10:41:30.630Z'
  },
  {
    content: 'Hii How are doing..? Nice and u..',
    _id: 'ofdklirlrgee2', // Ensure unique ID
    sender: {
      _id: 'fjkfklfg',
      name: 'Amit'
    },
    chat: 'chatId',
    createAt: '2024-05-19T10:41:30.630Z'
  }
];

const user = {
  _id: 'fjkfklfg',
  name: 'Amit Kumar'
};

const MessageBox = () => {
  const messageItems = SampleMessage.map((message) => (
    <MessageItem message={message} user={user} key={message._id} />
  ));

  return (
    <>
      <div className='d-flex flex-column' style={{ height: '90%' }}>
        <Title />
        <main className='flex-grow-1 overflow-auto p-1'>
          <div className='d-flex justify-content-center flex-column align-items-center gap-2 mt-4'>
            <img 
              src='https://randomuser.me/api/portraits/men/1.jpg'
              width='60' 
              height='60'
              className='rounded rounded-5 border'
              alt='User Profile' 
            />
            <div>
              <span className='text-black fs-6 fw-semibold me-1 ms-2'>Dharmendra Kumar</span>
              <HiCheckBadge className='text-primary fs-6' />
            </div>
            <p className='w-50 text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsam fugit magnam veniam eaque minus nemo unde!
            </p>
          </div>
          <div id='chat-message-list' className='w-100'>
            {messageItems}
          </div>
        </main>
      </div>
      <NewConversation />
    </>
  );
};

export default AppLayout(MessageBox);
