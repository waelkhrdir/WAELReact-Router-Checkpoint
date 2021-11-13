import React from "react";
import StarRating from "./StarRating";
import {Link} from 'react-router-dom'
const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
     
 <StarRating rate={film.rating} />
      <img src={film.image} alt={film.name} />
      <h3> {film.name} </h3>
      <p> {film.date} </p> 
       <Link  to={`/movie/${film.id}`} >
         <button className="wael">view details</button>
   </Link>
    </div>
  );
};

export default MovieCard;