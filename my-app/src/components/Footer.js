import React from 'react'
import "../bootstrap.css";


function Footer() {
  return (
    <footer className='container footer mt-auto py-3'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Meta</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>About</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Blog</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Jobs</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Help</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>API</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Privacy</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Terms</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Top Accounts</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Hashtags</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Locations</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Instagram Lite</a></li>
        <li className='nav-item'><a className='nav-link px-2 text-muted'>Contact Uploading & Non-Users</a></li>
      </ul>
    </footer>
  )
}

export default Footer