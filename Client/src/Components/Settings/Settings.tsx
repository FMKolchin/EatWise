import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material"
import Header from "../Header/Header"
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChangeAccountDetails } from "./ChangeAccountDetails";
import { RegisterPersonalDetails } from "../RegisterPersonalDetails/RegisterPersonalDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChangeAccountDetails } from "./ChangeAccountDetails";
import { RegisterPersonalDetails } from "../RegisterPersonalDetails/RegisterPersonalDetails";


export const Settings = () =>{
    return (
        <>
            <Header></Header>
              <br></br>
              <br></br>
              <br></br>
            <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>account settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <ChangeAccountDetails/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>personal settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <RegisterPersonalDetails/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </>
    )
}