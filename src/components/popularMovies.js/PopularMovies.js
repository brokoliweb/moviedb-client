import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

import axios from 'axios'
import styled from 'styled-components'

import MovieCard from './MovieCard'
import { TMDB_API_KEY } from '../../constants'

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

const GET_USERS = gql`
  {
    allUser {
      users {
        id
        name
      }
    }
  }
`

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(null)
  const [cardData, setCardData] = useState(null)

  const { loading, error, data } = useQuery(GET_USERS)

  console.log(`data:`, data)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: TMDB_API_KEY,
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
