import React from 'react'
import "./Form.css"

const Form = (props) => {

    const {label,onChange, id, ...inputProps} = props
  return (
    <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} onChange = {onChange}/>
    </div>
  )
}

export default Form