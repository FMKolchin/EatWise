
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DaysOfWeek } from '../../Models/DaysOfWeek';
import { Nutrition } from '../../Models/Nutrition';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // maintainAspectRatio: false ,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels:string[] = [];

export const data = {
  labels,
  datasets: [
    {
      label: 'חלבונים',
      data: [0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'סוכרים',
      data: [0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'שומנים',
      data: [0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'פחמימות',
      data: [0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const setLables = ()=>{
 let days:number[] = getDaysNumbers();
  let lables:string[] = [];
  for (let i = 0; i <7; i++) {
      lables.push(DaysOfWeek[days[i]]);
  }
  return lables;
}

const getDaysNumbers = ()=>{
  let day:number =new Date().getDay()+1;
  let i:number = 6;
  return [(day-(i--)+7)%7,(day-(i--)+7)%7,(day-(i--)+7)%7,(day-(i--)+7)%7,(day-(i--)+7)%7,(day-(i--)+7)%7,day];
}

export function DisplayWeeklyConsumption(props:any) {
  const weeklyConsumption:Nutrition[] = props.weeklyConsumption;
  const lables:string[] = setLables();
  data.labels = lables;
  let proteins:number[] = [];
  for (let i  = 0; i < 7; i++){
    proteins.push(weeklyConsumption[i].proteins);
   
  }
  data.datasets[0].data = proteins;

  let sugars:number[] = [];
  for (let i  = 0; i < 7; i++){
    sugars.push(weeklyConsumption[i].sugars);
   
  }
  data.datasets[1].data = sugars;

  let fats:number[] = [];
  for (let i  = 0; i < 7; i++){
    fats.push(weeklyConsumption[i].totalFat);
   
  }
  data.datasets[2].data = fats;

  let carbohydrates:number[] = [];
  for (let i  = 0; i < 7; i++){
    carbohydrates.push(weeklyConsumption[i].carbohydrates);
   
  }
  data.datasets[3].data = carbohydrates;

  
  


  return <Line  options={options} data={data}/>
}