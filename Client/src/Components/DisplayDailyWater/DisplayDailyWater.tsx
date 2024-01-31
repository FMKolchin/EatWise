import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts';
import { Button, TextField } from '@mui/material';
import { User } from '../../Models/User';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../Redux/userSlice/slice';
import { addWater } from '../../API/user';


const DisplayDailyWater = (props:any) => {
  // const [cups, setCups] = useState<number>(0);


  const [stateWater,setStateWater] = useState<number>(0);
  
    

  useEffect(()=>{
   setStateWater(props.user.dailyWater);
  });
  
  // const dispatch = useDispatch();


  const handleClick = (amountOfWater:number) => {    
    setStateWater(props.user.dailyWater)
    addWater(props.user.id,amountOfWater);
     window.location.reload();

  //dispatch(actions.onAddToDailyWaterRequest({ user: props.user.id,water:props.user.dailyWater }));
  };

  const chartData = [
    {
      type: 'Recommended Intake',
      value: props.user.recommendedWater-stateWater ,
      color: "#31C48D",
      
      
    },
    {
      type: 'Current Intake',
      value: stateWater ,
      color:"#FFB968"
    },
  ];
  console.log(chartData);
  
  
  // const handleAddCup = () => {
  //   setCups(cups + 1);
  // };
  return (
    <div>
        <h3>כמות השתיה היומית שלך </h3>
      <h3>מ"ל {stateWater}</h3>
      <h3>כמות השתיה המומלצת ליום במ"ל</h3>
      <h3> {props.user.recommendedWater}</h3>
      <Button variant="contained" sx={{ backgroundColor: '#31c48d' }} onClick={() => { console.log("cliced now in Water: " ); handleClick(140) }}>
        הוסף כוס
      </Button>
      <Button sx={{ backgroundColor: '#31c48d' }} variant="contained"  onClick={() => { console.log("cliced now in Water: " ); handleClick(500) }}>
       הוסף בקבוק
      </Button>
      <div style={{ marginTop: '20px', width: '300px' }}>
      <PieChart
      series={[
        {

          data: chartData,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -180,
          endAngle: 180,
          cx: 150,
          cy: 150,
        }
      ]}
      height={300}
      legend={{ hidden: true }}
    />
      </div>
    </div>
  );
};

export default DisplayDailyWater; 