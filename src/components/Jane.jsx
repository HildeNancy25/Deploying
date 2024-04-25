import React from 'react'
import { Link } from 'react-router-dom'

const Jane = () => {
  return (
    <>
    <div  className='bg-green-300 p-2 px-8 border-2 border-blue-500 rounded-2xl flex justify-between items-center'>
        <p> Jane Doe</p>
        <Link to='/'> <button className='bg-blue-300 p-1 px-3 w-full border-2 border-blue-500 rounded-xl'> LOG OUT </button> </Link>
    </div>
    </>
  )
}

export default Jane