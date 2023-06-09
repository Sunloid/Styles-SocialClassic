import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import Feed from '../Feed/feed'
import Rightbar from '../Rightbar/rightbar'
import Topbar from '../Topbar/Topbar'

function home() {
  return (
    <div>
      <Topbar/>
        <div className='d-flex body-1'>
          <Sidebar/>
          <Feed/>
          <Rightbar/> 
      </div>
    </div>
  )
}

export default home