import React from 'react'
import user2 from '../../assets/person/2.jpeg'
import user3 from '../../assets/person/3.jpeg'
import user4 from '../../assets/person/4.jpeg'
import user5 from '../../assets/person/5.jpeg'
import user6 from '../../assets/person/6.jpeg'
import user7 from '../../assets/person/7.jpeg'
import user8 from '../../assets/person/8.jpeg'
import user9 from '../../assets/person/9.jpeg'
import user10 from '../../assets/person/10.jpeg'

const Sidebar =()=>{
    return(
        <div className='sidebar bg-light text-dark'>
            <div className='sidebarList'>
                <ul>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-rss fa-xl icon1"></i>
                        <span className='fs-5'>Tweets</span>
                    </li> 
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-comment fa-xl icon1"></i>
                        <span className='fs-5'>Chats</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-circle-play fa-xl icon1"></i>
                        <span className='fs-5'> Videos</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-user-group fa-xl icon1"></i>
                        <span className='fs-5'> Groups</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-bookmark fa-xl icon1"></i>
                        <span className='fs-5'> Bookmarks</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-sharp fa-regular fa-circle-question fa-xl icon1"></i>
                        <span className='fs-5'> Questions</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-suitcase fa-xl icon1"></i>
                        <span className='fs-5'> Jobs</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-calendar-days fa-xl icon1"></i>
                        <span className='fs-5'> Events</span>
                    </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                    <li className='sidebarListItem'>
                        <i class="fa-solid fa-graduation-cap fa-xl icon1"></i>
                        <span className='fs-5'> Courses</span>
                    </li>
                    </a>
                </ul>
            </div> 
            <button className='sidebarMore border fw-bold btn btn-light'>Show More</button>
            <hr className='sidebarHr'/>
            <div className='sidebarUserList'>
                <ul>
                    <a  className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user2} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Joe Schmoe</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user3} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Janell Shrum</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user4} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Alex Durden</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user5} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Judy Raise</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user6} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Ben Parker</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user7} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Bart Tennison</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user8} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Ken Nelson</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user9} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Iris West</span>  
                        </li>
                    </a>
                    <a className='text-decoration-none text-dark' href='#'>
                        <li className='d-flex align-items-center sidebarUsers'>
                            <img className='user2 rounded-circle' src={user10} />  
                            <span className='fs-6 fw-medium sidebarPpl'> Joe Schmoe</span>  
                        </li>
                    </a>
                </ul>  
            </div>
        </div>
    )
}

export default Sidebar