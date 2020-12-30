import React from 'react'

const SubmitButton = (props) => {
  return (
    <button className="form__submit" type="submit" {...props}>
      {props.children}
    </button>
  )
}

export default SubmitButton
