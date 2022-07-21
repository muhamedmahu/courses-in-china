import React from 'react'
import './Expirience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Expirience = () => {
  return (
    <section id='expirience'>

<h2>Сервисы</h2>

<div className="container experienced__container" >
  <div className="experienced__frontend">
  
    <div className="experienced__content">
      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div><h4>Alibaba</h4>
<small className='text-light'>научим как покупать с интернет магазина Alibaba</small></div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>AliExpress</h4>
<small className='text-light'>научим как покупать с интернет магазина ALIExpress</small>
</div>
      </article>

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>taoboo</h4>
<small className='text-light'>научим как покупать с интернет магазина taoboo</small>
</div>
      </article>


   

      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>СММ</h4>
<small className='text-light'>научим как развить свой аккаунт </small>
</div>
      </article>


      <article className='experience__detail'>
<BsPatchCheckFill className='experience__detail-icon'/>
<div>
<h4>ТАРГЕТ</h4>
<small className='text-light'>научим как продавать и где </small>
</div>
      </article>



 
    </div>
  </div>


</div>




    </section>
  )
}

export default Expirience