import Button from './Button.jsx'
import Confetti from 'react-confetti'
import backgroundImage from '../images/backgroundHappy.png'
import { motion, useAnimate } from 'framer-motion'
import happymouth from '../images/happymouth.png'
import happysmile from '../images/happysmile.png'
import confettiStates from '../confettiData.jsx'
import speechBubble from '../images/speechbubble.png'
import happyanimal from '../images/happyanimal.png'
import happybuttonOG from '../images/happybuttons.png'


export default function Home({open,setOpen,size,clickHandler,count,
    countpressedButton,playConfetti,pressButton,displayText}){
    const [scope, animate] = useAnimate()

    
    return(
    <div className='backgroundWraper'>
         <div ref={scope} className='background' style={{backgroundImage: `url(${backgroundImage})`}}></div>
           <div className='wrap-main'>
               <div className='story-wrap'>
                   <img className='happy-mouth' src={happymouth}></img>
                   <div className='speech-wrap'>
                        <img className='speech-bubble' src={speechBubble}></img>
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
                                                // pressButton()
                                                confetti.reset()
                                            }
                            }
                        />}
                </div>
                { countpressedButton > 0 ? <motion.div 
                                               initial={{ opacity:0 }}
                                               animate={{ opacity:1 }}
                                               transition={{ delay: 1 }}
                                               className='count-sektion' >
                                                <img className='smile-buttonscetion'src={happysmile}></img>
                                                <h2 className='buttonsPressed'> You pressed {countpressedButton} happy buttons! </h2>
                                            </motion.div> : 
                                            <motion.div
                                                initial={{ opacity:0 }}
                                                className='count-sektion'>
                                                    <img className='smile-buttonscetion'src={happyanimal}></img>
                                                    </motion.div>}
            </div>
          </div>
          <img className="og-image" src={happybuttonOG} alt="ogimage of text happy buttons and a smile" />
    </div>
      
    )
}