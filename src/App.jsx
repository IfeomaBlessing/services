import React, {useState} from 'react'
import './App.css'
import Hero from './Components/hero/Hero'
import Navbar from './Components/navbar/Navbar'
import About from './Components/about/About'
import Service from './Components/service/Service'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

function App() {
    const [scroll, setScroll] = useState(false)
     
    const handleNavbar =()=>{
      if(window.scrollY > 0){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleNavbar)
  return (
    <>
      <Navbar scroll={scroll}/>
      <Hero/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
