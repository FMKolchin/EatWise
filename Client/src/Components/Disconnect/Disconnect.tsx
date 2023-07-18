import {IconButton } from "@mui/material"
import { deleteCookie } from "../../Services/ExistCookie"
import { useNavigate } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';

export const Disconnect = () =>{
    const navigate = useNavigate();

    const disconnect = ()=>{
        deleteCookie();
        navigate('/login',{replace: true});
    }

    return (
        <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={disconnect}
        color="inherit"
      >
        <LogoutIcon />
      </IconButton>
    )
}