import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faHeart, faPlusSquare, faPerson } from '@fortawesome/free-solid-svg-icons'

function Sidenav() {
  return (
    <div className='d-flex flex-column'>
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
            <li className='mt-5'><FontAwesomeIcon icon={faHome} size="2x"/></li>
            <li className='mt-5'><FontAwesomeIcon icon={faSearch} size="2x"/></li>
            <li className='mt-5'><FontAwesomeIcon icon={faHeart} size="2x"/></li>
            <li className='mt-5'><FontAwesomeIcon icon={faPlusSquare} size="2x"/></li>
            <li className='mt-5'><FontAwesomeIcon icon={faPerson} size="2x"/></li>
        </ul>
    </div>
  )
}

export default Sidenav