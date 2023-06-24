import React,{useState} from 'react'
import '../ListTodo/listTodo.css'
import user03 from '../../assets/person/1.jpeg'

const ListTodo = (props) => {
  const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count+1)   
    }
    function handleDisClick(){
        setCount(count-1)   
    }

    const handleDelete =() => {
      props.deleteItem(props.index)
    }
  return (
    <>
    <list>
        <ul className='tweet rounded-3'>
          <div className='tweet-1'>
            <div className=' d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src={user03} className='tweet-pfp rounded-circle mb-0'/>
                <div className='d-flex tweet-name-time'>
                  <p className='tweet-name fw-bold mb-0'>Safak Kocaoglu</p>
                  <p className='tweet-time text-secondary mb-0'>1 min ago</p>
                </div>
              </div>
              <div>
                <a class="fa-solid fa-bars text-decoration-none text-dark tweet-option"></a>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <span className='tweet-output'>{props.item} </span><br></br>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex tweet-like align-items-center'>
                  <button onClick={handleClick} class="post-button fa-solid fa-heart fa-xl text-danger"></button>
                  <button onClick={handleDisClick} className='post-button fa-solid fa-thumbs-down fa-xl text-info'></button>
                  <h4 className='mb-0 tweet-count'>{count} {count <= 1 ? "person" : "people"} liked it!</h4>
              </div>
              <div className='d-flex'>
                <button 
                    className='fa-solid fa-trash fa-md tweet-delete text-danger p-0' 
                    onClick={handleDelete} 
                    >
                    </button>
                <button className='btn text-success fa-md fa-solid fa-bookmark'></button> 
              </div>
            </div>
            </div>
        </ul>
    </list>
    </>
  )
}

export default ListTodo