import React, { useState } from 'react';
import ConversationItem from './ConversationItem';

const messages = [
  {
    id: 1,
    name: "Dharmendra Kumar",
    title: "Developer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    latestText: "Hello there, I am waiting for you..",
    createAt: "June 25",
    count: 5
  },
  {
    id: 2,
    name: "Sanjay Kumar",
    title: "Entrepreneur",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    latestText: "Hello there, I am waiting for you..",
    createAt: "3h",
    count: 2
  },
  {
    id: 3,
    name: "Aditya Sriwastav",
    title: "Entrepreneur",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    latestText: "Hello there, I am waiting for you..",
    createAt: "June 24",
    count: 7
  },
  {
    id: 4,
    name: "Abhishek Kumar",
    title: "Entrepreneur",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    latestText: "Hello there, I am waiting for you..",
    createAt: "June 26",
    count: 3
  },
];

const ConversationList = () => {
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  const handleConversationItemSelected = (index) => {
    setSelectedConversationIndex(index);
  };

  return (
    <div>
      {messages.map((item, index) => (
        <ConversationItem
          key={item.id}
          id={item.id}
          name={item.name}
          title={item.title}
          imageUrl={item.imageUrl}
          latestText={item.latestText}
          createAt={item.createAt}
          onConversationItemSelected={() => handleConversationItemSelected(index)}
          isActive={index === selectedConversationIndex}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default ConversationList;
