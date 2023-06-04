import { useEffect, useState } from "react";
import $ from 'jquery';
import { FoodOption } from "../FoodOption/FoodOption";
import {Food} from "../../Models/Food"

export const AddFood = ():JSX.Element => {
    const [foodQuery, setFoodQuery] = useState("");
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
        // foodList.forEach((e)=>alert(e.shmmitzrach));

    }, [foodQuery])
    return (
        <div>
            <input id="foodQuery" autoComplete="true" type="text" value={foodQuery} onChange={e => setFoodQuery(e.target.value)} />
            <input id="testEating" autoComplete="false" type="checkbox"></input>
          <ul>
                {foodList.map((e:Food) => <FoodOption key={e.id} food={e}></FoodOption>)}
            </ul>
            
        </div>
    )
}