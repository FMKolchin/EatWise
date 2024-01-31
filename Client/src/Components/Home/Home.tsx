import { AddFood } from "../AddFood/AddFood"
import { ExistCookie } from '../../Services/ExistCookie'
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DisplayDailyConsumption } from "../DisplayDailyConsumption/DisplayDailyConsumption"
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../Redux/userSlice/slice";
import Header from "../Header/Header";
import { Card, Grid } from "@mui/material";
import DisplayDailyWater from "../DisplayDailyWater/DisplayDailyWater";
import { DisplayWeeklyConsumption } from "../DisplayWeeklyConsumption/DisplayWeeklyConsumption";
import { User } from "../../Models/User";




export const Home = () => {
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
                if(user.administration){
                    navigate('/message',{replace: true});
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
        <div>
           <Header/>
            <br />
            <br />
            <Grid container  spacing={2}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
            <Card variant="outlined">
                            <DisplayDailyConsumption user={user}></DisplayDailyConsumption>
                        </Card></Grid>
                        <Grid item>
            
                  <Card variant="outlined"><DisplayDailyWater user={user}></DisplayDailyWater></Card>
                        </Grid>
                    </Grid>
                   
                    {/* <DisplayWeeklyConsumption weeklyConsumption={user.weeklyConsumption}></DisplayWeeklyConsumption> */}
                </Grid>
                <Grid item>
                    <AddFood />
                </Grid>
            </Grid>



        </div>
    )
}