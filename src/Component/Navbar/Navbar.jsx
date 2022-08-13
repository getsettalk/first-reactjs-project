import React, { useState } from 'react';
import { BiHeartCircle } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";


import './Navbar.css';
function Navbar() {
    const [show , setShow] = useState(false);
    return (
        <div className='navbar'>
            <div className="left">
                <span> My-Portfolio</span>
            </div>
            <div className={"right "+ (show ? 'showNav':'')} >
                <ul>
                    <li> <a href="">Home</a> </li>
                    <li> <a href="">About</a> </li>
                    <li> <a href="">Service</a> </li>
                    <li> <a href="">Portfolio</a> </li>
                </ul>
                
                <button><BiHeartCircle  size={25} color="rgb(241, 64, 94)"/> 123 </button>
            </div>
            <div className="toggle" onClick={()=>setShow(!show)}>
                <h2 style={{background:'gray', borderRadius:'9px',paddingTop:'3px'}}>{ show ? <FaTimes/>:<GoThreeBars/>}</h2>
            </div>
        </div>

    )
}

export default Navbar