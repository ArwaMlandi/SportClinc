import React from "react";
import './Reasons.css';
import image1 from "./../images/image1.png";
import image2 from "./../images/image2.png";
import image3 from "./../images/image3.png";
import image4 from "./../images/image4.png";
import nb from "./../images/nb.png";
import adidas from "./../images/adidas.png";
import nike from "./../images/nike.png";
import tick from "./../images/tick.png";
import Lamp from "./../images/Lamp.jpg";
import picture from "./../images/picture.jpg";

const Reasons = () =>{
    return(
        <div className="reasons" id="Why">


<div className="right-r">
                <span>Some Reasons</span>
                <div><span>Why  </span> <span>  Choose Us ? </span></div>
            
            

            <div className="detailes-r">
                
            <div className="detailes-div" ><img src={tick} alt="" /> <span>train smarter and faster than before</span></div>
            <div className="detailes-div"><img src={tick} alt=""></img><span>1 free program for new member</span></div>
            <div className="detailes-div"><img src={tick} alt="" /><span> Over 140 Export coachs</span></div>
            <div className="detailes-div"><img src={tick} alt="" /><span>reliable partners</span></div>
            </div>
            <span className="detailes-span">  OUR PARTNIRES</span>

            <div className="partner">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" /></div>
            </div>


            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

        </div>
    )
}

export default Reasons;