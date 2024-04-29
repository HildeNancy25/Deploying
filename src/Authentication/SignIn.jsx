import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password:''
  });

  const handleSubmit =(event) =>{
    event.preventDefault();
    if (!email){
      setError({...error, email:'Email is required!'});
      return;
    }
    if(!password){
      setError({...error, password:'Enter password!'})
      return;
    }
    if (email && password){
      setTimeout(() =>{
          navigate('/landing-page')
        }, 1000)
    } 
    
      }
      
      // setEmail('')
      // setPassword('')
      // setError({email:'', password:''})
    

  
  return (
    <div  className='bg-green-300 h-[98vh] w-full  border-2 border-red-400 rounded-2xl flex flex-col items-center p-10'>
        <p> LOGO HERE </p>
        <div className='flex flex-col items-center bg-yellow-200 p-5 gap-6 border-2 border-blue-500 rounded-2xl mt-10'>
            <p>SIGN IN</p>

            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='email' value={email}  onChange={(event) => setEmail(event.target.value)}
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-full'> 
            </input>
            <div className='text-red-700'>{error.email}</div>
             <input type='password' name='password' placeholder='password' value={password}  onChange={(event) => setPassword(event.target.value)}
            className='bg-red-300 placeholder-blue-800 border-2 border-blue-500 rounded-xl p-1 pl-2 w-[62vh]'> 
            </input>
            <div className='text-red-700'>{error.password}</div>

            <Link to='' className='w-full'>
              <button onClick={handleSubmit} type='submit' className='bg-blue-300 p-1 w-full border-2 border-blue-500 rounded-xl'>Sign In</button>
            </Link> </form>

            <p className='flex gap-2 text-blue-700'>Don't have an account? <Link to='/sign-up' className='text-red-400'>Sign up</Link></p>
            <div className='flex gap-3'>
              <Link to='/forgot-password' className='text-blue-700'>Forgot password</Link>
              <Link to='/reset-password' className='text-blue-700'>Reset password</Link>
            </div>
           
        </div>
    </div>
  )
}

export default SignIn