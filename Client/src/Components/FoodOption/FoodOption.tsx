import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Food } from "../../Models/Food";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../Redux/userSlice/slice";
import { User } from "../../Models/User";
import { Nutrition } from "../../Models/Nutrition";


export const FoodOption = (props: any) => {
  const food: Food = props.food;
  const user: User = useSelector(selectors.getUser);
  const amount:number=props.amount;


  

  const dispatch = useDispatch();


  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    // calAmount(amount);
    dispatch(actions.onAddToDailyConsomptionRequest({ user: user, nutrition: food.productValues }));
    dispatch(actions.onUpdateDaysReqest({ user: user.id }));
    // dispatch(actions.onAddFoodOptionRequest({ user:user,nut:food.productValues}));
    //do what you need to add food details to what eaten
  };
  const calAmount=(amount:number)=>{
    console.log("I am in calAmount");
    //חישוב כמות של האוכל 
    const calories:number=100/food.productValues.calories;
     food.productValues.calories=calories*amount;
     const carbohydrates:number=100/food.productValues.carbohydrates;
     food.productValues.carbohydrates=carbohydrates*amount;
     const cholesterol:number=100/food.productValues.cholesterol;
     food.productValues.cholesterol=cholesterol*amount;
     const proteins:number=100/food.productValues.proteins;
     food.productValues.proteins=proteins*amount;
     const sodium:number=100/food.productValues.sodium;
     food.productValues.sodium=sodium*amount;
     const sugars:number=100/food.productValues.sugars;
     food.productValues.sugars=sugars*amount;
     const totalFat:number=100/food.productValues.totalFat;
     food.productValues.totalFat=sugars*totalFat;
    }
  return (
    <>
      <ListItemButton onClick={(event) => { console.log("cliced now: " + JSON.stringify(food)+"amount: "+amount); handleListItemClick(event, food.id) }}>
        <ListItemText primary={food.productName} />
      </ListItemButton>
      <Divider />
    </>
  );
}