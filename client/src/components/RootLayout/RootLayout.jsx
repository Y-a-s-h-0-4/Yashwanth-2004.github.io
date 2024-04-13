import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout