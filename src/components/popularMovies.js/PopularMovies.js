import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import MovieCard from './MovieCard'

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  padding-right: 20px;
`

const CardContainer = styled.div`
  display: flex;
  width: 60%;
  vertical-align: center;
`

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(null)
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: 'en-US',
              page: 1,
            },
          }
        )
        setPopularMovies(response.data.results)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPopularMovies()
  }, [])

  const handleHover = (movie) => {
    setCardData(movie)
  }

  if (!popularMovies) return <div>...Loading</div>

  return (
    <Wrapper>
      <Container>
        <h2>Popular Movies</h2>
        <ul>
          {popularMovies.map((movie) => (
            <li
              onMouseOver={() => handleHover(movie)}
              onMouseLeave={() => setCardData(null)}
              key={movie.id}
              style={{ lineHeight: '1.5', cursor: 'pointer' }}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      </Container>
      <CardContainer>
        <MovieCard data={cardData || popularMovies[0]} />
      </CardContainer>
    </Wrapper>
  )
}

export default PopularMovies
