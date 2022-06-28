import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GrServices} from 'react-icons/gr'
import {GrContact} from 'react-icons/gr'
export const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><GrServices/></a>
      <a href="#contact"><GrContact/></a>
     
    </nav>
  )
}
