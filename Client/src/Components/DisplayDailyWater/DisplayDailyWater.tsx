import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts';
import { Button, TextField } from '@mui/material';
import { User } from '../../Models/User';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../Redux/userSlice/slice';


const DisplayDailyWater = (props:any) => {
  const [cups, setCups] = useState<number>(0);

  const user: User = useSelector(selectors.getUser);
  const dispatch = useDispatch();


  const handleClick = () => {

    dispatch(actions.onAddToDailyWaterRequest({ user: user,water:props.user.recommendedWater }));
  };

  const chartData = [
    {
      type: 'Recommended Intake',
      value: props.user.recommendedWater,
    },
    {
      type: 'Current Intake',
      value: cups,
    },
  ];
  // const handleAddCup = () => {
  //   setCups(cups + 1);
  // };
  return (
    <div>
      <h3>{cups} כוסות</h3>
      <h3> מ"ל {props.user.recommendedWater}</h3>
      <Button variant="contained"  onClick={() => { console.log("cliced now in Water: " ); handleClick() }}>
        הוסף כוס
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