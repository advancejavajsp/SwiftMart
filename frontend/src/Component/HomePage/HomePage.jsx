import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Outlet/>
      
      <Footer/>
      </>
  )
}

export default HomePage
