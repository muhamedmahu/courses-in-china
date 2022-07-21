import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GrServices} from 'react-icons/gr'
import {GrContact} from 'react-icons/gr'
import { useState } from 'react-icons/bi'
export const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#expirience"><BiBook/></a>
     
     
    </nav>
  )
}
