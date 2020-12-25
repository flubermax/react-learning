import React from 'react';

const ServiceItem = ({number, title, text}) => {
  return (
    <div className="price__item">
      <div className="price__number">{number}</div>
      <div className="price__body">
        <h5>{title}</h5>
        {text}
      </div>
    </div>
  );
}

export default ServiceItem;