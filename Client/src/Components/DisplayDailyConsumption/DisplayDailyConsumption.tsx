import  { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { User } from '../../Models/User';
import { Box, Card } from '@mui/material';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    //maintainAspectRatio: false ,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'צריכה יומית',
    },
  },
};



const labels = ['חלבונים', 'סוכרים', 'שומנים', 'פחמימות'];

export const data = {
  labels,
  datasets: [
    {
      label: 'מומלץ',
      data: [1,],
      backgroundColor: "#FFB968",
    },
    // {
    //   label: 'ממוצע בעבר',
    //   data: [1,],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
    {
        label: 'יומי',
        data:[],
        backgroundColor: "#31C4A8",
    }
    
  ],
};
//when adding back the avarege consuption - need to fix changes, unslash [1] and change [1] to [2]

const declareDatafromUser = (user: User)=>{
    //declare protien values in all datasets
    data.datasets[0].data[0] = user.recommendedConsumption?.proteins!;
    // data.datasets[1].data[0] = user.averageConsumption?.proteins!;
    data.datasets[1].data[0] = user.dailyConsumption?.proteins!;
    //declare sugar values in all datasets
    data.datasets[0].data[1] = user.recommendedConsumption?.sugars!;
    // data.datasets[1].data[1] = user.averageConsumption?.sugars!;
    data.datasets[1].data[1] = user.dailyConsumption?.sugars!;
     //declare fat values in all datasets
     data.datasets[0].data[2] = user.recommendedConsumption?.totalFat!;
    //  data.datasets[1].data[2] = user.averageConsumption?.totalFat!;
     data.datasets[1].data[2] = user.dailyConsumption?.totalFat!;
     //declare פחמימות values in all datasets
     data.datasets[0].data[3] = user.recommendedConsumption?.carbohydrates!;
    //  data.datasets[1].data[3] = user.averageConsumption?.carbohydrates!;
     data.datasets[1].data[3] = user.dailyConsumption?.carbohydrates!;


}

export function DisplayDailyConsumption(props:any) {
  const [stateData,setStateData] = useState(data);
  
    

    useEffect(()=>{
      
      setStateData(data);
      declareDatafromUser(props.user);
    },[data,props.user]);
  
  return (
  <Box sx={{ minWidth: 275 }}>
  <Card  variant="outlined">
  <Bar id="bar-chart" height={300} width={500} options={options} data={stateData} />
  </Card></Box>
)
}