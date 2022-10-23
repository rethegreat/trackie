import NextPageButton from "../Components/NextPageButton"
import './WelcomePage.css'
import '../Color.js'
import { RedBrown } from "../Color"


function WelcomePage(){
    return(
        <div className="page">
            
            <div className="welcome-design">
                <div className="red-line"></div>
                <h1 className="welcome-title">
                    Welcome to <span style={{color: RedBrown}}>Trackie</span>, where you could manage your finance while collabarating with your household
                </h1>
            </div>
            <div className="get-started-button">
                <NextPageButton title='Get Started'/>
            </div>
            
            
        </div>
    )
}

export default WelcomePage