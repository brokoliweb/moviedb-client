import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tube from "../img/logo2.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
flex: 1;
background-color: ${({theme}) => theme.bgLighter};
height: 100%;
color: ${({theme}) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`

const Wrapper = styled.div`
padding: 18px 26px;

`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: bold;
margin-bottom: 25px;

`
const Img = styled.img`
height: 30px;

`
const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 7.5px 0;

&:hover {
     background-color: ${({theme}) => theme.soft} 
    };
`
const Hr = styled.hr`
margin: 15px 0;
border: 0.5 solid ${({theme}) => theme.soft};
`

const Login = styled.div`

`

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`
const Title = styled.h2`
font-size: 18px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 10px;
`


const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration:"none", color: "inherit"} }>
            <Logo>
                <Img src={Tube} alt="logo" />
                Movie Moment
            </Logo>
        </Link>
        <Link to="/" style={{textDecoration:"none", color:"inherit"} }>
            <Item>
                <HomeIcon />
                Home
            </Item>  
        </Link>    
            <Link to="trends" style={{textDecoration:"none" , color: "inherit"}}>
            <Item> 
                <ExploreOutlinedIcon />
                Explore
            </Item>
            </Link>
            <Link to="subcriptions" style={{textDecoration:"none" , color: "inherit"}}>
            <Item> 
                <SubscriptionsOutlinedIcon />
                Subscriptions
            </Item>    
            </Link>
            <Hr/>
            <Item>
                <VideoLibraryOutlinedIcon />
                Library
            </Item>
            
            <Item>
                <FavoriteOutlinedIcon />
                Favorites
            </Item>    
            <Hr/>
            <Login>
                Sign in to like movies, comments and subscrise.
                <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                </Button>
                </Link>
            </Login>
            <Hr/>
            <Title>Categories</Title>
            <Item>
                <LibraryMusicOutlinedIcon />
                Music
            </Item>
            <Item>
                <SportsBasketballOutlinedIcon />
                Sports
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon />
                Gaming
            </Item>
            <Item>
                <MovieOutlinedIcon />
                Movies
            </Item>
            <Item>
                <ArticleOutlinedIcon />
                News
            </Item>
            <Item>
                <LiveTvOutlinedIcon />
                Live
            </Item>
            <Hr/>
            <Item>
                <SettingsOutlinedIcon  />
                Settings
            </Item>
            <Item>
                <FlagOutlinedIcon  />
                Report
            </Item>
            <Item>
                <HelpOutlineOutlinedIcon  />
                Help
            </Item>
            <Item onClick={()=>setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon />
                { darkMode ? "Light" : "Dark" } Mode
            </Item>

            


                

            
          
        </Wrapper>
     
    </Container>
  )
}

export default Menu
