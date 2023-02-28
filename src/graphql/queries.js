import { gql } from '@apollo/client'

export const POPULAR_MOVIES_QUERY = gql`
  query {
    popularMovies {
      results {
        id
        title
        overview
        poster_path
      }
    }
  }
`
