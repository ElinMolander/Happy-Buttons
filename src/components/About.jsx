import backgroundImage from "../images/backgroundHappy.png"
import happyanimal from '../images/happyanimal.png'
import happymouth from '../images/happymouth.png'

export default function About(){
    return(
        <div className="backgroundWraper"> 
            <div className="background" style={{ backgroundImage: `url(${backgroundImage})`}}>
            </div>
            <div className="about-column">
                <img className="happy-animals"src={happyanimal}></img>
            </div>
            <div className="text-colum">
                <h1>About</h1>
                <p>This happy buttons site is brought to life by Elin Molander. 
                    It was crafted to brighten her sister's day during a challenging time when she wished she could be happy from the push of a button. 
                    Hoping it brings a little sunshine into your world as well!
                </p>
                <p className="textStyle">
                    Animations, illustrations by Elin Molander.
                    Animations Made with is made with Lottie, 
                </p>
                <div>
                    <h3> Contact</h3>
                        Send only happy mails to;
                    <br></br>
                        <a href = "mailto: elin@elinmolander.com">elin@elinmolander.com</a>
                    <br></br>
                        Portfoliosite;
                    <br></br>
                        <a href="https://portfolio.elinmolander.com/" >elinmolander.com</a>
                    <br></br>
                        Also part of Beardybird games at
                    <br></br>
                        <a href="https://www.beardybird.com/" >Beardybird Games</a>
                </div>
            </div>
            <div className="about-column">
                <img className="happy-animals"src={happymouth}></img>
            </div>
        </div>
      
       
    )
}