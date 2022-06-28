import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__me-image">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward  className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers  className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary  className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Maiores et nemo iure facere suscipit minus dolorem, 
              odit tempore eveniet perferendis, esse ea sapiente 
              cupiditate numquam culpa tenetur veritatis commodi totam?
              </p>

              <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
      </div>
      
    </section>
    
  
  )
}

export default About