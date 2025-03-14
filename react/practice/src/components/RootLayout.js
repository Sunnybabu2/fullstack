import React from 'react'
import NavBar from './NavBar'
import {Provider} from 'react-redux'
import store from '../store/store'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
     <NavBar/>
      
      <main>
         <Outlet/>
      </main>
       </Provider>
    </>
  )
}

export default RootLayout