import React from "react";
import { useRef } from "react";
import './Join.css';
/*import emailjs from '@emailjs/browser';*/
import Footer from './Footer';

const Join = () =>{
    const form=useRef()

    
      
        /*const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_extzqa9', 'template_5fbt3fr', form.current, 'vlmg1ltOWvnCYAik_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };*/
    return(
        <div className="join">
            <div className="join-l-r">
            <div className="left-joi9n">
                <hr/>
                <div>
                <span>READY TO </span><span style={{color:'orangered'}}> LEVEL UP </span>
                <span> YOUR BODY </span> <span style={{color:'orangered'}}> WITH US  ?</span>
                </div>
                </div>

            <div className="right-join">
                <form ref={form} className="email" /*onSubmit={sendEmail}*/>
                    <input type="email" name="user_email" placeholder="Enter Your Email" />
                    <button className="btn-join"> Join Now</button>
                </form>
                
            </div>
            </div>
        <Footer/>

        </div>
    )
}

export default Join;