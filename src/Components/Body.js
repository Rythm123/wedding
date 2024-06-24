import React from 'react'
import './Body.scss';
import Login from './Login';
import Home from './Home';
import { Outlet } from 'react-router-dom';


const Body = () => {
  return (
    <div className="main-wrapper">
        {/* <Login/> */}
        <Outlet/>
    </div>
  )
}

export default Body