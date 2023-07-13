import React from 'react'
import Button from './Button'

const MovieItem = ({image, rating, title, color}) => {
  return (
    <div className='movie-item'>
        <img className='icons' src={image}
        alt={title} />
        <Button color={color} rating={rating} title={title}/>
    </div>
  )
}

export default MovieItem

