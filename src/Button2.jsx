import React from 'react';
import { useState, useEffect, useRef } from 'react'
import lottie from "lottie-web/build/player/lottie_light"
import animationData from './test.json'


function Button2 (){

  const animationContainer = useRef(null)
  const anim = useRef(null)
  const [playSequence, setPlaySequence] = useState({
          start: 0,
          end: 50,
          loop: true,
        })
  const [count, setCount] = useState(0)

const [returnToIdle, setReturnToIdle] = useState(0)
  useEffect(() => {
    if (animationContainer.current){
      try {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          render: 'svg',
          loop: true,
          autoplay: true,
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



  function handleClick(){
   let newAnimation = [
     {
      loop: false, 
      start: 140,
      end: 140, 
    },
    {
      loop: false, 
      start: 200,
      end: 300, 
    }

  ]

console.log(count)
 
    anim.current.stop()
    anim.current.loop = newAnimation[count].loop
    anim.current.playSegments([newAnimation[count].start,newAnimation[count].end ], true)
    setCount(count + 1)
    setPlaySequence(newAnimation)
   
  }


  return (
    <>
     <div
          onClick={handleClick}
          ref={animationContainer}
          className="animationDiv"
      />
    </>
  )

}

export default Button2;
