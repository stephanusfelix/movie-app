import React from "react";
import "./moviecard.scss";

function Movie(props) {
  return (
    <div className="card">
      <img className="card__image" src={props.data.Poster} alt="Movie" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">
              {props.data.Title} ({props.data.Year})
            </h3>
          </div>
        </div>
        <p class="card__description">
          Year : {props.data.Year} <br></br>
          Type : {props.data.Type} <br></br>
          imdb ID : {props.data.imdbID}
        </p>
      </div>
    </div>
  );
}

export default Movie;
