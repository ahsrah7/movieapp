import React from "react";
import "./Movie.scss";
import { movieList } from "../../dataObjects/MovieData";
import Card from "../../components/common/Card/Card";
import { Link } from "react-router-dom";
const Movie=()=> {
    
  return (
    <div className="movie">
     <div className="movie__nav nav">
         <h2 className="nav__title">THE MOVIE</h2><img className="nav__icon" src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" alt="menuicon" / ></div>   
         <div className="movie__item-container">
    {movieList
    .map(movie=>{
        return <Link to={`/details/${movie.albumId}`} className="movie__item"><Card imgSrc={movie.thumbnailUrl} altText={movie.title} title={movie.title} certificate={movie.certificate} language="English" /></Link>
    })}  
    </div>
    </div>
  );
}

export default Movie;
