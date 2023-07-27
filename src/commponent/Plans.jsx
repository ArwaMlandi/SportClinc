import React from "react";
import './Plans.css';
import { plansData } from "../data/plansData";
import whiteticket from "../images/whiteTick.png"

const Plans =() =>{
    return(
        <div className="plan-container" id="Plans">
            <div className="blur plan-blur-1"></div>
            <div className="blur plan-blur-2"></div>

            <div className="plan-header">
                <span>READY TO START </span>
                <span> YOUR JOURNEY</span>
                <span> NOW WITH US</span>
            </div>

            <div className="plans"  >
                {plansData.map((plan,i)=>(
                    <div className="plan" key={i} >
                        {plan.icon}
                        <span>{plan.name}</span> $ {plan.price}<span></span>

                        <div className="feature">
                            {plan.features.map((feature,i)=>(
                                <div className="feature" style={{width:"fit-content"}} >
                                    <img src={whiteticket} />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="plans-more"><span> See More benefit -{'>'} </span></div>
                        <button className="btn"> Join Now</button>

                    </div>
                ))}

            </div>
        </div>

    )
}
export default Plans;