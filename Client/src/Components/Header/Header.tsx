import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Disconnect } from '../Disconnect/Disconnect';
import { Settings } from '../Settings/SettingsButton';
import { ChangeAccountDetails } from '../Settings/ChangeAccountDetails';
import { useEffect, useState } from 'react';
import { actions, selectors } from '../../Redux/userSlice/slice';
import { ExistCookie } from '../../Services/ExistCookie';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { User } from '../../Models/User';
import { Home } from '../Home/Home';


export default function Header() {
  const navigate: NavigateFunction = useNavigate();
  const userRedux = useSelector(selectors.getUser);
  const [user, setUser] = useState<User>(userRedux);
  console.log(JSON.stringify(user) + " user from toolkit");
  const dispatch = useDispatch();

//console.log(JSON.stringify(user) + " user from toolkit"); 
  useEffect(() => {
      setUser(userRedux);
  }, [userRedux])
  useEffect(() => {
    const checkValid = async () => {
        console.log("before check exist cookie in home");
        if (!ExistCookie()) {
            console.log("cookie not exist in user controller");
            navigate('/login', { replace: true });
        }
        else {
            // console.log("home before user from cookie");
            // let u:User = await userFromCookie();
            // console.log(u);
            dispatch(actions.onInitUserRequest());
            if(user.administration){
                navigate('/message',{replace: true});
            }
            // const user = useSelector(selectors.getUser);
            console.log("redux user " + user);
        }
    };
    checkValid();

}
    , []);


  return (
    <><Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Settings></Settings>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ChangeAccountDetails></ChangeAccountDetails>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Disconnect></Disconnect>
          </Box>
        </Toolbar>
      </AppBar>
    </Box></>
  );
}
