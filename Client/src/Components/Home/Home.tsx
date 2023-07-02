import { AddFood } from "../AddFood/AddFood"
import { ExistCookie } from '../../Services/ExistCookie'
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DisplayDailyConsumption } from "../DisplayDailyConsumption/DisplayDailyConsumption"
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../Redux/userSlice/slice";




export const Home = () => {
    const navigate: NavigateFunction = useNavigate();
    const user = useSelector(selectors.getUser);
    console.log(JSON.stringify(user)+" user from toolkit");
    const dispatch = useDispatch();
    // let user:User = new User();
    // const [user,setUser] = useState<User>(new User());

    useEffect( () => {
          const checkValid = async () => {
             console.log("before check exist cookie in home");
            if (! ExistCookie()) {
                console.log("cookie not exist in user controller");
                navigate('/login', { replace: true });
            }
            else{
                // console.log("home before user from cookie");
                // let u:User = await userFromCookie();
                // console.log(u);
                dispatch(actions.onInitUserRequest());
                // const user = useSelector(selectors.getUser);
                console.log("redux user "+user);
            }
         };
         checkValid();
       
    }
        , []);

    return (
        <div>
            <h1>home page</h1>
            <AddFood></AddFood>
            {/* <DisplayCharts></DisplayCharts> */}
            <DisplayDailyConsumption user={user}></DisplayDailyConsumption>

        </div>
    )
    }