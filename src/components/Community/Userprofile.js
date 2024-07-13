import React from "react";

export default function Userprofile({ description }) {
  return (
    <div className="d-flex justify-content-between align-items-center mx-3 my-2">
      <div className="d-flex">
        <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
         width="50" height="40" className="img-fluid rounded-circle me-2" alt="..." />
        <div className="mt-2">
          <h6 className="fs-6 fw-semibold">Aditya Shivastava</h6>
          <p className="text-small fw-normal text-secondary">{description}</p>
        </div>
      </div>
      <div style={{marginTop: "-20px"}}>
        <button type="button" className="btn rounded-5 px-3 btn-outline-success">Follow</button>
      </div>
    </div>
  );
}
