import backgroundImage from "./backgroundHappy.png"

export default function About(){
    return(
        <div className="backgroundWraper"> 
            <div className="background" style={{ backgroundImage: `url(${backgroundImage})`}}>
            </div>
            <h1>from about</h1>
        </div>
      
       
    )
}