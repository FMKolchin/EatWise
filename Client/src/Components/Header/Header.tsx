import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Disconnect } from '../Disconnect/Disconnect';
import { SettingsButton } from '../Settings/SettingsButton';
import { Button, Icon, IconButton } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoIcon from '../../../public/eatwise-high-resolution-logo-white-on-transparent-background.png'
export default function Header() {
  const navigate: NavigateFunction = useNavigate();
  const navigateHome = () => {
    navigate('/home', { replace: true });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#31c48d' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <SettingsButton></SettingsButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Disconnect></Disconnect>
            </Box>
            <IconButton
           size="large"
          edge="end"
        aria-label="account of current user"
       aria-haspopup="true"
        onClick={navigateHome}
         color="inherit"
          >
      <img src={LogoIcon}  style={{ width: 60, height: 45 }} />
</IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
