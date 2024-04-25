import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className='flex'>
            <div className='flex flex-col gap-6 p-6'>
                <Link to='/landing-page' className=' hover:text-red-600' >Home</Link>
                <Link to='/about' className=' hover:text-red-600'>About</Link>
                <Link to='/contact' className=' hover:text-red-600'>Contact</Link>
            </div>
        </div>
    </>
  )
}

export default Header