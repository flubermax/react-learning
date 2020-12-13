import React from 'react'

import adaptPng from '../assets/img/adapt.png'
import techPng from '../assets/img/tech.png'
import growthPng from '../assets/img/growth.png'
import wwwPng from '../assets/img/www.png'

const Services = () => {
  return (
    <div className="price">
      <div className="container">
        <h2>Мои услуги</h2>
        <hr />

        <div className="price__item">
          <div className="price__number">1</div>
          <div className="price__body">
            <h5>Верстка по вашим макетам</h5>
            Адаптивная, резиновая верстка. Стоимость зависит от количества и сложности элементов
          </div>
        </div>

        <div className="price__item">
          <div className="price__number">2</div>
          <div className="price__body">
            <h5>Интеграция верстки с CMS WordPress</h5>
            Натяжка верстки на самую популярную CMS. Вывод новостей/записей, кастомные шаблоны страниц, блоки, поля
          </div>
        </div>

        <div className="price__item">
          <div className="price__number">3</div>
          <div className="price__body">
            <h5>Правка и доработка сайта</h5>
            Внесение правок, доработка функционала, исправление ошибок в работе сайта
          </div>
        </div>

        <div className="why__wrap">
          <div className="why__item">
            <img src={adaptPng} alt="Адаптивная верстка" />
            <h4>
              Адаптивная
              <br />
              верстка
            </h4>
            <p>Возможность комфортно просматривать сайт как на компьютере, так и на мобильных устройствах</p>
          </div>
          <div className="why__item">
            <img src={techPng} alt="Гарантия на выполненную работу" />
            <h4>
              Гарантия на
              <br />
              выполненную работу
            </h4>
            <p>В течение недели после сдачи работы я бесплатно исправлю свои ошибки, которые могли быть пропущены при приеме работы и замечены позже</p>
          </div>
          <div className="why__item">
            <img src={growthPng} alt="Подключение веб-аналитики" />
            <h4>
              Подключение
              <br />
              веб-аналитики
            </h4>
            <p>Установка счётчика Яндекс.Метрики, настройка целей для просмотра подробной статистики посещений вашего сайта</p>
          </div>
          <div className="why__item">
            <img src={wwwPng} alt="Регистрация домена и хостинга, размещение сайта" />
            <h4>
              Регистрация домена
              <br />и размещение сайта
            </h4>
            <p>Помощь в выборе и регистрации доменного имени и хостинга, перенос сайта на ваш хостинг</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
