import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const VideoWrapper = styled.div`

`
const VideoFrame = styled.video`
max-height: 720px;
width: 100%;
object-fit: cover;
`

const VideoDescription = styled.div`

`
const Single = ( video) => {
  return (
    <Container>
      <VideoWrapper>
        <VideoFrame src={video.name} controls />
      </VideoWrapper>

      <VideoDescription>
            
      </VideoDescription>
    </Container>
  )
}

export default Single

 