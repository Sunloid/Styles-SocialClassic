import React from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/sidebar'
import Feed from '../Feed/feed'
import './profile.css'
import ProfileTop from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/post/1.jpeg'
import userProfile from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/1.jpeg'
import user02 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/2.jpeg'
import user03 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/3.jpeg'
import user04 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/4.jpeg'
import user05 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/5.jpeg'
import user06 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/6.jpeg'
import user07 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/7.jpeg'

function profile() {
  return (
    <div>
        <Topbar/>
        <div className='d-flex profile'>
          <Sidebar/>
          <div className='profile-right'>
            <div className='profile-rightTop'>
              <div className='profile-cover'>
                <img src={ProfileTop} className='profile-banner'/>
              </div>
              <div className='profileName d-flex flex-column align-items-center'>
                <img src={userProfile} className='profileUserPfp rounded-circle' />
                <h3 className='fw-bold mb-0'>Safak Kocaoglu</h3>
                <span>Love for all, Hatred for none.</span>
              </div>
            </div>
            <div className='profile-rightBottom d-flex '>
              <Feed/>
              <div className='profile-UserInfo'>
                <h3 className='fw-bold'>User Information</h3>  
                <h5 className='profile-UserInfo1'>
                  <span className='text-secondary  '><b>City:   </b></span>New york<br></br><br></br>
                  <span className='text-secondary '><b>From:   </b></span>Madrid<br></br><br></br>
                  <span className='text-secondary '><b>RelationShip:   </b></span>Single<br></br><br></br>
                </h5>
                <h3 className='fw-bold'>User Friends</h3>
                <div className='d-flex'>
                  <a className='hero text-decoration-none text-dark' href='#'>
                    <img src={user02} className='userInfoPfp rounded-3'/>
                    <p>Joe Schmoe</p>
                  </a>
                  <a className='hero text-decoration-none text-dark' href='#'>
                    <img src={user03} className='userInfoPfp rounded-3'/>
                    <p>Janell Shrum</p>
                  </a>
                  <a className='hero text-decoration-none text-dark' href='#'>
                    <img src={user04} className='userInfoPfp rounded-3'/>
                    <p>Iris West</p>
                  </a>
                </div>
                <div className='d-flex'>
                  <a className='hero text-decoration-none text-dark' href='#'>
                    <img src={user05} className='userInfoPfp rounded-3'/>
                    <p>Bart Tennison</p>
                  </a>
                  <a className='hero text-decoration-none text-dark' href='#'>
                    <img src={user06} className='userInfoPfp rounded-3'/>
                    <p>Alex durden</p>
                  </a>
                  <a className='hero text-decoration-none text-dark' href='#'>
                    <img src={user07} className='userInfoPfp rounded-3'/>
                    <p>Judy Raise</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default profile