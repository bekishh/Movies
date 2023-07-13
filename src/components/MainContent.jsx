import React from 'react'
import MoviesCategory from './MoviesCategory'

const movies = [
    {
        id: 1,
        title: 'One Piece',
        rating: '4',
        color: 'chocolate',
        image: 'https://i.pinimg.com/originals/ec/32/dc/ec32dcff7aea869c2d9eed5162aa02d6.jpg'
    },
    {
        id: 2,
        title: 'Dragon Ball',
        rating: '5',
        color: 'chocolate',
        image: 'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg'
    },
    {
        id: 3,
        title: 'Bleach',
        rating: '5',
        color: 'chocolate',
        image: 'https://play-lh.googleusercontent.com/WxeYf5E0JTGz9nhE4j3vqUflFcBgjYNUbBJYGT6wtitsI4LOowVwUVDXEcreSUTyRCw=w526-h296-rw'
    },
    {
        id: 4,
        title: 'Black Clover',
        rating: '5',
        color: 'chocolate',
        image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe'
    }
]





const MainContent = () => {
  return (
    <main>
        <MoviesCategory movieList={movies}/> 
    </main>
  )
}

export default MainContent