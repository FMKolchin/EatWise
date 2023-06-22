
import './App.css'
import { DisplayDailyConsomption } from './Components/DisplayDailyConsomption/DisplayDailyConsomption'
import { DisplayWeeklyConsomption } from './Components/DisplayWeeklyConsomption/DisplayWeeklyConsomption'
import { Home } from './Components/Home/Home'
import { Login } from './Components/Login/Login'
import { RegisterPersonalDetails } from './Components/RegisterPersonalDetails/RegisterPersonalDetails'
import { Nutrition } from './Models/Nutrition'
import { User } from './Models/User'

function App() {
  
  let user:User = new User()
  user.dailyConsumption = new Nutrition(56,54,65,54,43,12,4,12,34);
    user.recommendedConsumption = new Nutrition(23,43,54,65,76,12,3,55,6);
    user.averageConsumption= new Nutrition(9,4,34,54,43,56,43,12,45);
    user.weeklyConsumption = [new Nutrition(23,232,12,43,2,4,5,43,6),new Nutrition(23,22,12,43,2,4,5,43,6),new Nutrition(23,232,12,43,2,4,5,43,6),new Nutrition(23,232,12,43,2,4,5,43,6),new Nutrition(23,232,12,43,2,4,5,43,6),
    new Nutrition(23,22,12,43,2,4,5,43,6),new Nutrition(23,22,12,43,2,4,5,43,6),]; ;

  return (
    <>
     {/* <Login></Login> */}
     <Home></Home>
     {/* <RegisterPersonalDetails></RegisterPersonalDetails>
     <DisplayDailyConsomption user={user}></DisplayDailyConsomption>
     <DisplayWeeklyConsomption></DisplayWeeklyConsomption> */}
    </>
  )
}

export default App
