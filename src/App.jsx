import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './layout/Layout'
import SignIn from './Authentication/SignIn'
import SignUp from './Authentication/SignUp'
import ResetPassword from './Authentication/ResetPassword'
import AuthRoutes from './Authentication/AuthRoutes'
import OTPGenerate from './OTP/OtpGenerator'
import OtpVerify from './OTP/OtpVerify'

function App() {
  return (
    <>
    <Router> 
      <Routes>
        <Route 
        path='/'
        element={<AuthRoutes/>}
        >
          <Route 
            path='/'
            element={<SignIn />}
          />
          <Route 
          path='/sign-up'
          element={<SignUp />}
          />
          <Route 
          path='/forgot-password' 
          element={<OTPGenerate />}
          />
          <Route 
          path='/verifyOTP' 
          element={<OtpVerify />}
          />
          <Route 
          path='/reset-password'
          element={<ResetPassword />}
          />
        </Route>
        <Route 
            path='/'
            element={<Layout/>}        
        >
        
        <Route 
            path='/landing-page'
            element={<Home/>}        
        />
        <Route 
            path='/about'
            element={<About/>}
        />
        <Route 
            path='/contact'
            element={<Contact/>}
        />
        {/* </Route> */}
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App