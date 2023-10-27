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


  const style = { originX:"0.5",
                    originY: "1"} 
  const [move, setMove] = useState(false)

  const size = { with:"40px"}
 

  return (
    <div ref={scope}>
       <h1>
            To cancel just press the button.
      </h1>
      <div className='buttons-collection'>
      <Button2 open={open} setOpen={setOpen} style={size}/>
     
      </div>
  
   
      

       

    </div>
  )
}

export default App
