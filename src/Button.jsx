import React from 'react';
import { useState, useEffect, useRef } from 'react'
import lottie from "lottie-web/build/player/lottie_light"
import animationData from './testbollar.json'
import PropTypes from 'prop-types'


const MenuToggleButton = ({open, setOpen}) => {
  const animationContainer = useRef(null)
  const anim = useRef(null)



  useEffect(() => {
    if (animationContainer.current){
        anim.current = lottie.loadAnimation({
            container: animationContainer.current,
            render: 'svg',
            loop: false,
            autoplay:false,
            animationData,
        })
         // Lyssna på klick för att starta animationen
      animationContainer.current.addEventListener('click', () => {
        anim.current.stop(); 
        anim.current.play();
       // Starta animationen när knappen klickas
      })
      return () => {
          anim.current?.destroy()
          animationContainer.current.removeEventListener('click', ()=>{
              anim.current.play()
          })
      }
    }
},[])



return (
    <div
        onClick={()=> setOpen(!open)}
        ref={animationContainer}
        className="animationDiv"
        />
)
}

MenuToggleButton.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
  }

export default MenuToggleButton;