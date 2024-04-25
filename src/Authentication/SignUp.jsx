import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div  className='bg-green-300 h-[98vh] w-full border-2 border-red-400 rounded-2xl flex flex-col items-center p-10'>
        <p> LOGO HERE </p>
        <div className='flex flex-col items-center bg-yellow-200 p-5 gap-6 border-2 border-blue-500 rounded-2xl mt-10'>
            <p>SIGN UP</p>
            <input type='text' name='text' placeholder='names'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-full'> 
            </input>
            <input type='email' name='email' placeholder='email'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-full'> 
            </input>
             <input type='password' name='password' placeholder='password'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-[62vh]'> 
            </input>
            <input type='password' name='password' placeholder='confirm password'
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-full'> 
            </input>
            <Link to='/landing-page' className='w-full'> <button className='bg-blue-300 p-1 w-full border-2 border-blue-500 rounded-xl'>Sign Up</button></Link>
            <p className='flex gap-2 text-blue-700 mb-5'>Already have an account? <Link to='/' className='text-red-400'>Sign in</Link></p>
        </div>
    </div>
  )
}

export default SignUp