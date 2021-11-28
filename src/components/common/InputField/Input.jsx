import React from "react";
import "./Input.scss"
const InputWithIcon = ({type,placeholder,onchange,value,name,errorMsg})=>{

return (

   <div className="field">
       <div className="field__icon">&#9924;</div>
        <div className="field__input-wrapper"><input className="field__input" name={name} type={type} placeholder={placeholder} value={value} onChange={onchange}  />
        <p className="field__error-text">{errorMsg}</p>
   </div>
   </div>
   
)
}

export default InputWithIcon