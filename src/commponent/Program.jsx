import React from "react";
import './Program.css';
import { programsData } from "../data/programsData";
import rightArrow from '../images/rightArrow.png';

const Program = () => {
    return(
        <div className="program" id="program">

            <div className="program-header">
                <span>Explore</span><span>Our Program</span><span>Shape you</span>

            </div>

            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="categories">
                        {program.image}
                        <span>{program.heading}</span><span>{program.details}</span>
                        <div className="join-now"><span>Join Now</span><img src={rightArrow} /></div>
                    </div>
                ))}
            </div>

           
        </div>
    )
}

export default Program;