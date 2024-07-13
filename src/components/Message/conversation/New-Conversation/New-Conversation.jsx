import React, { useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import "./New-Conversation.css";
import Picker from '@emoji-mart/react'


const NewConversation = () => {
  const [messages, setMessages] = useState([]);
  const [emoji, setEmoji] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleEmoji = () => {
    setEmoji(prev => !prev);
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setNewMessage(newMessage + emoji);
  };

  return (
    <>
      <div className='new-conversation position-relative'>
        <form className='d-flex align-items-center' onSubmit={handleSendMessage}>
          <div className='input-container d-flex align-items-center'>
            <BsEmojiSmile 
              size={30} 
              className='p-0 me-2' 
              onClick={handleEmoji} 
              aria-label='Toggle emoji picker' 
            />
            <input
              type='text'
              className='me-2'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder='Type a message'
              aria-label='Message input'
            />
            <button 
              type='submit' 
              className='btn btn-primary rounded-circle p-0' 
              aria-label='Send message'
            >
              <TbSend size={30} />
            </button>
          </div>
        </form>
        <div className='icons-container d-flex align-items-center'>
          <FaMicrophone 
            size={30} 
            className='me-2 bg-primary rounded-circle p-1 text-white' 
            aria-label='Record audio message' 
          />
          <IoCameraOutline 
            size={30} 
            className='bg-primary rounded-circle p-1 text-white' 
            aria-label='Attach a photo' 
          />
        </div>
      </div>
      {emoji && 
        <div className='emoji-container position-absolute'>
          <Picker onEmojiClick={addEmoji} />
        </div>
      }
    </>
  );
}

export default NewConversation;
