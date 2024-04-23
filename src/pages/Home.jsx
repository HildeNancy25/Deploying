import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
    <div> I am HOME</div>
    </>
  )
}

export default Home