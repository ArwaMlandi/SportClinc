import React, { useState } from "react";
import './Header.css';
import Logo from './../../src/images/logo.png';
import bars from './../images/bars.png';
import { Link } from "react-scroll";
 
const Header =() => {

    const mobile = window.innerWidth<=768 ? true : false
    const [menueopen, setmenueopen]=useState(false)
    const togglemenu= ()=>{
      setmenueopen((menueopen)=>!menueopen)
    }
    return(
        <div className="header">
           
            <img src={Logo} title="Logo" className="Logo" />
            {(menueopen===false && mobile===true) ?(
                <div><img src={bars} alt="" style={{width:'2.5rem' , height:'2.5rem',padding:'0.5rem',backgroundColor: 'rgb(31, 32, 32)',borderRadius:'5px'}} onClick={togglemenu} />
                
                </div>
            ):<ul className="header-menue">
            <li  onClick={()=>setmenueopen(false)}><Link 
            onClick={()=>togglemenu(false)}
      to="Home"
      spy={true}
      smooth={true}>Home</Link></li>
            <li><Link 
            onClick={()=>setmenueopen(false)}
      to="program"
      spy={true}
      smooth={true}>Program</Link></li>
            <li onClick={()=>setmenueopen(false)}>
            <Link 
            onClick={()=>setmenueopen(false)}
      to="Why"
      spy={true}
      smooth={true}>Why Us</Link>
            </li>
            <li onClick={()=>setmenueopen(false)}>
            <Link 
            onClick={()=>setmenueopen(false)}
      to="Plans"
      spy={true}
      smooth={true}>Plans</Link>
              </li>
            <li onClick={()=>setmenueopen(false)} ><Link 
            onClick={()=>setmenueopen(false)}
      to="Testamonial"
      spy={true}
      smooth={true}>Testamonial</Link>
           
            </li>

        </ul>}

            
        </div>
    )
}
export default Header
