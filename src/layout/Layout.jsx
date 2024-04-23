import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Jane from '../components/Jane'

const Layout = () => {
  return (
    <>
    <div className='p-3'>
      <div className='bg-red-300 h-[90vh] border-2 border-blue-400 rounded-2xl p-3'>
        <Jane />
        <div className='flex'>
          <Outlet />
          <Header /> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout