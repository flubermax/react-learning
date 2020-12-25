import React from 'react'

import {PageTitle} from '../components'

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <PageTitle text="Контакты" />

        <form>
          <input type="hidden" name="project_name" value="WEBMAX" />
          <input type="hidden" name="admin_email" value="maks125@yandex.ru" />
          <input type="hidden" name="form_subject" value="Сообщение с сайта WEBMAX" />

          <input id="check" type="hidden" value="" />
          <input type="text" name="Имя" placeholder="Ваше имя" className="short_input" />
          <input type="text" name="Email" required placeholder="Email (обязательно)" id="email" className="short_input" />
          <input type="text" name="Тема" placeholder="Тема" />
          <textarea name="Сообщение" placeholder="Сообщение"></textarea>
          <button className="sent" type="submit" onclick="document.getElementById('check').value = 'secretcode';">
            Отправить
          </button>
          <div className="mailSent">Сообщение отправлено. Я скоро свяжусь с вами!</div>
        </form>
        <div className="contact__socials">
          <a href="https://vk.com/flubermax" target="_blank">
            <i className="fab fa-vk"></i>
          </a>
          <a href="https://www.instagram.com/flubermax" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/maksim-gorbachev-62b269184/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts
