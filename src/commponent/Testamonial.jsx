import React from "react";
import './Testamonial.css';
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";
import LeftArrow from './../images/leftArrow.png';
import RightArrow from './../images/rightArrow.png';

const Testamonial =() =>{
    const [selected,setselected]= useState(0);
    const tlength= testimonialsData.length;
    return(

        <div className="testamonial" id="Testamonial">
           <div className="blur blur-test"></div>
        <div className="left-test">
            
            <span>Testamonial </span>
            <span style={{color:'orangered'}}> Why they say about us ? </span>
            <span className="span-review">
                {testimonialsData[selected].review}
            </span>
            <span className="test-name">
                <span style={{color: 'orangered'}}>
                    {testimonialsData[selected].name} {" "}
                </span>
                ~ {testimonialsData[selected].status}
            </span>
            
        </div>

        


        <div className="right-test">
            <div></div>
            <div></div>
            <img
            
            src={testimonialsData[selected].image} className="person-test" />
            <div className="arrows">
                <img 
                onClick={()=>{
                    selected ===0 ? setselected(tlength -1) : setselected ((prev) => prev-1)
                }} 
                src={LeftArrow} alt="" />
                <img 
                onClick={()=>{
                    selected ===tlength-1 ? setselected(0) : setselected ((prev) => prev+1)
                }} 
                src={RightArrow} alt="" />
            </div>
        </div>
        
        </div>
    )
}

export default Testamonial;