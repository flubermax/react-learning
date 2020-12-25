import React from 'react';

const WhyItem = ({image, imageAlt, title, text}) => {
  return (
    <div className="why__item">
      <img src={image} alt={imageAlt} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default WhyItem;