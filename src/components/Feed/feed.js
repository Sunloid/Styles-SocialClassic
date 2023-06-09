import React, {useState} from 'react'
import User from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/assets/person/1.jpeg'
import Post from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/components/Post/post.jsx'
import dataPost from 'C:/Users/sunlo/OneDrive/Desktop/Project-1/project/src/components/data.js'
import ListTodo from '../ListTodo/ListTodo'

function Feed() {
  const handleData = dataPost.map((info)=>{
    return(
      <Post
          userName={info.userName}
          profilePic={info.profilePic}
          postPic={info.postPic}
          time={info.time}
          caption={info.caption}
      />
    )
  })
    const [ input , setInput ] = useState("")
    const [ tweet , setTweet ] = useState([])
    const onInputChange = (event)=>{
        setInput(event.target.value) 
    }
    const addList = (input)=>{
        setTweet([input,...tweet])
    }
    const deleteList=(GST)=>{
        let newList=[...tweet]
        newList.splice(GST,1)
    }
    const tweetMap= tweet.map((item,i)=>{
        return(
          <ListTodo 
              key={i}
              index={1}
              item={item}
              deleteItem={deleteList}
          />
        )
    })

  return (
    <div className='feed d-flex flex-column'>
        <div className='feed-wrapper bg-light rounded-4'>
          <form>

          <div className='d-flex align-items-center feed-wrapper-1'>
              <img src={User} alt='user' className='feed-pfp rounded-pill'/>
              <input 
                  className='mb-0 text-secondary feed-input bg-light'
                  input="text" 
                  value={input}
                  placeholder='Share your thoughts with the world'
                  required
                  onChange={onInputChange}
                  />
          </div>
          <hr className='bg-dark feed-hr '/>
          <div className='d-flex feed-buttons'>
            <a href='#' className='d-flex align-items-center feed-button-1  text-decoration-none text-dark'>
              <a href='#' class="fa-solid fa-photo-film text-decoration-none fa-2xl text-info"></a>
              <span className='feed-para fw-semibold'>Videos or Photos</span>   
            </a>
            <a href='#' className='d-flex align-items-center feed-button-1 text-decoration-none text-dark'>
              <a href='#' class="fa-solid fa-tag text-decoration-none fa-2xl text-info"></a>
              <span className='feed-para fw-semibold'>Tag</span>
            </a>
            <a href='#' className='d-flex align-items-center feed-button-1 text-decoration-none text-dark'>
              <a href='#' class="fa-sharp fa-solid fa-location-dot text-decoration-none fa-2xl text-info"></a>
              <span className='feed-para fw-semibold'>Location</span>
            </a>
            <a href='#' className='d-flex align-items-center feed-button-1 text-decoration-none text-dark '>
              <a href='#' class="fa-solid fa-face-smile text-decoration-none fa-2xl text-info"></a>
              <span className='feed-para fw-semibold'>Feeling</span>
            </a>
            <button 
            className='btn btn-success feed-share'
            type='submit'
            onClick={()=>{
              addList(input)
              setInput("")
            }}
            >
              Share
            </button>
          </div> 
          </form>
        </div>
        <div>
          <div>
            <span>{tweetMap}</span>
          </div>
        </div>
        {handleData}
    </div>
  )
}

export default Feed