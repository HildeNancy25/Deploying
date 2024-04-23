import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='p-4'>
    <section className='bg-red-300 h-[96vh] border-2 border-blue-500 rounded-2xl'>
      <div className='p-1'>
        <div  className='bg-green-300 p-3 border-2 border-blue-500 rounded-2xl'>
          <p> Jane Doe</p>
        </div>
        <div className='flex  p-2'>
          <div className='flex flex-col gap-6 p-6'>
            <Link to='/' className=' hover:text-red-600' >Home</Link>
            <Link to='/about' className=' hover:text-red-600'>About</Link>
            <Link to='/contact' className=' hover:text-red-600'>Contact</Link>
          </div>
          <div className='p-9 bg-yellow-200 h-[85vh] w-full border-2 border-blue-500 rounded-2xl ml-10'> 
            About me
          </div>
        </div>
      </div>
    </section>
    </div>

    </>
  )
}

export default About