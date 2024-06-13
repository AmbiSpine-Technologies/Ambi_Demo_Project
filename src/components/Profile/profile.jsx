import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import Carousel from "../../layout/carosuel/carousel";
import ChartComponent from "../../layout/chartcomponent";
import TextCard from "../../pages/Card/TextCard";
import EventsCard from "../../pages/Card/Events-Card";
import Spread_news from "../../pages/Card/Spread-news";
import NetworkCard from "../../pages/Card/Network-Card";
import MatchCard from "../../pages/Card/matchCard";
import Terms_Service from "../../pages/Card/Terms_Service/Terms_Service";
import ActivitySection from "./ActiveSection";

const featuredPosts = [
  {
    category: "science",
    title: "Renewable Energy",
    description: "Solar panels and wind turbines generating renewable energy for green and sustainable future.",
    image: "https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.jpg?s=1024x1024&w=is&k=20&c=zmMsbQLf_RcuaKVH4coGYzZuFnD5FFUtTNAEo6yUO8o="
  },
  {
    category: "nature",
    title: "Ecological Call",
    description: "Abstract icon representing the ecological call to recycle and reuse in the form of a pond with a recycling symbol in the middle of a beautiful untouched jungle. 3d rendering.",
    image: "https://media.istockphoto.com/id/1340716614/photo/abstract-icon-representing-the-ecological-call-to-recycle-and-reuse-in-the-form-of-a-pond.jpg?s=1024x1024&w=is&k=20&c=qCgLki6nJ_PUS_4SEQ8Jwrot5BM4XPRUqMP8KkWjFH8="
  },
  {
    category: "science",
    description: "Young woman working on laptop in the nature . Leisure activities / Remote working concept.",
    image: "https://media.istockphoto.com/id/1305227027/photo/woman-relaxing-in-nature-and-using-technology.jpg?s=1024x1024&w=is&k=20&c=LZ8fvDOUuminrmchMm5emL7iSFMFwgl61pnnV2-lIpU="
  },
  {
    category: "nature",
    description: "Man hands holding global network and data customer connection on nature background.",
    image: "https://media.istockphoto.com/id/1165058709/photo/man-hands-holding-global-network-and-data-customer-connection-on-nature-background.jpg?s=1024x1024&w=is&k=20&c=kwbXH16oikt1Kf_6wE6G29F6gUrKB0WaUDgdkKwci1Q="
  },
  {
    category:"nature",
    description:"World sustainable environment concept design.Green earth for Environment Social and Governance. Solving environmental, social and management problems with figure icons.",
    image:"https://media.istockphoto.com/id/1398025593/vector/world-sustainable-environment-concept-design.jpg?s=1024x1024&w=is&k=20&c=07Rm_FWBJKy0BiZFhc3WX3WSU8HcQwogZKiz2eLEq-A="
  },
  {
    category: "feature",
    title: "Future Blogger",
    description: "A fantastic picture of the blogger of the future looking from his workplace to the beautiful view from the window.",
    image: "https://media.istockphoto.com/id/1030419404/photo/sci-fi-blogger-surrounded-by-nature.jpg?s=1024x1024&w=is&k=20&c=JAxAzTT5O6DVagdG9DV2_sBP9TPu1zOEfzRF7ZLxrnw="
  },
  {
    category: "science",
    image: "https://media.istockphoto.com/id/1364083209/photo/technology-in-the-field-digital-tablet.jpg?s=1024x1024&w=is&k=20&c=7sBXnhiZ_GRCtuRMDX2OjBiwEM5wbAuqqkVNE5mWFKk=",
    description: "Technology in the field - digital tablet"
  },
  {
    category: "feature",
    title: "Environmental Examination",
    description: "Biologist environmentalist examining the condition of the forest and the trees. Environmental conservation.",
    image: "https://media.istockphoto.com/id/1323675815/photo/ecologist-on-fieldwork-forester-examines-trees-in-their-natural-condition-in-the-forest-and.jpg?s=1024x1024&w=is&k=20&c=x176k_DhkPkHIptWaioOnEcrbunbGXrwjX7Wg-OBrJM="
  }
];

