import { useState } from 'react'

import './App.css'
import Navbar from './components/ui/Navigation'
import Service from './components/ui/Service'
import Contact from './components/ui/Contact'
import Footer from './components/ui/Footer'



function App() {


  return (
    <>
      <Navbar/>
      <Service/>
      <Contact/>
      <Footer/>


    </>
  )
}

export default App
