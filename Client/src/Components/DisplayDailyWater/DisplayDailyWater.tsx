import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts';
import { Button, TextField } from '@mui/material';
import { User } from '../../Models/User';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../Redux/userSlice/slice';
import { addWater } from '../../API/user';


const DisplayDailyWater = (props:any) => {
  // const [cups, setCups] = useState<number>(0);

  const user: User = useSelector(selectors.getUser);
  const [stateWater,setStateWater] = useState(user.DailyWater);
  
    

  useEffect(()=>{
    setStateWater(user.DailyWater);
  },[,props.user.DailyWater]);
  
  // const dispatch = useDispatch();


  const handleClick = (amountOfWater:number) => {
     addWater(user.id,amountOfWater);
  //  dispatch(actions.onAddToDailyWaterRequest({ user: user,water:user.recommendedWater }));
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
      <h1>{user.DailyWater}</h1>
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