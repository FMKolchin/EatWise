import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Disconnect } from '../Disconnect/Disconnect';
import { SettingsButton } from '../Settings/SettingsButton';
import { Button } from '@mui/material';



export default function Header() {
 
  return (
    <><Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SettingsButton></SettingsButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button>home</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Disconnect></Disconnect>
          </Box>
        </Toolbar>
      </AppBar>
    </Box></>
  );
}
