import React from 'react'
import './Hero.css'
import Type from './Type'
import person from '../../Images/persion.svg'
function Hero() {
    return (
        <div className='hero'>
         
            <div className="hero-box">
                <div className="left">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hi There!{" "}
                        <span>
                            👋🏻
                        </span>
                    </h1>

                    <h1 className="heading-name">
                        I'M <strong style={{textTransform:'uppercase',color:'pink',paddingLeft:'10px'}}> Sujeet kumar</strong>
                    </h1>
                    <h1 className="heading-special">
                      <Type/>
                    </h1>
                    
                  
                </div>
                <div className="right">
                    <div className="right-box">
                        <img src={person} alt="person" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero