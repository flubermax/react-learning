import React from 'react'
import PropTypes from 'prop-types'

const WhyItem = ({ image, imageAlt, title, text }) => {
  return (
    <div className="why__item">
      <img src={image} alt={imageAlt} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

WhyItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default WhyItem
