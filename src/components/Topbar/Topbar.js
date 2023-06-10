import React from 'react';
import User from '../../assets/person/1.jpeg'

const Topbar = ()=>{
    return(
        <div className='w-100 d-flex topbar'>
            <div className='topbarLeft'>
                <h2 className='logo'>SunloidSocial</h2>
            </div>
            <div className='topbarCenter  bg-light d-flex rounded-pill'>
                <i className="fa-solid fa-magnifying-glass logo1 d-flex align-items-center" />  
                <input placeholder='Search for a friend, post or video' className='searchBar bg-light outline-style-none'/>
            </div>
            <div className='topbarRight d-flex align-items-center '>
                <div className='topbarLink text-light'>
                    <a className='topbarLink1 text-light text-decoration-none' href='/home'>Homepage</a>
                    <a className='topbarLink1 text-light text-decoration-none' href='/profile'>Profile</a>    
                </div> 
                <div className='topbarLogo text-light d-flex'>
                    <a class="fa-solid fa-user fa-lg topbarLogo1 text-light text-decoration-none" href='#' ></a>
                    <a class="fa-solid fa-message fa-lg topbarLogo1 text-light text-decoration-none" href='#'></a>
                    <a class="fa-solid fa-bell fa-lg topbarLogo1 text-light text-decoration-none" href='#'></a>
                </div>
                <img src={User} className='user1 rounded-5' />
            </div>
        </div>
    )
}

export default Topbar