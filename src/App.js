import React, { useState , lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Help = lazy(() => import("./Pages/Help"));
const Home = lazy(() => import ('./Pages/Home'))
const SignIn = lazy(() => import ('./Pages/SignIn'))
const SignUp = lazy(() => import ('./Pages/SignUp'))
const ListProperty = lazy(() =>import  ('./Pages/ListProperty'))
const ForgotPassword = lazy(() => import ('./Pages/ForgotPassword'))
const Welcome = lazy(() =>import ('./Pages/Welcome'))
const Profile = lazy(() => import('./Pages/Profile'))
const PrivateRoute = lazy(() => import ('./components/PrivateRoute'))
const EditListing = lazy(() => import("./Pages/EditListing"));
const Blog = lazy(() => import('./Pages/Blog'))
const ListingItem = lazy(() => import("./Pages/ListingItem"));
const BookingDetails = lazy(() => import("./components/BookingDetails"));
const AllListing = lazy(() => import("./Pages/AllListing"));
  






function App() {
  const[showDetails, setShowDetails] = useState(false)
  
  function showBookingDetails(){
    setShowDetails(true)
    
  }

  function hideShowBookingDetails(){
    setShowDetails(false)
  }

  

  return <>
    
    <Router>
    {showDetails && <BookingDetails 
    onClose={hideShowBookingDetails} 
    
    />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/listing' element={<AllListing />} />
        <Route path='/listing/:listingId' element={<ListingItem 
        showBookingDetails={showBookingDetails}
        
     />} />
        
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
