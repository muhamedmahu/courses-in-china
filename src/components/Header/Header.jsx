import React from 'react'
import './Header.css'

import ME from "../../assets/me.png";

export const Header = () => {
  return (
   <header>
      <div className="container header__container"> 
<h3>впервые в городе Каракол</h3>
<h1>Экспресс Бизнес курсы с Китаем</h1>
   
    <div className='me'>
      <img src={ME} alt="me" />
    </div>

      </div>
   </header>
  )
}

export default Header