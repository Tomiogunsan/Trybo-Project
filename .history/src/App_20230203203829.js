import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Help from './Pages/Help'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from  './Pages/SignUp'
import ListProperty from './Pages/ListProperty'
import ForgotPassword from './Pages/ForgotPassword'



function App() {
  

  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/help' element={<Help />} />
        <Route path='/list-property' element={<ListProperty />} />
      </Routes>
    </Router>
    
    </>
}

export default App
