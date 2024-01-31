import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material"
import Header from "../Header/Header"
import { NavigateFunction, useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChangeAccountDetails } from "./ChangeAccountDetails";
import { RegisterPersonalDetails } from "../RegisterPersonalDetails/RegisterPersonalDetails";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../Models/User";
import { selectors, actions } from "../../Redux/userSlice/slice";
import { ExistCookie } from "../../Services/ExistCookie";

export const Settings = () =>{
    const navigate: NavigateFunction = useNavigate();
    const userRedux = useSelector(selectors.getUser);
    const [user, setUser] = useState<User>(userRedux);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkValid = async () => {
            if (!ExistCookie()) {
                navigate('/login', { replace: true });
            }
            else {
                dispatch(actions.onInitUserRequest());
                if(user.username==='admin'){
                    navigate('/addArticle',{replace: true});
                }
                // const user = useSelector(selectors.getUser);
            }
        };
        checkValid();

    }
        , []);

    useEffect(() => {
        setUser(userRedux);
    }, [userRedux])

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