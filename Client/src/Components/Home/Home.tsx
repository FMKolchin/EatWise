import { AddFood } from "../AddFood/AddFood"
import { ExistCookie } from '../../Services/ExistCookie'
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";



export const Home = () => {
    const navigate: NavigateFunction = useNavigate();

    useEffect( () => {
        //  const checkValid =  () => {
             console.log("before check exist cookie in home")
            if (! ExistCookie()) {

                console.log("cookie not exist in user controller")
                navigate('/login', { replace: true });

            }
        //  };
        //  checkValid();
       
    }
        , []);

    return (
        <div>
            <h1>home page</h1>
            <AddFood></AddFood>

        </div>
    )
}