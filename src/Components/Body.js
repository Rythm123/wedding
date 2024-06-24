import React from 'react'
import './Body.scss';
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