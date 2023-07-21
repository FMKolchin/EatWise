import { AddFood } from "../AddFood/AddFood"
import { ExistCookie } from '../../Services/ExistCookie'
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DisplayDailyConsumption } from "../DisplayDailyConsumption/DisplayDailyConsumption"
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../Redux/userSlice/slice";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import DisplayDailyWater from "../DisplayDailyWater/DisplayDailyWater";
import { DisplayWeeklyConsumption } from "../DisplayWeeklyConsumption/DisplayWeeklyConsumption";
import { User } from "../../Models/User";




export const Home = () => {
    const navigate: NavigateFunction = useNavigate();
    const userRedux = useSelector(selectors.getUser);
    const [user, setUser] = useState<User>(userRedux);
    console.log(JSON.stringify(user) + " user from toolkit");
    const dispatch = useDispatch();

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

    useEffect(() => {
        setUser(userRedux);
    }, [userRedux])

    return (
        <div>
           <Header></Header>
            <br />
            <br />
            <Grid container>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <DisplayDailyConsumption user={user}></DisplayDailyConsumption>
                        </Grid>
                        <Grid item>
                            <DisplayDailyWater user={user}></DisplayDailyWater>
                        </Grid>
                    </Grid>
                   
                    <DisplayWeeklyConsumption weeklyConsumption={user.weeklyConsumption}></DisplayWeeklyConsumption>
                </Grid>
                <Grid item>
                    <AddFood />
                </Grid>
            </Grid>



        </div>
    )
}