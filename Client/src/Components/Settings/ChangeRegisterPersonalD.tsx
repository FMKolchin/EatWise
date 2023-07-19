import {IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings';

export const ChangeRegisterPersonalD = () =>{
    const navigate = useNavigate();

    const openSettingsPage = ()=>{
      navigate('/RegisterPersonalDetails',{replace:true});
    }
    
    return (
        <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={openSettingsPage}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
    )
}