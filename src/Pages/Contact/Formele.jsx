import React from 'react'
import Style from "./formele.module.css"

const Formele = ({type,lable,placeholder,id,isrequired}) => {
  return (
    
      (type === "textarea")? 
        (<div className={Style.container}>
        <label htmlFor={id} className={`${Style.lbl} ${isrequired?Style.req:""}`}>{lable}</label>
        <textarea name={id} id={id} placeholder={placeholder} required={isrequired} 
        className={`${Style.input} ${Style.textarea}`}/>
        </div>)
      
      :
      (<div className={Style.container}>
      <label htmlFor={id} className={`${Style.lbl} ${isrequired?Style.req:""}`}>{lable}</label>
      <input type={type} name={id} id={id} placeholder={placeholder} required={isrequired} 
      className={Style.input}/>
      </div>)
    

  )
}

export default Formele