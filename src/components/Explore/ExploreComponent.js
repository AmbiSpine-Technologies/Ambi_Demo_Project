import React, { Fragment } from 'react';
import "./explore.css";
import Main_Left from './Main_Left';
import Main_Right from './Main_Right';
import { AiFillAudio, AiOutlineRise } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io5";

const btns = [
  { id: 1, title: "Trending" },
  { id: 2, title: "Reels" },
  { id: 3, title: "Post" },
  { id: 4, title: "Audios" },
  { id: 5, title: "Videos" },
];

const ExploreComponent = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-light">
        <div className="row">
          

          <div className="col-3">
            <Main_Right />
          </div>

          <div className="col-6 bg-white">
            <div className='mt-3'>
              <form className="p-2 w-100 justify-content-between align-items-center border border-1 d-flex" style={{ background: "rgb(196, 236, 222)" }}>
                <input
                  type="text"
                  placeholder="Search.."
                  className='w-100 border-0 bg-transparent'
                  style={{ outline: "none" }}
                />
                <div className="d-flex">
                  <IoOptionsOutline className="fs-6" />
                  <AiFillAudio className="me-4 fs-6" />
                </div>
              </form>

              <div className="w-100 mt-2 d-flex justify-content-between align-items-center">
                {btns.map((item) => (
                  <button key={item.id} className="btn btn-light w-25 fw-semibold me-1 btn-sm">{item.title}</button>
                ))}
              </div>
            </div>

            <div className="trending mt-3">
              <h3 className="fs-6">
                <AiOutlineRise className="fs-3 fw-bold text-primary" />
                <span className="ms-3">AI</span>
              </h3>
              <h3 className="fs-6">
                <AiOutlineRise className="fs-3 fw-bold text-primary" />
                <span className="ms-3">India is going to create history</span>
              </h3>
              <h3 className="fs-6">
                <AiOutlineRise className="fs-3 fw-bold text-primary" />
                <span className="ms-3">Now we gonna create history</span>
              </h3>
              <h3 className="fs-6">
                <AiOutlineRise className="fs-3 fw-bold text-primary" />
                <span className="ms-3">Atmanirbhar Bharat</span>
              </h3>
              <h3 className="fs-6">
                <AiOutlineRise className="fs-3 fw-bold text-primary" />
                <span className="ms-3">Clean India, Healthy India</span>
              </h3>
            </div>
          </div>

          <div className="col-3">
            <Main_Left />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ExploreComponent;
