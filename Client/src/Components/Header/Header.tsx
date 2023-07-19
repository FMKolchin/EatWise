import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Disconnect } from '../Disconnect/Disconnect';
import { Settings } from '../Settings/Settings';
import { ChangeRegisterPersonalD } from '../Settings/ChangeRegisterPersonalD';


export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Settings></Settings>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ChangeRegisterPersonalD></ChangeRegisterPersonalD>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Disconnect></Disconnect>
          </Box>

          
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
