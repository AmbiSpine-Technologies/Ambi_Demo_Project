
import "./home.css"
import PostCard from "./PostCard";
import ProfileCard from "../../pages/Card/Profile-Card";
import TextCard from "../../pages/Card/TextCard";
import Spread_News from "../../pages/Card/Spread-news";
import NetworkCard from "../../pages/Card/Network-Card";
import Spreadslive from "../../pages/Card/Spreads-live";
import FollowCard from "../../pages/Card/follow_sidebar/follow-card";
import EventsCard from "../../pages/Card/Events-Card";
import Loading from "../../layout/loading";
import { useEffect, useState } from "react";


const HomePageComponent=()=>{

  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

    return(
      <div className="container-fluid bg-light">
      <div className="row">
      <div className="col-3">
          <div className="home-left d-flex flex-column justify-content-center align-items-center">
          <ProfileCard/>
          <TextCard/>
          <Spreadslive/>
          <EventsCard/>
          </div>
      </div>
        <div className="col-6">
          <div className="d-flex gap-5">
           <div>
           <div className="person person-1">
            <img src="person.jpeg" alt="" className="img-1" />
             <img src="person.jpeg" alt="" className="img-2"/>
            <span>1L+</span>
            </div>
            <p>Stories</p>
           </div>
           <div>
           <div className="person person-1">
            <img src="person.jpeg" alt="" className="img-1" />
             <img src="person.jpeg" alt="" className="img-2"/>
            <span>20k</span>
            </div>
            <p>Audio Room</p>
           </div>
           <div>
           <div className="person person-1">
            <img src="person.jpeg" alt="" className="img-1" />
             <img src="person.jpeg" alt="" className="img-2"/>
            <span>14k</span>
            </div>
            <p>Video Room</p>
           </div>
          
            
          </div>
          <div className="home-center">
            < PostCard/>
            < PostCard/>
          </div>
          </div>
          <div className="col-3 mt-2">
          <div className="home-right d-flex flex-column justify-content-center align-items-center">
        <FollowCard/>
         <Spread_News/>
        <NetworkCard/>
         </div>
          </div>
        </div>
          
        </div>
    )
}

export default HomePageComponent;