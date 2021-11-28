import React from "react";
import "./Button.scss"
const Button = ({type,onclick,label})=>{

return (
    <button class="button" type={type} onClick={onclick}>
                {label}
              </button>
   
)
}

export default Button