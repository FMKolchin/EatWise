import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Disconnect } from '../Disconnect/Disconnect';
import { SettingsButton } from '../Settings/SettingsButton';
import {  Button, IconButton } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import LogoIcon from '../../../public/eatwise-high-resolution-logo-white-on-transparent-background.png';
import { width } from '@mui/system';



export default function Header() {
  const navigate:NavigateFunction = useNavigate();
 
  const navigateHome = () =>{
    navigate('/home')
  }
  const navigateContactUs = () =>{
    navigate('/contactUs')
  }
  const navigateAbout= () =>{
    navigate('/about')
  }

  const navigateArticle=() =>{
    navigate('/article')
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:"#31C48D"}}>
        <Toolbar>

          <Box sx={{ flexGrow: 1 }} />

          {/* <Box  sx={{ display: { xs: 'none', md: 'flex' } }}> */}
          {/* <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={navigateHome}
        color="inherit"
      > */}
      <Button onClick={navigateHome} >
        <img src={LogoIcon} style={{width:60,height:35}}  />
      </Button>
      <Button onClick={navigateAbout} >
       about
      </Button>
      <Button onClick={navigateArticle} >
       article
      </Button>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SettingsButton></SettingsButton>
          </Box>

          <Button onClick={navigateContactUs} >contact us</Button> 
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Disconnect></Disconnect>
          </Box>
        </Toolbar>
      </AppBar>
    </Box></>
  );
}
