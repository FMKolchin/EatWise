import { useEffect, useState } from "react";
import $ from 'jquery';
import { FoodOption } from "../FoodOption/FoodOption";
import {Food} from "../../Models/Food"
import { Box, Card, InputAdornment, List, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const AddFood = ():JSX.Element => {
    const [foodQuery, setFoodQuery] = useState<string>();
    const [amount,setAmount]=useState<Number>(1);
    const [foodList , setFoodList] = useState<Food[]>([]);
    //add the food to the list
   const insertFoodToObject = (obj:any[]) =>
   {
      const tempList:Food[] = [];
      obj.forEach((e:any) => {
         tempList.push(new Food
           (e._id,e.shmmitzrach,e.food_energy,e.total_fat
            ,e.cholesterol,e.carbohydrates,e.sodium,e.total_sugars,e.protein));
      });
      setFoodList(tempList);
   }
   //get all foods from the database of API 
    useEffect(() => {
        var data = {
            resource_id: 'c3cb0630-0650-46c1-a068-82d575c094b2', // the resource id
            limit: 10, // get 5 results
            q: foodQuery // query for 'jones'
        };
        $.get('https://data.gov.il/api/3/action/datastore_search',
         data, (d) => { insertFoodToObject(d.result.records); });

    }, [foodQuery])
    return (
      <div>
      <Box sx={{ minWidth: 275 }}>
      <Card  variant="outlined">
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
                
                <TextField  variant="filled"   fullWidth  id="searchTextBox" value={foodQuery} onChange={e=>setFoodQuery(e.target.value)}  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}/>
                {foodList.map((item:Food) => (
                  <FoodOption key={item.id} food={item} amount={amount}></FoodOption>
                ))}
        </List>
        </Card></Box>
      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="height"
                        label="כמות בגרם"
                        value={amount}
                        onChange={(e:any) => { setAmount(Number(e.target.value)) }}
                        type="number"
                        inputProps={{ min: 1 }}
                      />
</div>
      );
}

