import React from "react";
import Header from "./Header";
import './Hero.css';
import hero_image from './../images/neww2.png';
import hero_image_back from './../images/hero_image_back.png';
import heart from './../images/heart.png';
import calories from './../images/calories.png';

const Hero =() =>{

    return(
        <div className="hero" id="Home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
            <Header/>


            <div className="the-best">
                <div></div>
                <span>the best fitnes in my city </span>
            </div>
            

            <div className="hero-header">
                <div>
                    <span className="stroke-text">shape </span>
                    <span>your</span>
                </div>
                <div><span>ideal body</span></div>
                <div className="span-hero"> in here we will help you to shape and build your ideal body and live up your life to fullest</div>
            </div>
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>export coaches</span>
                </div>

                <div>
                    <span>+528</span>
                    <span>members joined</span>
                </div>

                <div>
                    <span>+45</span>
                    <span>fitness programes</span>
                </div>

               

            </div>
            <div className="hero-button">
                    <button className="btn"> Get Started</button>
                    <button className="btn"> Learn More</button>
                </div>
            </div>

           
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={heart} />
                    <span>Heart Rate</span><span>110 bpm</span>
                </div>

                <img src={hero_image}  className="hero_image" />
                <img src={hero_image_back} className="hero_image_back" />
           
           <div className="calories">
            <img src={calories} />
            <div>
            <span>Calories Burned </span><span>175 kcal</span></div>
           </div>
           
            </div>
        </div>
    )
    }
    export default Hero