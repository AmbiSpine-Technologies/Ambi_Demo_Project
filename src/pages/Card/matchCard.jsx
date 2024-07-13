import React, { useState } from 'react';
import "./matchcard.css";
import { VscVerifiedFilled } from "react-icons/vsc";

const ProfileCard = ({ profile, onFollowToggle }) => {
  const [isFollowing, setIsFollowing] = useState(profile.isFollowing);

   const handleFollowClick = () => {
    const newIsFollowing = !isFollowing;
    setIsFollowing(newIsFollowing);
    onFollowToggle(profile.id, newIsFollowing);
  };

  return (
    <div className="match-card">
      <div className="avatar">
        <img
          src={profile.image}
          alt="Avatar"
        />
      </div>
      <div className="titles ms-2">
        <div className="d-flex">
          <h4>{profile.name}</h4>
          <VscVerifiedFilled className="circle-icons mt-1" />
        </div>
        <div className="d-flex align-items-center gap-0">
          <span className="badges">@{profile.username}</span>
          <span className="badges">{profile.title}</span>
        </div>
        <div className='mt-1'>
          <p className='me-1 fw-semibold' style={{ fontSize: "0.7rem" }}>
            {profile.description}
          </p>
          <div className='mt-0'>
            <button className='btn btn-primary btn-sm btn-follow' onClick={handleFollowClick}>
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};





const MatchCard = ({ title, profiles = [], onFollowToggle }) => {
  const [Expand, setExpand] = useState(false);

  const previewCard = 2;

  return (
    <div className='match-container'>
      <div className='card p-1 border-0'>
        <h6 className='card-title'>{title}</h6>
        {Expand ? profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} onFollowToggle={onFollowToggle} />
        )) : profiles.slice(0, previewCard).map(profile => (
          <ProfileCard key={profile.id} profile={profile} onFollowToggle={onFollowToggle} />
        ))}
        <a href="#" className="text-decoration-none ms-2 mb-2" onClick={(e) => { e.preventDefault(); setExpand(!Expand); }}>
          {Expand ? 'See less' : 'See more'}
        </a>
      </div>
    </div>
  );
};

export default MatchCard;
