import React from 'react';
import "./HeroSrction.css"
import {Button} from '../ButtonsElements'

function HeroSection(){
    return(
    <div className="hero-container">
           <h1>Travel More</h1>
            <p>plane you next trip</p>
        <div className="hero-btns">
          <Button fontBig big primary>Get Strated</Button>
        </div>
    </div>

    )
}

export default HeroSection