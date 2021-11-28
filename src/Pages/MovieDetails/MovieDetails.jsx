import React,{useEffect, useState} from "react";
import  "./MovieDetails.scss"
import { movieList } from "../../dataObjects/MovieData";
import { useParams } from "react-router";
import {Carousel} from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom"
const MovieDetails = ()=>{
    const {id}=useParams();
    const [movie,setMovie]=useState();
    useEffect(()=>{
        console.log("res");
        let currentMovie = movieList.filter(movie=>movie.albumId==id)
        setMovie(currentMovie[0])
    },[])
    return (
        <div className="movie-detail">
            
            <div className="movie-detail__nav nav">
         <h2 className="nav__title">THE MOVIE</h2><img className="nav__icon" src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" alt="menuicon" / >
             </div>   
            <div className="img-slider">
            <Carousel showArrows={false} showThumbs={false} showStatus={false} >
            <div>
                    <img className="img-slider__image" src="https://via.placeholder.com/150/197d29" />
                </div>
                <div>
                    <img className="img-slider__image" src="https://via.placeholder.com/150/61a65" />
                    
                </div>
                <div>
                    <img className="img-slider__image" src="https://via.placeholder.com/150/66b7d2" />
                </div>
                <div>
                    <img className="img-slider__image" src="https://via.placeholder.com/600/1ee8a4" />
                </div>
                <div>
                    <img className="img-slider__image" src="https://via.placeholder.com/150/810b14" />
                </div>
            </Carousel>
            </div>
            {movie && (
            <div className="details">
                <div className="details__title">
                {movie.title}
                </div>
                <ul className="details__info info">
                    <li className="info__item--no-style">{movie.year}</li>
                    <li className="info__item">{movie.type}</li>
                    <li className="info__item">{movie.duration}</li>
                </ul>
                <div className="details__director">
                    <span className="details__director--label">Directed by :</span>
                    <span className="details__director--value">{movie.director}</span>
                </div>
                <p className="details__description">
                    {movie.description}
                </p>
                <div className="details__review">
                <Link  className="details__review--link" to="/">View Review</Link>
                </div>
                <div className="book-now">
                <button className="book-now__button">Book Now</button>
                </div>
            </div>
            
            )}
        </div>
    )
}

export default MovieDetails