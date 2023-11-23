import Button from './Button.jsx'
import Confetti from 'react-confetti'
import { useState, useEffect, useRef } from 'react'
import backgroundImage from "../images/backgroundHappy.png"
import { motion, useAnimate } from "framer-motion"
import happymouth from "../images/happymouth.png"
import happysmile from "../images/happysmile.png"
import confettiStates from "../confettiData.jsx"

import { action } from '@storybook/addon-actions'

export default function Home({open,setOpen,size,clickHandler,count,countpressedButton,playConfetti, pressButton}){
    const [scope, animate] = useAnimate()
    
  
    // const confettiCompleteAction = action('Confetti Complete')
    const textStory = [
        {
            text: "Push some happy buttons!"
        },
        {
            text: "Good work! keep on pushing"
        },
        {
            text: "hej3"
        },
        {
            text: "hej4"
        },
        {
            text: "hej5"
        },
        {
            text: "hej6"
        },
        {
            text: "hej7"
        },
        {
            text: "hej8"
        },
        {
            text: "hej9"
        },
        {
            text: "hej10"
        },
        {
            text: "hej11"
        },
      
    ]
    
    return(
    <div  className="backgroundWraper">
         <div ref={scope} className="background" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
           <div className='wrap-main'>
               <div className='story-wrap'>
                   <img className="mouth-home" src={happymouth}></img>
                   <h2 className='story-text'>{textStory[count].text}</h2>
               </div>
                <div className='buttons-collection'>
                    <Button 
                        open={open} 
                        setOpen={setOpen} 
                        style={size} 
                        clickHandler={clickHandler}
                        count={count}
                        countpressedButton={countpressedButton}
                    />
                    <div className='confetti'>
                        { playConfetti && <Confetti 
                             colors={confettiStates[count].colors}
                             confettiSource={confettiStates[0].confettiSource}
                             drawShape={confettiStates[count].drawShape}
                             recycle={false}
                             gravity={1}
                             numberOfPieces={500}
                             initialVelocityY={{min: -10, max: -20}}
                             onConfettiComplete={confetti => {
                                pressButton()
                                //  clickHandler()
                                // setParty(false)
                                confetti.reset()
                              }}
                        />}
                        
                    {count > 0 &&  <div className='count-sektion'>
                        <img className="smile-buttonscetion"src={happysmile}></img>
                        <h2 className='buttonsPressed'> You pressed {countpressedButton} happy buttons </h2>
                    </div>}
                   
                   
                </div>
            </div>
          </div>
        
    </div>
      
    )
}