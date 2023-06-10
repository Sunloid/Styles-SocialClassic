import React, { useState } from 'react'
import './post.css'



const Post = (props)=>{
    const [count, setCount] = useState(0)
    function handleLike(){
        setCount(count+1)   
    }
    function handleDislike(){
        setCount(count-1)   
    }
    const PFP = props.profilePic
    return(
        <div className='feed-wrapper-2 rounded-4 '>
            <div className='d-flex justify-content-between align-items-center'>
                <a href='#' className='feed-anchor d-flex align-items-center text-decoration-none text-dark margin-075'>
                    <img src={props.profilePic} className='feed-pfp-2 rounded-pill'/>  
                    <span className='feed-para-1 fw-bold '>{props.userName}</span>   
                    <span className='feed-para-2 text-secondary'>{props.time}</span> 
                </a> 
                <a class="fa-solid fa-bars text-decoration-none text-dark feed-option"></a>
            </div>
            <div>
                <span className='margin-075 fw-normal feed-post-1'>{props.caption}</span>
                <img src={props.postPic} className='feed-post rounded-4'/>
            </div>
            <div className='d-flex post-like align-items-center'>
                <button onClick={handleLike} class="post-button fa-solid fa-heart fa-xl text-danger"></button>
                <button onClick={handleDislike} className='post-button fa-solid fa-thumbs-down fa-xl text-info'></button>
                <h4 className='mb-0'>{count} {count <= 1 ? "person" : "people"} liked it!</h4>
            </div>
        </div>
    )
}

export default Post