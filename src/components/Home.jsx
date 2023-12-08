import Button from './Button.jsx'
import Confetti from 'react-confetti'
import { useState, useEffect, useRef } from 'react'
import backgroundImage from "../images/backgroundHappy.png"
import { motion, useAnimate } from "framer-motion"
import happymouth from "../images/happymouth.png"
import happysmile from "../images/happysmile.png"
import confettiStates from "../confettiData.jsx"
import speechBubble from "../images/speechBubble.png"
// import useWindowSize from 'react-use/lib/useWindowSize'

import { action } from '@storybook/addon-actions'

export default function Home({open,setOpen,size,clickHandler,count,
    countpressedButton,playConfetti,pressButton,displayText}){
    const [scope, animate] = useAnimate()
    
 
//   const { width, height } = useWindowSize


    
    return(
    <div className="backgroundWraper">
         <div ref={scope} className="background" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
           <div className='wrap-main'>
               <div className='story-wrap'>
                   <img className="happy-mouth" src={ happymouth }></img>
                   <div className='speech-wrap'>
                        <img className="speech-bubble" src={ speechBubble }></img>
                        <h2 className='story-text'>{displayText()}</h2>
                   </div>
                 
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
                        { playConfetti &&  <Confetti 
                                            colors={confettiStates[count].colors}
                                            confettiSource={confettiStates[count].confettiSource}
                                            width={window.innerWidth}
                                            height={window.innerHeight}
                                            drawShape={confettiStates[count].drawShape}
                                            recycle={false}
                                            gravity={1}
                                            numberOfPieces={500}
                                            tweenDuration={confettiStates[count].tweenDuration}
                                            initialVelocityY={{min: -40, max: 10}}
                                            initialVelocityX={{min: -20, max: 20}}
                                            onConfettiComplete={confetti => {
                                                pressButton()
                                                //  clickHandler()
                                                // setParty(false)
                                                confetti.reset()
                                            }
                            }
                        />}
                </div>
                { countpressedButton > 0 ? <motion.div 
                                                initial={{ scale:0 }}
                                                animate={{ scale:1 }}
                                                className='count-sektion'>
                                    <img className="smile-buttonscetion"src={happysmile}></img>
                                    <h2 className='buttonsPressed'> You pressed {countpressedButton} happy buttons! </h2>
                                </motion.div> : <motion.div
                                initial={{ opacity:0 }}
                                animate={{ opacity:1 }}
                                 className='count-sektion'>
                                            <img className="smile-buttonscetion"src={happysmile}></img>
                                        </motion.div>}
            </div>
          </div>
        
    </div>
      
    )
}