import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { BsCalendarDay } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BsPen } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h2>о курсах</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsCalendarDay className="about__icon" />
              <h5>занятий в день</h5>
              <small>7 дней 3 день в подарок</small>
            </article>

            <article className="about__card">
              <BiTimeFive className="about__icon" />
              <h5>время</h5>
              <small>1 час в день</small>
            </article>

            <article className="about__card">
              <BsPen className="about__icon" />
              <h5>расписание</h5>
              <small>понедельник, среда, пятница</small>
            </article>
          </div>
          <p>
            Если вы думаете, что крупнейшим в мире ритейлером является Walmart,
            подумайте еще раз. Если вы думаете, что Amazon является крупнейшим
            онлайн-ритейлером, вы снова ошиблись. Оба титула принадлежат
            Alibaba. Китайский гигант онлайн-продаж перемещает почти в три раза
            больше товаров, чем Amazon, и, если учесть его дочерние компании, он
            превзошел Walmart как крупнейшего ритейлера. Alibaba совершает набег
            на американский и европейский рынок электронной коммерции с
            AliExpress, который уже является шестым по величине сайтом
            онлайн-покупок в США. И специально для каракола был разработан курс 
            в котором мы раскажем как покупать и продать товар
          </p>

          <p>

          </p>

          <a href="https://t.me/+9V1rMTga37w4YjYy" className="btn btn-primary">
            записаться на курс
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
