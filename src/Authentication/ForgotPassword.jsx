import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div  className='bg-green-300 h-[98vh] w-full border-2 border-red-400 rounded-2xl flex flex-col items-center p-10'>
        <p> LOGO HERE </p>
        <div className='flex flex-col items-center bg-yellow-200 p-5 gap-6 border-2 border-blue-500 rounded-2xl mt-10'>
            <p>Forgot password</p>
            <input type='email' name='email' placeholder='email'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-[62vh]'> 
            </input>
            
            <Link to='/' className='w-full'> <button className='bg-blue-300 p-1 w-full border-2 border-blue-500 rounded-xl mb-5'>Send password </button></Link>
        </div>
    </div>
  )
}

export default ForgotPassword