import React, { useState, useEffect  } from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import Comments from '../components/Comments'
import Card from '../components/Card'
import axios from 'axios'
import { useLocation } from 'react-router-dom'




const Container = styled.div`
display: flex;
gap: 24px;
`
const Content = styled.div`
flex: 5;
`
const Recommendation = styled.div`
flex: 2;
`


const VideoWrapper = styled.div`

`
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme})=>theme.text}
`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const Info = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${({theme})=>theme.textSoft}
`
const Buttons = styled.div`
display: flex;
gap: 20px;
color:${({theme})=>theme.text};



`
const Button = styled.div`
display: flex;
align-items: center;
justify-content: space-end;
gap: 10px;
cursor: pointer;
`
const Icon = styled.img`
width: 25px;
height: 25px;

`
const Hr = styled.hr`
margin: 15px 0;
border: 0.5 solid ${({theme}) => theme.soft};
`

const Channel = styled.div`
display: flex;
justify-content: space-between;

`

const ChannelInfo = styled.div`
display: flex;
gap: 20px;

`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ChannelDetail = styled.div`
displays: flex;
flex-direction: column;
color: ${({theme})=>theme.text};

`
const ChannelName = styled.span`
font-weight: 500;


`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 10px;
  cursor: pointer;
`

const MovieDetails = styled.div`

`
const Summary = styled.p`
font-size: 14px;
margin-bottom: 20px;

`




const Video = () => {
  

  const pathname = useLocation().pathname
  const id = pathname.split('/video')[1]

  const [movie, setMovie] = useState({})

  
  

  useEffect ( () => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos%2Csimilar%2Cimages&language=en-US&include_image_language=en`, 
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: 'en-US',
            
            },
            
          })
        
        
        setMovie(response.data)
        
        } catch (err) {
        console.log(err)
      }
    }
    fetchMovie()
  }, []);

   
  return (
    <Container>
      {movie?.id && (
        <Content>
          <VideoWrapper>
            <iframe
              width='100%'
              height='480'
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='test title'
            ></iframe>
          </VideoWrapper>
          <Title>{movie?.videos?.results[0]?.name}</Title>
          <Details>
            <Info>7,948,154 views • Jun 22, 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpAltOutlinedIcon />
                123
              </Button>
              <Button>
                <ThumbDownOffAltOutlinedIcon />
                Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon />
                Share
              </Button>
              <Button>
                <DownloadOutlinedIcon />
                Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Image src='https://yt3.ggpht.com/yti/AHXOFjWkYQBwV1M344oDv6bcWgZIL0rJVlYma_F4sGGA=s88-c-k-c0x00ffffff-no-rj-mo' />
              <ChannelDetail>
                <ChannelName>Test Channel</ChannelName>
                <ChannelCounter>123K subsc.</ChannelCounter>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  repellat nihil odit voluptates fugiat animi nam provident, et
                  in debitis labore eos officia praesentium reprehenderit fuga
                  officiis corrupti ipsam facere.
                </Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe>
          </Channel>
          <Hr />
          <Comments />
        </Content>
      )}
      {movie?.id && (
        <Recommendation>
          {movie.similar.results.map((i) => (
            <Card key={i.id} movie={i} type='sm' />
          ))}
        </Recommendation>
      )}
    </Container>
  )
}

export default Video