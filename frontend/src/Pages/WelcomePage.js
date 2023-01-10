import NextPageButton from "../Components/PageButton"
import './WelcomePage.css'
import '../Color.js'
import { RedBrown } from "../Color"
import React from "react";


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
                <NextPageButton title='Get Started' to='/personal'/>
            </div>
            
            
        </div>
    )
}

export default WelcomePage