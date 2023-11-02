import React from 'react';
import { useState, useEffect, useRef } from 'react'
import lottie from "lottie-web/build/player/lottie_light"
import animationData from './happyButtons.json'


function Button2 (){

  const animationContainer = useRef(null)
  const anim = useRef(null)
  const [playSequence, setPlaySequence] = useState({
          start: 0,
          end: 10,
          loop: false,
        })
  const [count, setCount] = useState(0)
  const [countpressedButton, setCountPressedButton] = useState(0)

const [returnToIdle, setReturnToIdle] = useState(0)

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



  function handleClick(){
   
   let newAnimation = [
     {
      loop: false, 
      start: 0,
      end: 188, 
    },
    {
      loop: false, 
      start: 205,
      end: 351, 
    },
    {
      loop: false, 
      start: 389,
      end: 469, 
    },
    {
      loop: false, 
      start: 488,
      end: 509, 
    },
    {
      loop: false, 
      start: 530,
      end: 787, 
    },
    {
      loop: false, 
      start: 878,
      end: 1189, 
    },
    {
      loop: true, 
      start: 1219,
      end: 1264, 
    },
    {
      loop: false, 
      start: 1262,
      end: 1418, 
    },
    {
      loop: false, 
      start: 1414,
      end: 1486, 
    },
  ]
    anim.current.stop()
    anim.current.loop = newAnimation[count].loop
    anim.current.playSegments([newAnimation[count].start,newAnimation[count].end ], true)
    if (count >= 8){
      setCount(0)
      console.log(count)
    } else {
      setCount(count + 1)
    }
    
    setPlaySequence(newAnimation)
    setCountPressedButton(countpressedButton +1)  
  }


  return (
    <>
     <div
          onClick={handleClick}
          ref={animationContainer}
          className="animationDiv"
      />
      <h2 className='buttonsPressed'> Buttons pressed {countpressedButton}</h2>
    </>
  )

}

export default Button2;
