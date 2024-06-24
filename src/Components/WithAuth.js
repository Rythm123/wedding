import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const WithAuth = (Component) => {


  return (
    <>
      {localStorage.getItem('authenticated')==='true'? <Component/> : <Navigate to={"/login"} /> }
    </>
  
  )
}

export default WithAuth