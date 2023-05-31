import React from 'react'
import styled from 'styled-components'
import MovieStar from "../img/1.jpg"


const Container = styled.div`
width: 240px;

`

const CastImage = styled.img`


`
const CastInfo = styled.div`
display: flex;
`


const ImageCard = () => {
  return (
    <Container>
      <CastImage src={MovieStar} />
      <CastInfo>
        Name: şlgişlhfg
        Role Name:dsşliflsş
      </CastInfo>

    </Container>
  )
}

export default ImageCard
