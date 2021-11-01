import React from 'react';
import MovieCard from './MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({films, inputSearch}) => {
  return (
    <div className="films">
      {films.filter(film=>film.title.toLowerCase().includes(inputSearch.toLowerCase())).map((film,i)=><MovieCard key={i} title={film.title} affiche={film.affiche} description={film.description} />)}
    </div>
  );
}

export default MovieList;
