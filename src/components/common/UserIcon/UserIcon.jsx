import React from "react";
import "./UserIcon.scss"
const UserIcon = ({src,altText})=>{

return (
    <div className="user-icon">
    <img className="user-icon__icon" src={src} alt={altText} />
  </div>
   
)
}

export default UserIcon