const btns = [
  {id:1,title:"Post"},
  {id:2,title:"Repost"},
  {id:3,title:"Shows"},
  {id:4,title:"Marketplace"},
]
const Profile = () => {
  const [selectedCategory, setSelectedCategory] = useState("feature");

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-3">
          <div className="main-left d-flex flex-column align-items-center" style={{ marginTop: "1rem" }}>
            <TextCard />
            <NetworkCard />
            <EventsCard />
          </div>
        </div>
        <div className="col-6 bg-white mt-4">
          <main className="profile-container">
            <div className="cover-img">
              <img src="https://i.pinimg.com/736x/07/c9/f4/07c9f488cb6381d020a8397fe112c2cc.jpg" alt="" />
              <span className="bi bi-bi-gear-fill"></span>
            </div>
            <div className="row">
             <div className="col-3">
             <div className="avatar-box">
                <div className="avatar">
                  <img src="https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg" alt="" />
                  <FaPlus className="plus-icons fs-4 pb-1" />
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center ms-2">
                  <div className="d-flex justify-content-between gap-1 w-100">
                    <h4 className="fs-6 fw-light">Aditya Srivastava</h4>
                    <VscVerifiedFilled className="fs-6 mt-1 text-primary" />
                  </div>
                  <span className="bg-light border border-0 p-0  text-center w-100"   style={{ fontSize: "0.8rem" }}>
                    @aditya/srivastava
                  </span>
                  <span className="bg-light mt-2 w-100 mt-1   text-center"   style={{ fontSize: "0.8rem" }}>
                    Entreprenure
                  </span>
                  <div className="d-flex mt-3">
                    <span className="fw-bold text-center text-secondary"
                     style={{ fontSize: "0.8rem" }}>100k <br />Follower</span>
                    <span className="fw-bold   text-secondary  text-center ms-3" 
                    style={{ fontSize: "0.8rem" }}> 30 <br />Following</span>
                  </div>
                </div>
              </div>
             </div>
              <div className="col-9">
              <div className="profile-content ms-3">
                <p className="fw-semibold">
                  Where can we find the courage to act in spite of fear? Trying to eliminate that which we react to
                  fearfully is a fool’s
                  errand because it locates the source of our fear outside ourselves, rather than within our own hearts.
                </p>
               <div className="d-flex flex-row-reverse">
               <div className="profile-btn float-end">
                  <button className="btns">Info</button>
                  <button className="btns">Edit Profile</button>
                  <button className="btns">Share Profile <IoIosShareAlt /></button>
                </div>
               </div>
              </div>
              </div>
            </div>
          </main>
          <hr />
          <div className="chart">
            <div className="d-flex justify-content-between">
              <div className="chart-list ms-3">
                <div>
                  <h4>Analytics</h4>
                  <ul>
                    <li>Average views</li>
                    <li>Average Likes</li>
                    <li>Recenttly Visits</li>
                    <li>Earth Appearances</li>
                    <li>Total time Expand</li>
                  </ul>
                  <select>
                    <option>More</option>
                    <option>Nature</option>
                    <option value="">Social</option>
                  </select>
                </div>
              </div>
              <ChartComponent />
            </div>
          </div>
          <hr />
          <div className="feature d-flex justify-content-left flex-column text-align-left text-left">
            <div className="ms-2">
              <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all" selected>All</option>
                <option value="feature">Featured-Post</option>
                <option value="nature">Nature</option>
                <option value="science">Science</option>
              </select>
            </div>
            <div className="mt-2 d-flex justify-content-center align-items-center">
              <Carousel posts={featuredPosts} category={selectedCategory} />
            </div>
          </div>
          <div className="">
            < ActivitySection activities={featuredPosts}/>
          </div>
        </div>

        <div className="col-3">
          <div className="main-left d-flex flex-column align-items-center" style={{ marginTop: "1rem" }}>
            <MatchCard />
            <Spread_news />
            <div>
              <Terms_Service />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
