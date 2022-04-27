import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from "../../assets/me.png";
export const Header = () => {
  return (
   <header>
      <div className="container header__container"> 
<h5>Hello i'm</h5>
<h1>Ayana Turatbekova</h1>
<h5>Fullstack Developer</h5>
    <CTA />
    <div className='me'>
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'>Down</a>
      </div>
   </header>
  )
}

export default Header