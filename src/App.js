import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AppContext from './utils/AppContext';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './Components/Login';
import Event from './Components/Event';
import WithAuth from './Components/WithAuth';
import BackgroundMusic from './Components/BackgroundMusic';
import rangrez from './assets/rangrez.mp3'


function App() {

  const [state,setState]=useState('heelo')
  const router=createBrowserRouter([
    {
      path:'/',
      element:<> <Navbar/> <Body/> </>,
      children:[
        {
          path:'/',
          element:WithAuth(Home)
        },

        {
          path:'/login',
          element:<Login/>
        },

        {
          path:'/event',
          element:<Event/>
        }


      ]
    }
  ])
  
  return (
    <AppContext.Provider value={{state}}>
      {/* <BackgroundMusic src={rangrez} /> */}
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;


/**
 * 
 * Navbar
 * Body
 * 
 * 
 */