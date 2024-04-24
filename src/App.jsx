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
import ForgotPassword from './Authentication/ForgotPassword'
import ResetPassword from './Authentication/ResetPassword'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route 
            path='/'
            element={<Layout/>}        
        >
        <Route 
            path='/sign-in'
            element={<SignIn />}
        />
          <Route 
          path='/sign-up'
          element={<SignUp />}
          />
          <Route 
          path='/forgot-password'
          element={<ForgotPassword />}
          />
          <Route 
          path='/reset-password'
          element={<ResetPassword />}
          />
        <Route 
            path='/'
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