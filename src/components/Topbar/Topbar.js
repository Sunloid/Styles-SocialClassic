import React from 'react'
import User from '../../assets/person/1.jpeg'
import './topbar.css'

const Topbar = () => {
  return (
    <div className='Topbar-new'>
        <nav className='navbar navbar-expand-md bg-primary '>
        <div className='container-fluid d-flex '>
            <a className='navbar-brand text-light' href='#'>SunloidSocial</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#yes" aria-controls="yes" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div className='collapse navbar-collapse exp-right' id='yes'>
            <ul className='exp-search navbar-nav d-flex w-75'>
              <li className='nav-item w-100 pe-5 d-flex align-items-center bg-light rounded-pill '>
                <a href='#' className="fa-solid fa-magnifying-glass text-dark text-decoration-none ms-2"></a>
                <input className='searchbar w-100 bg-light border-0' type='text' placeholder='Search for a friend, post or a video'/>
              </li>
              <div className='d-flex'>
                <li className='nav-item'>
                  <a href='/home' className='nav-link text-light'>Homepage&nbsp;</a>  
                </li>
                <li className='nav-item'>
                  <a href='/profile' className='nav-link text-light'>Profile</a>
                </li>
              </div>
            </ul>
          </div>
          <div className='collapse navbar-collapse nav-right' id='yes'>
            <ul className='navbar-nav'>
                <li className='nav-item d-flex align-items-center '>   
                <a class="fa-solid fa-user fa-lg topbarLogo1 text-light text-decoration-none" href='#' ></a>
                <a class="fa-solid fa-message fa-lg topbarLogo1 text-light text-decoration-none ms-2" href='#'></a>
                <a class="fa-solid fa-bell fa-lg topbarLogo1 text-light text-decoration-none ms-2" href='#'></a>
                <a href='/'> <img src={User} className='pfp-exp rounded-5 ms-3' /> </a>
                </li>
            </ul>
          </div>
          </div>
        </nav>
    </div>
  )
}

export default Topbar