import React from 'react'
import MovieItem from './MovieItem'



const MovieList = ({ movies = [] }) => {
  return movies.map((movie) => {
    return <MovieItem title={movie.title} id={movie.id} image={movie.image} rating={movie.rating} color={movie.color}/>
  })
}

export default MovieList 