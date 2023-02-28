import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  margin: 20px 0;
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
`

const InfoContainer = styled.div`
  background: rgba(255, 250, 250, 0.8);
  padding: 10px;
  border-radius: 5px;
`

const MovieCard = ({ data }) => {
  const backgroundImage = `url(https://image.tmdb.org/t/p/original${data.poster_path})`

  return (
    <Container backgroundImage={backgroundImage}>
      <InfoContainer>
        <h1>Original Title: {data.original_title}</h1>
        <h3>Overview: {data.overview}</h3>
        <h2>Release Data: {data.release_date}</h2>
      </InfoContainer>
    </Container>
  )
}

export default MovieCard
