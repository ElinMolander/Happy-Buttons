import React from 'react';
import { useState, useEffect, useRef } from 'react'
import lottie from "lottie-web/build/player/lottie_light"
import animationData from '../happyButtons.json'
import newAnimation from '../timestampAnimation.jsx'


function Button ({clickHandler, count}){

  const animationContainer = useRef(null)
  const anim = useRef(null)
  const [playSequence, setPlaySequence] = useState({
          start: 0,
          end: 10,
          loop: false,
        })
  const [returnToIdle, setReturnToIdle] = useState(0)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (animationContainer.current){
    
      try {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          render: 'svg',
          loop: false,
          autoplay: false,
          animationData,
        })
        anim.current.playSegments([playSequence.start,playSequence.end],true);
        
      } catch (error){
        console.log("Det upstod ett fel vid inläsningen av animationen")
      }
      return () => {
          anim.current?.destroy()
      }
    }
    
  },[returnToIdle])

  useEffect(() => {
    anim.current.stop()
    anim.current.loop = newAnimation[count].loop
    anim.current.playSegments([newAnimation[count].start,newAnimation[count].end ],true)
    setPlaySequence(newAnimation)
   
  },[count])


  return (
     <div
        ref={animationContainer}
        className="animationDiv"
        onClick={() => clickHandler()}
      />
  )
}

export default Button;


