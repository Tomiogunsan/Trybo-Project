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
import Profile from './Pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import EditListing from './Pages/EditListing'
import Blog from './Pages/Blog'
import Listing from './Pages/Listing'



function App() {
  

  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/listing/:lis' element={<Listing />} />
        
        <Route path='/profile' element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/edit-listing' element={<PrivateRoute/>}>
        <Route path='/edit-listing/:listingId' element={<EditListing />} />
        </Route>
        
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/help' element={<Help />} />
        <Route path='/list-property' element={<ListProperty />} />
        <Route path='/blog/:id' element={<Blog />} />
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
