import { useState } from 'react'
import { motion } from "framer-motion"
import './App.css'



function App() {
  const variants = {
    start: {
       scaleY: [1, 1, 1, 1, 1],
       scaleX: [1, 1, 2, 2, 1],
       rotate: [0, 0, 0, 0, 360],
       borderRadius: ["0%", "20%", "50%", "50%", "20%"],
       transform: ["translateY(100px)", "translateY(-100px)"]},
    end: { opacity: .5,},
  }

  const [move, setMove] = useState(false)



  return (
    <>
      <motion.button 
            animate={ move? "start":"end"} 
            // initial={{ y: -200 }}
            variants={variants}
            onClick={() => setMove(!move)}>
          play
        </motion.button>
     
    </>
  )
}

export default App
