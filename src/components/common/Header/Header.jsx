import React from "react";
import "./Header.scss"
const Header = ({text})=>{

return (
    <div className="header">
          <div className="header__wrapper">
            <div className="header__back-arrow">&#129152;</div>
            <div className="header__spacer"></div>
            <div className="header__title">{text}</div>
          </div>
        </div>
   
)
}

export default Header