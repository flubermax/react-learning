import React from 'react'

import { PageTitle, ServiceItem, WhyItem } from '../components'

import adaptPng from '../assets/img/adapt.png'
import techPng from '../assets/img/tech.png'
import growthPng from '../assets/img/growth.png'
import wwwPng from '../assets/img/www.png'

const Services = () => {
  return (
    <div className="price">
      <div className="container">
        <PageTitle text="Мои услуги" />

        <ServiceItem number="1" title="Верстка по вашим макетам" text="Адаптивная, резиновая верстка. Стоимость зависит от количества и сложности элементов" />
        <ServiceItem number="2" title="Интеграция верстки с CMS WordPress" text="Натяжка верстки на самую популярную CMS. Вывод новостей/записей, кастомные шаблоны страниц, блоки, поля" />
        <ServiceItem number="3" title="Правка и доработка сайта" text="Внесение правок, доработка функционала, исправление ошибок в работе сайта" />

        <h3 className="why__title">При сотрудничестве со мной вы получаете:</h3>
        <div className="why__wrap">
          <WhyItem image={adaptPng} imageAlt="Адаптивная верстка" title="Адаптивная верстка" text="Возможность комфортно просматривать сайт как на компьютере, так и на мобильных устройствах" />
          <WhyItem
            image={techPng}
            imageAlt="Гарантия на выполненную работу"
            title="Гарантия на выполненную работу"
            text="В течение недели после сдачи работы я бесплатно исправлю свои ошибки, которые могли быть пропущены при приеме работы и замечены позже"
          />
          <WhyItem
            image={growthPng}
            imageAlt="Подключение веб-аналитики"
            title="Подключение веб-аналитики"
            text="Установка счётчика Яндекс.Метрики, настройка целей для просмотра подробной статистики посещений вашего сайта"
          />
          <WhyItem
            image={wwwPng}
            imageAlt="Регистрация домена и хостинга, размещение сайта"
            title="Регистрация домена и хостинга, размещение сайта"
            text="Помощь в выборе и регистрации доменного имени и хостинга, перенос сайта на ваш хостинг"
          />
        </div>
      </div>
    </div>
  )
}

export default Services
