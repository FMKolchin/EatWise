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
  
 //const dispatch = useDispatch();


  const handleClick = (amountOfWater:number) => {    
    setStateWater(props.user.dailyWater)
    addWater(props.user.id,amountOfWater);

  //dispatch(actions.onAddToDailyWaterRequest({ user: props.user.id,water:props.user.dailyWater }));
  };

  const chartData = [
    {
      type: 'Recommended Intake',
      value: props.user.recommendedWater,
    },
    {
      type: 'Current Intake',
      value: stateWater,
    },
  ];
  // const handleAddCup = () => {
  //   setCups(cups + 1);
  // };
  return (
    <div>
      <h3>{stateWater}</h3>
      <h3>כוסות</h3>
      <h3> מ"ל {props.user.recommendedWater}</h3>
      <Button variant="contained"  onClick={() => { console.log("cliced now in Water: " ); handleClick(120) }}>
        הוסף כוס
      </Button>
      <Button variant="contained"  onClick={() => { console.log("cliced now in Water: " ); handleClick(1000) }}>
       הוסף בקבוק
      </Button>
      <div style={{ marginTop: '20px', width: '300px' }}>
      <PieChart
      series={[
        {
          outerRadius: 80,

          data: chartData,
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