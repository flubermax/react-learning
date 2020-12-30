import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = ({ number, title, text }) => {
  return (
    <div className="price__item">
      <div className="price__number">{number}</div>
      <div className="price__body">
        <h5>{title}</h5>
        {text}
      </div>
    </div>
  )
}

ServiceItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

ServiceItem.defaultProps = {
  title: 'Заголовок услуги',
  text: 'Описание услуги',
}

export default ServiceItem
