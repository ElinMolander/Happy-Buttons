import { useState, useEffect, useRef } from 'react'
import { motion, useAnimate } from "framer-motion"
import './App.css'
import Button2 from './Button2.jsx'


// import  { useLottie } from 'lottie-react'
// import test from "./Comp.json"
// import { Player, Controls } from '@lottiefiles/react-lottie-player'


function App() {

const [scope, animate] = useAnimate()
const [open, setOpen] = useState(false)

const onButtonClick = () => {
  animate([
    ["button",{
      scaleY: [1,1.5,.5,1.5,1,1],
      scaleX: [1,.5,1.5,.5,1,1],
      rotate: [0,0,0,0,0,360],
      originX: [0.5,0.5,0.5,0.5,0.5,0.5],
      originY: [1,1,1,1,0.5,0.5],
      y: [0,345,350,320,0,0],
      transition:{ ease:["easeIn","easeOut","easeOut","easeOut","easeOut","easeIn"],
                   duration: 1.5,
                  },
                  
      },
      { duration: 1.5}
    ],
     
    ])
  }
  const style = { originX:"0.5",
                    originY: "1"} 
  const [move, setMove] = useState(false)

  const size = { with:"40px"}
 

  return (
    <div ref={scope}>
      <div className='buttons-collection'>
      <Button2 open={open} setOpen={setOpen} style={size}/>
     
      </div>
  
    <h1>Squash and stretch</h1>
      <motion.button 
            style= {style}
            onClick={onButtonClick}>
          play
        </motion.button>

        <h1>12 Animation principels</h1>
       

    </div>
  )
}

export default App
