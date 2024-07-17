import React from 'react';

const RequestModal = () => {
  return (
    <div className="modal-dialog modal-dialog-centered" style={{width:"600px"}}>
      <div className="modal-content">
        <div className="d-flex p-2 justify-content-between border-bottom">
          <h3 className="fs-5 ms-2" id="exampleModalLabel">Request</h3>
          <button
            type="button"
            className="btn-close btn-sm me-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="d-flex">
            <img
              src="https://i.pinimg.com/736x/07/c9/f4/07c9f488cb6381d020a8397fe112c2cc.jpg"
              alt=""
              width="50px"
              height="50px"
              className="rounded-circle border"
            />
            <div className='ms-3'>
              <span>Rahul Singh sent you a <strong>friend request</strong></span> <br />
              <span className="text-muted">7 min</span>
              <div className="text-center mt-2">
                <button className="btn btn-outline-danger btn-sm me-2">Reject</button>
                <button className="btn btn-outline-primary btn-sm">Accept</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-top pt-2">
          <button type="button" className="btn  btn-link">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
