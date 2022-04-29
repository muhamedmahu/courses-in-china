import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials header__container'  >
<a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
<a href="https://github.com" target="blank"><FaGithub/></a>
<a href="https://twitter.com" target="blank"><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials