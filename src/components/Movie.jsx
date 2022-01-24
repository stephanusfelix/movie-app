import React from "react";

function Movie(props){

    return (
      <div>
        <img  src={props.data.Poster} alt="Movie" />
        <h1>{props.data.Title}</h1>
      </div>
    );
  }

export default Movie