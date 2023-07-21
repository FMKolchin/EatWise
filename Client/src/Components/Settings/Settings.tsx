import { Button } from "@mui/material"
import Header from "../Header/Header"
import { useNavigate } from "react-router-dom";


export const Settings = () =>{

    const navigate = useNavigate();

    const openPersonaleDetailsPage = ()=>{
      navigate('/RegisterPersonalDetails');
    }

    const openAccountDetailsPage = ()=>{
        navigate('/changeAccountDetails');
      }

    return (
        <div>
            <Header></Header>
            <Button onClick={openPersonaleDetailsPage}>update personal details.</Button>
            <Button onClick={openAccountDetailsPage}>update account details</Button>
        </div>
    )
}