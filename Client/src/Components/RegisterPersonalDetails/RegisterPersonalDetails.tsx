import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useState } from "react"
import {SavePersonalDetails} from '../../API/user';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Nutrition } from "../../Models/Nutrition";
import {recommendedCalories,
recommendedCholesterol,recommendedFiber,recommendedSodium,recommendedProtein,
recommendedSugar,recommendedTotalFat, recocommendedWater} from "../../Services/calculatePersonalDetails";
import { selectors } from "../../Redux/userSlice/slice";
import { User } from "../../Models/User";
import { useSelector } from "react-redux";
import '../../App.css'



export const  RegisterPersonalDetails = ()=>{
  const user: User = useSelector(selectors.getUser);   
    const [age,setAge] = useState<number>(user.age);
    const [weight,setWeight] = useState<number>(user.weight);
    const [height,setHeight] = useState<number>(user.height);
    const [sportLevel,setSportLevel] = useState<number>(0);
    const [gender,setGender] = useState<number>(0);
    const navigate:NavigateFunction = useNavigate();
    const cancel = () => {
      navigate('/home', { replace: true })
    }
    const savePersonalDetailsFunc = async() =>{
        try {
            let water:number=recocommendedWater(age,weight,sportLevel,gender)
            let recommendedConsumption:Nutrition = calculateRecommendedConsumption();
            await SavePersonalDetails(water,age,weight,height,sportLevel,gender,recommendedConsumption);
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
      return (
              <Container component="main" maxWidth="xs">
     
                {/* <Typography component="h1" variant="h5">
                   פרטים אישיים
                </Typography> */}
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="age"
                        label="גיל"
                        value={age}
                        onChange={(e:any) => { setAge(Number(e.target.value)) }}
                        placeholder={String(user.age)}
                        type="number"
                        inputProps={{ min: 0 }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="weight"
                        label="משקל"
                        value={weight}
                        onChange={(e:any) => { setWeight(Number(e.target.value)) }}
                        type="number"
                        inputProps={{ min: 0 }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        id="height"
                        label="גובה"
                        value={height}
                        onChange={(e:any) => { setHeight(Number(e.target.value)) }}
                        type="number"
                        inputProps={{ min: 0 }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">רמת כושר</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={sportLevel}
                          onChange={handleChangeSportLevel}
                          label="רמת כושר"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>נמוכה</MenuItem>
                          <MenuItem value={2}>בינונית</MenuItem>
                          <MenuItem value={3}>גבוהה</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={5}>
                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">מין</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={gender}
                          onChange={handleChangeGender}
                          label="מין"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>זכר</MenuItem>
                          <MenuItem value={2}>נקבה</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <br></br>
                  </Grid>
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{backgroundColor:"#FFB968", mt: 3, mb: 2 }}
                    onClick={savePersonalDetailsFunc}
        className="save"
                  >
                    אישור
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={cancel}
                  >
                    ביטול
                  </Button>
                </form>
              </Container>
            );
          };
          
          export default RegisterPersonalDetails;
