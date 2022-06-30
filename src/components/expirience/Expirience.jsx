import React from 'react'
import './Expirience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Expirience = () => {
  return (
    <section id='expirience'>
<h5>What Skills I Have</h5>
<h2>My Experienced</h2>

<div className="container experienced__container" >
  <div className="experienced__frontend">
    <h3>Frontent developer</h3>
    <div className="experienced__content">
      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div><h4>HTML</h4>
<small className='text-light'>Experienced</small></div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>CSS</h4>
<small className='text-light'>intermediate</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>JavaScript</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>Tailwild</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill />
<div>
<h4>Bootstrap</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>React</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>
    </div>
  </div>

  <div className="experienced__backend">
<h3>Backedn developer</h3>
    <div className="experinced__content">
      <article className='experienced__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>Node js</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>MongoDB</h4>
<small className='text-light'>intermediate</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>PHP</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill />
<div>
<h4>MySQL</h4>
<small className='text-light'>Experienced</small>
</div>


      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>Python</h4>
<small className='text-light'>Experienced</small>
</div>
      </article>

 
    </div>
  </div>


</div>




    </section>
  )
}

export default Expirience