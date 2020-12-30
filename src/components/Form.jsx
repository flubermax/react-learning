import React from 'react';

const Form = ({children}) => {
  return (
    <form className="form" noValidate>{children}</form>
  );
}

export default Form;