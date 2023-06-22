import { Button, TextField } from "@mui/material"
import { useState } from "react"
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {SavePersonalDetails} from '../../API/user';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Nutrition } from "../../Models/Nutrition";



export const  RegisterPersonalDetails = ()=>{
    const [age,setAge] = useState<number>(0);
    const [weight,setWeight] = useState<number>(0);
    const [height,setHeight] = useState<number>(0);
    let BMI:number =0;
    const navigate:NavigateFunction = useNavigate();



    const savePersonalDetailsFunc = async() =>{
        try {
            console.log("before api function register personal details");
            let recommendedConsomption:Nutrition = calculateRecommendedConsomption();
            await SavePersonalDetails(age!,weight!,height!,recommendedConsomption);
            console.log("after api function register personal details");
            navigate('/home',{replace:true});
        } catch (error:any) {
            alert(error.message+" error in savePersonalDetails");
        }

    }
    const calculateRecommendedConsomption =():Nutrition =>{
        //calculate
        return new Nutrition(0,0,0,0,0,0,0,0,0,);
    }
    const calculateBMI = ()=>{
         BMI = weight/Math.pow(height,2);
    }
    const calculateProteinRecommendedCons =() =>{
        if(BMI > 30 ){
            console.log("a lot protein")
        }
    }
    return(
        <div>
            <form action="">
            <TextField id="age" label="גיל" required variant="standard" value={age} onChange={e=>{setAge(Number(e.target.value))}} type="number" InputProps={{ inputProps: { min: 0} }}/>
            <br/>
            <TextField id="weight" label="משקל" required variant="standard" value={weight} onChange={e=>{setWeight(Number(e.target.value))}} type="number" InputProps={{ inputProps: { min: 0 } }}/>
            <br/>
            <TextField id="height" label="גובה" required variant="standard" value={height} onChange={e=>{setHeight(Number(e.target.value))}}  type="number" InputProps={{ inputProps: { min: 0 } }}/>
            <Button variant="outlined" onClick={savePersonalDetailsFunc} endIcon={<SaveAsIcon />}>
  שמור...
</Button>

            
            </form>
        </div>
    )
}