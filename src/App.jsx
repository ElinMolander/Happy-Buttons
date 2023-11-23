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
import logo from '../src/images/logohappy.png'
import happysmile from '../src/images/happysmile.png'
import happyX from './happyX.png'


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
  const [isAloudPressButton, setIsAloudPressButton] = useState(true)
  
  function clickHandler(){
    if (isAloudPressButton){

      if (count >= 10){
        setCount(0)
        }else {
        setCount(count + 1)
        }
        confettiHandeler()
    }

    function confettiHandeler(){
      setPlayConfetti(preState => true)
        setCountPressedButton(countpressedButton +1)  
        // setTimeout(() =>{
        //   setPlayConfetti(false)
        // },3000)
    }
    console.log("enjoy the sparks first")
   }

   function pressButton(){
    setIsAloudPressButton(false)
    console.log(`från pressButton${isAloudPressButton}`)
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
                          className='about-link x-link'
                          to="/" 
                          onClick={handleLinkChange}>
                            <img className="happy-x" src={happyX}></img>
                            
                            Back
                        </Link> 
            }
          </nav>
          <div className='Header-boarder'></div>
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
                  pressButton={pressButton}
            />}
        />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
