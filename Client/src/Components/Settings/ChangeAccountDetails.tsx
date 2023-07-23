// import { useSelector } from "react-redux";
// import { User } from "../../Models/User";
// import { selectors } from "../../Redux/userSlice/slice";
// import { useState } from "react";
// import { changeDetails } from "../../API/user";
// import { NavigateFunction, useNavigate } from "react-router-dom";
// import Header from "../Header/Header";

// export const ChangeAccountDetails=()=>{
//   const navigate:NavigateFunction = useNavigate();
//     const user: User = useSelector(selectors.getUser);
//  const [username, setUsername] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [newPassword, setNewPassword] = useState<string>("");
//   const validateUsername = () =>{
//     if(username.length<2){
//         return false;
//     }
//     else{
//        return true; 
//     }
// }
//   const cancel=()=>{
//     navigate('/home',{replace:true})
//   }
// const save=async ()=>{
//    alert("in save");
// if(password!=user.password)
// {
//   alert("סיסמה שגויה");
// }
// else{
//     if(validateUsername()&&newPassword.length>8)
//     {
// try{
//     await changeDetails(username,newPassword,email);
//     alert("עודכן בהצלחה")
//     navigate('/home',{replace:true})
// }
// catch{
//   alert("error");
// }
// }
// else{
//   alert("username or password is not valid")
// }
// }
// }

//     return (
//         <div>
//           <Header></Header>
//         <p>update</p>
//         <form>
//           <div>
//             <label htmlFor="username">userName</label>
//             <input type="text" name="username" placeholder={user.username} value={username} onChange={(e) => setUsername(e.target.value)}></input>
//           </div>
//           <div>
//             <label htmlFor="email">email</label>
//             <input type="email" name="email" placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)}/>
//           </div>
//           <div>
//             <label htmlFor="password">סיסמה נוכחית</label>
//             <input  name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
//           </div>
//           <div>
//             <label htmlFor="validPassword"> סיסמה חדשה</label>
//             <input  name="validPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} ></input>
//           </div>
//           <button type="button" onClick={save}>אישור</button>
//           <button type="button" onClick={cancel}>ביטול</button>
//         </form>
//       </div>
//     )
// }