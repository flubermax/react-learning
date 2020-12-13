import React from 'react'

import myPhoto from '../assets/img/me.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>Обо мне</h2>
        <hr />
        <div className="about__wrap">
          <div className="about__image">
            <img src={myPhoto} className="about__myphoto" alt="front-end разработчик" />
          </div>
          <div className="about__text">
            <p>
              Привет. Меня зовут Максим, мне 28 лет. Я junior frontend-разработчик.
              <br />
              Мой коммерческий опыт на данный момент - 1 год. Есть опыт работы и на фрилансе, и в web-студии.
              <br />
              <br />
              Занимаюсь версткой по макетам, интеграцией верстки с CMS WordPress,
              <br />а так же правкой и доработкой сайтов.
              <br />
              <br />
              Мои навыки на данный момент: HTML, CSS/SCSS, JS/jQuery, Flexbox/Bootstrap, бэм, WordPress, Gulp, Git.
              <br />В планах освоить ReactJS.
            </p>
          </div>
        </div>
        <div className="about__cube__wrap">
          <div className="about__cube">
            <div className="about__cube__side front">HTML</div>
            <div className="about__cube__side back">CSS / SCSS</div>
            <div className="about__cube__side right">jQuery</div>
            <div className="about__cube__side left">JavaScript</div>
            <div className="about__cube__side top">WordPress</div>
            <div className="about__cube__side bottom">Gulp</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
