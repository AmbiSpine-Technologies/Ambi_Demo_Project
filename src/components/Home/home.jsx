import React, { useEffect, useState } from "react";
import "./home.css";
import PostCard from "./PostCard";
import ProfileCard from "../../pages/Card/Profile-Card";
import Spread_News from "../../pages/Card/Spread-news";
import FollowCard from "../../pages/Card/follow_sidebar/follow-card";
import Loading from "../../layout/loading";
import RepostCard from "./RepostCard";
// import StoryVideoCard from "./../../pages/Card/storyvideocard";
import StoryUserCarousel from './../carosuel/storyuserprofilecarousel';
import PostHome from "./PostHome";

const HomePageComponent = ({scrollableContentRef}) => {
  const [loading, setLoading] = useState(true);
  const [reposts, setReposts] = useState([]);
  const [isStory, setStory] =  useState(false);

  const handleRepost = (repost) => {
    setReposts([repost, ...reposts]);
  };
  console.log(reposts);

  function StoryClick(){
    setStory(!isStory);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-3">
          <div className="home-left d-flex flex-column justify-content-center align-items-center">
            <ProfileCard />
          </div>
        </div>
        <div className="col-6 scrollable-content" ref={scrollableContentRef}>
          <div className="d-flex gap-5">
            <div onClick={StoryClick} className="position-relative">
              <div className="person person-1">
                <img src="person.jpeg" alt="" className="img-1" />
                <img src="person.jpeg" alt="" className="img-2" />
                <span>1L+</span>
              </div>
              <p>Stories</p>
            </div>
            { isStory && <div className=" position-absolute Story-container "  >
              <StoryUserCarousel />
              </div>}
            <div>
              <div className="person person-1">
                <img src="person.jpeg" alt="" className="img-1" />
                <img src="person.jpeg" alt="" className="img-2" />
                <span>20k</span>
              </div>
              <p>Audio Room</p>
            </div>
            <div>
              <div className="person person-1">
                <img src="person.jpeg" alt="" className="img-1" />
                <img src="person.jpeg" alt="" className="img-2" />
                <span>14k</span>
              </div>
              <p>Video Room</p>
            </div>
          </div>
          <div className="home-center">
            {/* <PostCard />
            <PostCard /> */}
                {/* <PostCard onRepost={handleRepost} /> */}
                <PostHome onRepost={handleRepost}/>
          {reposts.map((repost, index) => (       
            <div className="mt-2">
              <RepostCard key={index} repost={repost} onRepost={handleRepost} />
            </div>
          ))}
               {/* <PostCard onRepost={handleRepost} /> */}
               <PostHome onRepost={handleRepost}/>
          {reposts.map((repost, index) => (       
            <div className="mt-2">
              <RepostCard key={index} repost={repost} onRepost={handleRepost} />
            </div>
          ))}
         
          </div>
        </div>
        <div className="col-3 mt-2">
          <div className="home-right d-flex flex-column justify-content-center align-items-center">
            <FollowCard />
            <Spread_News />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
