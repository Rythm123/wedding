import React, { useEffect, useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
  const [showlogout,setShowLogout]=useState(true);
  useEffect(()=>{
    if(window.location.pathname === '/login'){
      setShowLogout(false)
    }
  },[])

  const handleClick=()=>{
    localStorage.clear();
    window.location.pathname='/'
  }

  return (
    <div className='navbar'>
        <h2 className='title'>I & R</h2>

        {showlogout && <button onClick={handleClick} className="logout">Logout</button>} 
    </div>
  )
}

export default Navbar