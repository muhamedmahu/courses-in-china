import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
export const Header = () => {
  return (
   <header>
      <div className="container header__container"> 
<h3>впервые в городе каракол</h3>
<h1>Экспресс Бизнес курсы с Китаем</h1>
    <CTA />
    <HeaderSocials />
    <div className='me'>
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'>Down</a>
      </div>
   </header>
  )
}

export default Header