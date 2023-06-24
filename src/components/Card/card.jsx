import React, {useState} from 'react'
import '../Card/card.css'

const Card = (props) => {
  const [count, setCount] = useState(0)
    function handleLike(){
      setCount(count+1)
    }
    function handleDislike(){
      setCount(count-1)
    }
  return (
    <div className='w-100 d-flex justify-content-center card-wrapper border border-0'>
      <div className='card card-2 rounded-4'>
        <div className='card-body d-flex align-items-center'>
            <img src={props.profilePic} className='card-pfp rounded-circle'/>
            <div className='card-name-time'>
              <div className='card-title fw-bold me-5 mb-0 ms-2 card-username'>{props.userName}</div>
              <div className='text-secondary card-time '>{props.time}</div>
            </div>
        </div>
        <div className='card-body pt-0'>
          <div className='card-text '>{props.caption}</div>
        </div>
        <div className='d-flex justify-content-center'>
          <img  src={props.postPic} className='card-imp-top card-1 mb-3 rounded-3 pb-0' />
        </div>
        <div className='card-footer d-flex align-items-center'>
            <button onClick={handleLike} className="post-button fa-solid fa-heart fa-xl text-danger bg-light"></button>
            <button onClick={handleDislike} className='post-button fa-solid fa-thumbs-down fa-xl text-info bg-light'></button>
            <h4 className='mb-0 card-counter'>{count} {count <= 1 ? "person" : "people"} liked it!</h4>
        </div>
      </div>
    </div>
  )
}

export default Card