import React from 'react'
import { useQuery } from '@apollo/client'
import { POPULAR_MOVIES_QUERY } from '../graphql/queries'

function MovieList() {
  const { loading, error, data } = useQuery(POPULAR_MOVIES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {data.popularMovies.results.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  )
}

export default MovieList
