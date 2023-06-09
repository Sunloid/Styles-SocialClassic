import React from 'react'
import Ad from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/ad.png'
import user2 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/2.jpeg'
import user3 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/3.jpeg'
import user4 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/4.jpeg'
import user5 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/5.jpeg'
import user6 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/6.jpeg'
import user7 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/7.jpeg'
import user9 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/9.jpeg'
import user10 from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/10.jpeg'

function rightbar() {
  return (
    <div className='rightbar'>
        <img src={Ad} className='rounded-3 rightbar-ad'/> 
        <h4 className='rightbar-header'>Online Friends</h4>
        <div className='rightbar-ppl'>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user2} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Joe Schmoe</span>
            </a> 
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user3} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Janell Shrum</span>
            </a>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user4} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Alex Durden</span>
            </a>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user5} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Judy Raise</span>
            </a>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user6} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Ben Parker</span>
            </a>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user7} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Bart Tennison</span>
            </a>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user9} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Ken Nelson</span>
            </a>
            <a href='#' className='rightbar-anchor d-flex align-items-center text-decoration-none text-dark'>
                <img src={user10} className='rightbar-pfp rounded-circle'/>
                <span className='rightbar-para'>Iris West </span>
            </a>
        </div>
    </div>
    
)
}

export default rightbar