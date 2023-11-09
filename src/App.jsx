import { useState, useEffect, useRef } from 'react'

import './index.css'
// import Button from './components/Button.jsx'

import About from './components/About'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import logo from './logohappy.png'
import happysmile from './happysmile.png'


function App() {
  
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const style = { originX:"0.5",
                  originY: "1"} 
  const [move, setMove] = useState(false)
  const [playConfetti, setPlayConfetti] = useState(false)
  const size = { with:"40px"}
  const [countpressedButton, setCountPressedButton] = useState(0)
  const [clickNav, setClickNav] = useState(true)
  
  function clickHandler(){
    if (count >= 9){
      setCount(0)
      }else {
      setCount(count + 1)
      }
      confettiHandeler()
   }

   function confettiHandeler(){
    setPlayConfetti(preState => !preState)
      setCountPressedButton(countpressedButton +1)  
      setTimeout(() =>{
        setPlayConfetti(false)
      },3000)
   }

   function handleLinkChange(){
    setClickNav(preState => !preState)
   }

  return (
  <>
     <Router>
      <header>
        <nav>
            <Link className='home-link' to="/"> <img className='logo'src={logo}></img></Link>
            <img className='smile' src={happysmile}></img>
            {clickNav ? <Link 
                          className='about-link'
                          to="/about" 
                          onClick={handleLinkChange}>
                            About
                        </Link> : <Link 
                          className='about-link'
                          to="/" 
                          onClick={handleLinkChange}>
                            Home
                        </Link> 
            }
          </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home 
                  open={open} 
                  setOpen={setOpen} 
                  style={size} 
                  clickHandler={clickHandler}
                  count={count}
                  countpressedButton={countpressedButton}
                  playConfetti={playConfetti}
            />}
        />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
