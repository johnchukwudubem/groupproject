import React from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LogIn from './Components/Screens/LogIn'
import SignUp from './Components/Screens/Signup/Signup'
import ContactUs from './Components/Contact/ContactUs'

import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      
   < ContactUs />
      
      {/* < Subscribe />
      <Footer /> */}
    </div>
  )
}

export default App