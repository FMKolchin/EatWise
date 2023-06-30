import { useEffect, useState } from "react";
import $ from 'jquery';
import { FoodOption } from "../FoodOption/FoodOption";
import {Food} from "../../Models/Food"
import { InputAdornment, List, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const AddFood = ():JSX.Element => {
    const [foodQuery, setFoodQuery] = useState<string>();
    const [foodList , setFoodList] = useState<Food[]>([]);
   const insertFoodToObject = (obj:any[]) =>
   {
      const tempList:Food[] = [];
      obj.forEach((e:any) => {
         tempList.push(new Food (e._id,e.shmmitzrach,e.food_energy,e.total_fat,e.saturated_fat,e.trans_fatty_acids == null ? 0 : e.trans_fatty_acids,e.cholesterol,e.carbohydrates,e.sodium,e.total_sugars,e.protein));
      });
      setFoodList(tempList);
   }
    useEffect(() => {
        var data = {
            resource_id: 'c3cb0630-0650-46c1-a068-82d575c094b2', // the resource id
            limit: 10, // get 5 results
            q: foodQuery // query for 'jones'
        };
        $.get('https://data.gov.il/api/3/action/datastore_search', data, (d) => { insertFoodToObject(d.result.records); });

    }, [foodQuery])
    return (
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
                
                <TextField  variant="filled" fullWidth  id="searchTextBox" value={foodQuery} onChange={e=>setFoodQuery(e.target.value)}  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}/>
                {foodList.map((item:Food) => (
                  <FoodOption key={item.id} food={item}></FoodOption>
                ))}
        </List>
      );
}

