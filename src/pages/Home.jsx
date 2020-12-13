import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="firstScreen__wrap">
      <h1>
        Сайт-портфолио
        <br />
        frontend-разработчика
      </h1>
      <p>Верстка и доработка сайтов / интеграция с WordPress</p>
      <Link to="/portfolio">
        <div className="firstScreen__button">
          <span className="firstScreen__buttonText">Смотреть работы</span>
          <span className="firstScreen__buttonWaves"></span>
        </div>
      </Link>

      <div className="firstScreen__image">
        WEB
        <br />
        MAX
      </div>
    </div>
  )
}

export default Home
