import { useState, useEffect, useRef } from 'react'
import { motion, useAnimate } from "framer-motion"
import './App.css'



// import  { useLottie } from 'lottie-react'
// import test from "./Comp.json"
// import { Player, Controls } from '@lottiefiles/react-lottie-player'


function App() {
// const options = {
//   animationData: test,
//   loop:false,
// }
// const {View} = useLottie(options)

// const transformer = useTransform([0, 100], [0, 360])

const [scope,animate] = useAnimate()

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
 

  return (
    <div ref={scope}>
    <h1 
                 
              >Squash and stretch</h1>
      <motion.button 
            // animate={move ? "start":""}
            // initial={{ y: -200 }}
            // variants={variants}
            style= {style}
            onClick={onButtonClick}>
          play
        </motion.button>

        <h1>12 Animation principels</h1>
       

    </div>
  )
}

export default App
