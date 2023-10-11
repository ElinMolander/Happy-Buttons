import React from 'react';
import { useState, useEffect, useRef } from 'react'
import lottie from "lottie-web/build/player/lottie_light"
import Lottie from "lottie-react";
import animationData from './test.json'
import PropTypes from 'prop-types'

function Button (){

  const animationContainer = useRef(null)
  const anim = useRef(null)
  const [playSequence, setPlaySequence] = useState({
      loop: true,
      start: 0,
      end: 48,
      queue: true,
      idle: true,
      fall: false,
      getUp: false,
    
    // fall: {
    //   loop: false,
    //   start: 50,
    //   end: 70,
    //   queue: true,
    //   active: false,
    // },
    // getUp: {
    //   loop: false,
    //   start: 71,
    //   end: 113,
    //   queue: true,
    //   active: false,
    // }
  })
const [returnToIdle, setReturnToIdle] = useState(0)
  useEffect(() => {
    if (animationContainer.current){
      try {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          render: 'svg',
          loop: true,
          autoplay:true,
          animationData,
        })
      
      
        anim.current.playSegments([playSequence.start, playSequence.end],true);
      } catch (error){
        console.log("Det upstod ett fel vid inläsningen av animationen")
      }
      return () => {
          anim.current?.destroy()
      }
    }
  },[returnToIdle])

// useEffect(() => {
//   anim.current.stop()
//   anim.current.loop = playSequence.animation.loop
//   anim.current.playSegments([playSequence.animation.start, playSequence.animation.end], true)
// },[playSequence])

  function handleClick(){
   let newAnimation = {}
 
    if (playSequence.idle) { 
      newAnimation = { 
          loop: false, 
          start: 50,
          end: 70, 
          idle: false,
          fall: true,
          getUp: false, 
        }
       
        
    }
    if (playSequence.fall){
        newAnimation = {
        loop: false,
        start: 71,
        end: 113,
        queue: true,
        active: false,
        idle: false,
        fall: false,
        getUp: true,
        }
        setTimeout(()=>{
          
          setPlaySequence({
            loop: true,
            start: 0,
            end: 50,
            queue: true,
            idle: true,
            fall: false,
            getUp: false,
          })
          setReturnToIdle(returnToIdle + 1)
        }, 1000)
    // } else if (playSequence.getUp){
    //     newAnimation = {
    //       loop: true,
    //       start: 0,
    //       end: 50,
    //       queue: true,
    //       idle: true,
    //       fall: false,
    //       getUp: false,
    //     }
        
      }
    
    anim.current.stop()
    anim.current.loop = newAnimation.loop
    anim.current.playSegments([newAnimation.start, newAnimation.end], true)
    // console.log(` ${newAnimation}, ${newAnimation}`)
    // console.log( returnToIdle)
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

// export default Button;


    // else if(playSequence == animationSequence.fall)
    //   setPlaySequence(animationSequence.getUp)
    // else if(playSequence == animationSequence.getUp)
    //   setPlaySequence(animationSequence.idle)

    // setPlaySequence(prevPlaySequence => ({
    //     ...prevPlaySequence,
    //     fall:{ active : true}
    //   }))

  // const interactivity = {
  //   mode: 'chain',
  //   actions: {
      
  //     transition: 'click',
  //     type: "loop",
  //     frames: [45, 60]
  //   },

  //   state: 'autoplay',
  //   transition: 'onComplete',
  //   frames: [100, 113]
  // }

  // create({
  //   mode: 'scroll',
  //   player: '#firstLottie',
  //   actions: [
  //     {
  //       visibility: [0, 1],
  //       type: 'seek',
  //       frames: [0, 100],
  //     },
  //   ],
  // });

  // MenuToggleButton.propTypes = {
//   open: PropTypes.bool.isRequired,
//   setOpen: PropTypes.func.isRequired
// }



// const MenuToggleButton = ({open, setOpen}) => {
//   const animationContainer = useRef(null)
//   const anim = useRef(null)

//   const [clickedButton, setClickedButton] = useState(true)
//   console.log(`clickedButton: ${clickedButton}`)
//   function handleClick(){
//     if(clickedButton){
//       anim.current.stop(); 
//       anim.current.playSegments([0, 10],true);
//     } else if (!clickedButton) {
//       anim.current.stop(); 
//       anim.current.playSegments([71, 113],true);
//     }
//     setClickedButton(!clickedButton)
//   }

//   useEffect(() => {
//     if (animationContainer.current){
//       try {
//           anim.current = lottie.loadAnimation({
//           container: animationContainer.current,
//           frames: [0, 10],
//           render: 'svg',
//           loop: false,
//           autoplay:true,
//           animationData,
//       })
      

//       } catch (error){
//         console.log("Det upstod ett fel vid inläsningen av animationen")
//       }
//       return () => {
//           anim.current?.destroy()
//       }
//     }
//   },[])