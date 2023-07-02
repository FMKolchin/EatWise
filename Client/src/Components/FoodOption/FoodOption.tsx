import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Food } from "../../Models/Food";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../Redux/userSlice/slice";


export const FoodOption = (props: any) => {
    const food:Food= props.food;
    // const user = useSelector(selectors.getUser);
    const dispatch = useDispatch();


    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
        // dispatch(addProduct({food:food}))
        //do what you need to add food details to what eaten
    };
    

    return (
        <><ListItemButton 
        onClick={(event) =>{console.log("cliced now: "+JSON.stringify(food));handleListItemClick(event, food.id)} }
        >
            <ListItemText primary={food.productName} />
        </ListItemButton><Divider /></>
      );
}