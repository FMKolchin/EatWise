import { Card } from "@mui/material"
import RegisterPersonalDetails from "../RegisterPersonalDetails/RegisterPersonalDetails"
import '../../App.css'

export const RegisterPersonalDetailsPage = ()=>{

    return(
        <Card variant="outlined">
            <h3 >personal details</h3>
            <br></br>
            <RegisterPersonalDetails/>
            <br></br>
            </Card>
    )
}