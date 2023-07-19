import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { ReactNode, useState } from "react"
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {SavePersonalDetails} from '../../API/user';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Nutrition } from "../../Models/Nutrition";
import {recommendedCalories,activityFactor,recommendedCarbohydrates,
recommendedCholesterol,recommendedFiber,recommendedSodium,recommendedProtein,
recommendedSugar,recommendedTotalFat} from "../../Services/calculatePersonalDetails";



export const  RegisterPersonalDetails = ()=>{
    const [age,setAge] = useState<number>(0);
    const [weight,setWeight] = useState<number>(0);
    const [height,setHeight] = useState<number>(0);
    const [sportLevel,setSportLevel] = useState<number>(0);
    const [gender,setGender] = useState<number>(0);
    const navigate:NavigateFunction = useNavigate();



    const savePersonalDetailsFunc = async() =>{
        try {
            console.log("before api function register personal details");
            let recommendedConsumption:Nutrition = calculateRecommendedConsumption();
            await SavePersonalDetails(age,weight,height,sportLevel,gender,recommendedConsumption);
            console.log("after api function register personal details");
            navigate('/home',{replace:true});
        } catch (error:any) {
            alert(error.message+" error in savePersonalDetails");
        }

    }
    const calculateRecommendedConsumption =():Nutrition =>{
        let recommendedCalaries:number = recommendedCalories(age,weight,height,gender)
        return new Nutrition("",recommendedCalaries,recommendedTotalFat(recommendedCalaries),recommendedCholesterol(),recommendedFiber(age),recommendedSodium(),recommendedSugar(),recommendedProtein(weight));
    }

    function handleChangeSportLevel(event: SelectChangeEvent<number>): void {
        setSportLevel(Number(event.target.value));
    }

    function handleChangeGender(event: SelectChangeEvent<number>): void {
        setGender(Number(event.target.value));
    }

    return(
        <div>
            <form action="">
            <TextField id="age" label="גיל" required variant="standard" value={age} onChange={e=>{setAge(Number(e.target.value))}} type="number" InputProps={{ inputProps: { min: 0} }}/>
            <br/>
            <TextField id="weight" label="משקל" required variant="standard" value={weight} onChange={e=>{setWeight(Number(e.target.value))}} type="number" InputProps={{ inputProps: { min: 0 } }}/>
            <br/>
            <TextField id="height" label="גובה" required variant="standard" value={height} onChange={e=>{setHeight(Number(e.target.value))}}  type="number" InputProps={{ inputProps: { min: 0 } }}/>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">רמת כושר</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sportLevel}
          onChange={handleChangeSportLevel}
          label="sport level"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>נמוך</MenuItem>
          <MenuItem value={2}>בינוני</MenuItem>
          <MenuItem value={3}>גבוה</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">מין</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleChangeGender}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>male</MenuItem>
          <MenuItem value={2}>female</MenuItem>
          
        </Select>
      </FormControl>
            <Button variant="outlined" onClick={savePersonalDetailsFunc} endIcon={<SaveAsIcon />}>
  שמור...
</Button>
            </form>
        </div>
    )
}