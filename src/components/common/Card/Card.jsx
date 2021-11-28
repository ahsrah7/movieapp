import React from "react";
import "./Card.scss";

function Card({imgSrc,altText,title,certificate,language}) {
  return (
    <div className="card">
        <div className="card__image-wrapper">
            <img className="card__image" src={imgSrc} alt={altText} />
        </div>
        <div className="card__title">
            {title}
        </div>
      <div className="card__text text">
          <p className="text__certificate">{certificate}</p><span className="text__language">{language}</span>
      </div>
    </div>
  );
}

export default Card;
