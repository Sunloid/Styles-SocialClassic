import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './components/Topbar/topbar.css';
import './components/Sidebar/sidebar.css'
import './index.css'
import './components/Feed/feed.css'
import './components/Rightbar/rightbar.css'
import Home from './components/Home/home';
import Profile from './components/Profile/profile';
import Login from './components/Login/login'
import {
  
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='' element={<Login/>}/>
      </Routes>
    </Router>  
  </React.StrictMode>
);

