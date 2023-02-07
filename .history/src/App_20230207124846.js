import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Help from './Pages/Help'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from  './Pages/SignUp'
import ListProperty from './Pages/ListProperty'
import ForgotPassword from './Pages/ForgotPassword'
import Welcome from './Pages/Welcome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  

  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/prof' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/help' element={<Help />} />
        <Route path='/list-property' element={<ListProperty />} />
      </Routes>
    </Router>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
}

export default App
