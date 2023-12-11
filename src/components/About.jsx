import backgroundImage from '../images/backgroundHappy.png'
import happyanimal from '../images/happyanimal.png'
import happymouth from '../images/happymouth.png'
import { motion, useAnimate } from 'framer-motion'

export default function About(){
    return(
        <div className='aboutWraper'> 
            <div className='about-background' style={{ backgroundImage: `url(${backgroundImage})`}}> </div>
            <motion.div className="about-wraper"  initial={{ opacity:0 }}
                                                  animate={{ opacity:1 }}
                                              >
                <div className='about-column'>
                    <motion.img 
                        animate={{ scale: 1 }}
                        transition={{
                        repeat: 4,
                        repeatType: "mirror",
                        from: 1.5, duration: .5
                        }}
                        className='happy-animals'
                        src={happymouth}>
                    </motion.img>
                </div>
                <div className='text-colum'>
                    <h1>About</h1>
                    <p>This happy buttons site is brought to life by me, Elin Molander. 
                        It was crafted to brighten my sister's day during a challenging 
                        time when she wished she could be happy from the push of a button. 
                        I hope it brings a little sunshine into your world as well!
                    </p>
                    <p className='textStyle'>
                        Animations, illustrations by Elin Molander.
                        Animations made with Lottie & After effects, 
                    </p>
                    <div>
                        <h3> Contact</h3>
                            Send only happy emails to:
                            <br/>
                            <a href = 'mailto: elin@elinmolander.com'>elin@elinmolander.com</a>
                            <br/>
                            <br/>
                            Portfolio:
                            <br/>
                            <a target="_blank"href='https://portfolio.elinmolander.com/'>elinmolander.com</a>
                            <br/>
                            <br/>
                            I'm also one half of Beardybird:
                            <br/>
                            <a target="_blank" href='https://www.beardybird.com/'>Beardybird Games</a>
                    </div>
                </div>
            <div className='about-column'>
                        <motion.img 
                             animate={{ rotate: 20 }}
                             transition={{
                               repeat: 5,
                               repeatType: "mirror",
                               from: 10, duration: .5
                             }}
                             className='happy-animals'
                             src={happyanimal}
                        >
                        </motion.img>
            </div>
        </motion.div>
          
        </div>
      
       
    )
}