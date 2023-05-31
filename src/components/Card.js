import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`

const Image = styled.img`
    width: 100%;
    height: 75vh;
    // height: ${(props) =>props.type === "sm" ? "80px" : "202px"};
    
    background-color: #999;
    flex: 1;
    
`

const Details = styled.div`
   display: flex;
   margin-top: ${(props) => props.type !== "sm" && "16px"};
   gap: 12px;
   flex: 2;
`

const ChannelImage = styled.img`
   width: 36px;
   height: 36px;
   border-radius: 50%;
   background-color: #999;
   display: ${(props) => props.type === "sm" && "none"}
`
const Texts = styled.div`
   
`
const Title = styled.h1`
   font-size: 16px; 
   font-weight: 500;
   color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
   font-size: 14px;
   color: ${({theme}) => theme.textSoft};
   margin: 8px 0;
`
const Info = styled.div`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
`


const Card = ({ type, movie }) => {
  const movieImage = `https://image.tmdb.org/t/p/original${movie.poster_path}`
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
          <Image 
           type={type}
           src={movieImage} />
          <Details type={type} >
              <ChannelImage src={movieImage} />
              <Texts>
                <Title>{movie.original_title} </Title>
                <ChannelName> {movie.release_date} </ChannelName>
                <Info> Imdb Vote: {movie.vote_average}</Info>
              </Texts>
          </Details>
      </Container>
    </Link>
  )
}

export default Card