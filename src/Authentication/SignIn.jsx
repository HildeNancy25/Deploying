import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div  className='bg-green-300 h-[80vh] w-full border-2 border-red-400 rounded-2xl flex flex-col items-center p-10'>
        <p> LOGO HERE </p>
        <div className='flex flex-col items-center bg-yellow-200 p-5 gap-6 border-2 border-blue-500 rounded-2xl mt-10'>
            <p>SIGN IN</p>
            <input type='email' name='email' placeholder='email'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-full'> 
            </input>
             <input type='password' name='password' placeholder='password'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-[62vh]'> 
            </input>
            <Link to='/' className='w-full'><button className='bg-blue-300 p-1 w-full border-2 border-blue-500 rounded-xl'>Sign In</button></Link>
            <p className='flex gap-2 text-blue-700'>Already does not have an account? <Link to='/sign-up' className='text-red-400'>Sign up</Link></p>
            <Link to='/forgot-password' className='text-blue-700'>Forgot password</Link>
            <Link to='/reset-password' className='text-blue-700'>Reset password</Link>
        </div>
    </div>
  )
}

export default SignIn