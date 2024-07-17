import React, { useState } from 'react';
import "./notification.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const data = [
    {
        day: "Today",
        content: "Just had an amazing workout session at the gym! Feeling pumped and ready to conquer the day.",
        name: "Adity Sriwastav",
        image: "https://i.pinimg.com/736x/07/c9/f4/07c9f488cb6381d020a8397fe112c2cc.jpg"
    },
    {
        day: "Yesterday",
        content: "Exploring the beautiful beaches of Bali. The sunset here is breathtaking!",
        name: "Dharmendra Kumar",
        image: "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
    },
    {
        day: "2 days ago",
        content: "Finished reading 'Atomic Habits' by James Clear. Highly recommend it for anyone looking to improve their habits.",
        name: "Sanjay Kumar",
        image: "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
    },
   
    {
        day: "Last week",
        content: "Had a great time hiking in the mountains. Nature always has a way of refreshing the mind and body.",
        name: "Aman Pandey",
        image: "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
    },
];

const NotificationCard = ({ name, content, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedContent = content.length > 50 ? content.substring(0, 50) + '.....' : content;
    return (
        <div className='notification-card mt-2'>
            <img src={image} alt={name} />
            <p>
                <span className='title'> {name} </span>
                <span><BsFillCheckCircleFill className="circle-icons me-1" /></span>
                {isExpanded ? content : truncatedContent}
                {content.length > 50 && (
                    <span onClick={handleToggle} className="toggle-link text-primary">
                        {isExpanded ? ' show less' : ' see more'}
                    </span>
                )}
            </p>
        </div>
    );
};

function Notification() {
    return (
        <div className='cards p-2 bg-white' style={{ width: "450px" }}>
            <div className='heading d-flex justify-content-between align-items-center p-2 '>
                <p>Notification</p>
                <div className='icon'><i className="bi bi-gear"></i></div>
            </div>
            <div className='text-left'>
                {data.map((item, index) => (
                    <div key={index}>
                        <h6>{item.day}</h6>
                        <NotificationCard
                            name={item.name}
                            content={item.content}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;
