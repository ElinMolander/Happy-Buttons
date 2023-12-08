import { useState, useEffect, useRef } from 'react'
import './index.css'
import About from './components/About'
import Home from './components/Home.jsx'
import {motion, AnimatePresence} from "framer-motion";
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
import textStory from '../src/components/textStory'


function App() {
  
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const style = { originX:"0.5",
                  originY: "1"} 
  const [playConfetti, setPlayConfetti] = useState(false)
  const size = { with:"40px"}
  const [countpressedButton, setCountPressedButton] = useState(0)
  const [clickNav, setClickNav] = useState(true)
  const [isAloudPressButton, setIsAloudPressButton] = useState(true)
  const [tryToPressButton,setTryToPressButton] = useState(false)

  function clickHandler(){
    if (isAloudPressButton){
      if (count >= 10){
        setCount(0)
        }else {
          setCount(count + 1)
          }
        confettiHandeler()
        setIsAloudPressButton(false)
    }else displayText()
          setTryToPressButton(true)
          // setTimeout(()=>{
          //   setTryToPressButton(true)
          // },100)
  }

  function displayText(){
    if(!isAloudPressButton && tryToPressButton){
        return "Enjoy the happy sparks"
    }else return textStory[count].text

   
}

  function confettiHandeler(){
    let delay = 1000
      switch(count){
        case 0:
          delay = 1300
        break
        case 1:
          delay = 2200
        break
        case 2:
          delay = 1170
        break
        case 3:
          delay = 240
        break
        case 4:
          delay = 160
        break
        case 5:
          delay = 2000
        break
        case 6:
          delay = 4000
        break
        case 7: 
          delay = 500
        break
        case 8:
          delay = 2000
        break
        case 9: 
          delay = 960
      }

      setTimeout(()=> {
        setPlayConfetti(true)
    },delay)
      setCountPressedButton(countpressedButton +1)  
  }

function pressButton(){
    setPlayConfetti(false)
    setIsAloudPressButton(true)
    // console.log(`från is alour to press button ${isAloudPressButton}`)
  }

   function handleLinkChange(){
    setClickNav(preState => !preState)
   }
   

  return (
  <>
     <Router>
      <header>
        <nav>
           {clickNav ? <Link className='home-link'
                             to="/about"
                             onClick={handleLinkChange}>
                        <div className='logo-wraper'>
                          <img className='logo'src={logo}></img>
                          <img className='smile' src={happysmile}></img>
                        </div> 
                      </Link> :
                      <Link className='home-link' to="/"
                      onClick={handleLinkChange}>
                      <div className='logo-wraper'>
                        <img className='logo'src={logo}></img>
                        <img className='smile' src={happysmile}></img>
                      </div> 
                    </Link> 

            
          } 
             
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
                  displayText={displayText}
            />}
        />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
