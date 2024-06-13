import React, { Fragment } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this import is present

function ColonCard() {
  return (
    <Fragment>
      <div className='card p-3' style={{width:"250px"}}>
        <ul className='list-unstyled gap-3'>
        <li className='mb-2'>
            <a href="#" className='text-decoration-none fw-normal fs-6 text-secondary d-flex align-items-center'>
            <i className="bi bi-bookmark me-2 fs-6"></i>
              <span>Save</span>
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className='text-decoration-none fw-normal fs-6 text-secondary d-flex align-items-center'>
            <i class="bi bi-x me-2 fs-5"></i>
              <span>Not Interested</span>
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className='text-decoration-none fw-normal fs-6 text-secondary d-flex align-items-center'>
            <i class="bi bi-person-slash me-2 fs-5"></i>
              <span>Unfollow i am Aditya</span>
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className='text-decoration-none fw-normal fs-6 text-secondary d-flex align-items-center'>
            <i class="bi bi-link-45deg me-2 fs-5"></i>
              <span>Copy link</span>
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className='text-decoration-none fw-normal fs-6 text-secondary d-flex align-items-center'>
            <i class="bi bi-code me-2 fs-5"></i>
              <span>Embed Post</span>
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className='text-decoration-none fw-normal fs-6 text-secondary d-flex align-items-center'>
            <i class="bi bi-exclamation-circle me-2 fs-5"></i>
              <span>Report</span>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default ColonCard;
