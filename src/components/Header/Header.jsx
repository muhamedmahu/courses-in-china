import React from 'react'
import './Header.css'
import CTA from './CTA'
export const Header = () => {
  return (
   <header>
      <div className="container header__container"> 
  <h1>BMW</h1>
  <h3>BMW M3 E36</h3>
  <h5 className='text light'>sport cupe</h5>
    <CTA />
      </div>
   </header>
  )
}

export default Header