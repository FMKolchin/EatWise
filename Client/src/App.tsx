
import './App.css'
import { DisplayWeeklyConsomption } from './Components/DisplayWeeklyConsomption/DisplayWeeklyConsomption'
import { Home } from './Components/Home/Home'
import { Nutrition } from './Models/Nutrition'
import { User } from './Models/User'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import UserSlice from './features/UserSlice'

function App() {
  
  let user:User = new User()
  user.dailyConsumption = new Nutrition(65,54,43,12,4,12,34);
    user.recommendedConsumption = new Nutrition(54,65,76,12,3,55,6);
    user.averageConsumption= new Nutrition(34,54,43,56,43,12,45);
    user.weeklyConsumption = [new Nutrition(12,43,2,4,5,43,6),new Nutrition(12,43,2,4,5,43,6),new Nutrition(12,43,2,4,5,43,6),new Nutrition(12,43,2,4,5,43,6),new Nutrition(12,43,2,4,5,43,6),
    new Nutrition(23,43,2,4,5,43,6),new Nutrition(12,43,2,4,5,43,6),]; ;

    const userStore = configureStore({
      reducer:{
        UserSlice,
      }
    })

  return (
     <Provider store={userStore} >
     <Home></Home>
     {/* <RegisterPersonalDetails></RegisterPersonalDetails> */}
     {/* <DisplayDailyConsomption user={user}></DisplayDailyConsomption> */}
     <DisplayWeeklyConsomption></DisplayWeeklyConsomption>
    </Provider>
  )
}

export default App
