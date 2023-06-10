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
              <img src={user03} className='tweet-pfp rounded-circle'/>
              <p className='tweet-name fw-bold'>Safak Kocaoglu</p>
              <p className='tweet-time text-secondary'>1 minute ago</p>
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
                  <h4 className='mb-0'>{count} {count <= 1 ? "person" : "people"} liked it!</h4>
              </div>
              <div>
                <button 
                    className='fa-solid fa-trash fa-xl tweet-delete text-danger' 
                    onClick={handleDelete} 
                    >
                    </button>
                <button className='btn text-success fa-xl fa-solid fa-bookmark'></button> 
              </div>
            </div>
            </div>
        </ul>
    </list>
    </>
  )
}

export default ListTodo