import React from 'react'
import '../Login/login.css'

function login() {
  return (
    <div className='login'>
      <div className='login-wrapper  d-flex justify-content-center align-items-center'>
        <div className='header'>
          <h1 className='login-header'>Sunloidsocial</h1>
          <h3 className='login-header-1'>Connect with your friends and <br></br>meet new people around the world!</h3>
        </div>
        <div>
          <div className='login-card d-flex flex-column rounded-4 align-items-center'>
            <input type='text' placeholder='Email' className=' login-input rounded-2'/>
            <input type='text' placeholder='Password' className='login-input  rounded-2'/>
            <a href='/home' type='submit' className='login-button-1 btn fs-5 rounded-3 text-light btn-success'>Log In</a>
            <button type='submit' className=' btn login-button rounded-3 text-light fs-5' >Sign Up</button>
          </div>     
        </div>
      </div>
    </div>
  )
}

export default login