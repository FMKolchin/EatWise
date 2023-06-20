import { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { signUpUser } from "../../API/user";

export const SignUp = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<string>("");

  useEffect(()=>{
    //check if password is equal and alert user if not
    for (let index = 0; index < validPassword.length; index++) {
      if(validPassword[index]!=password[index]) {
        //alert password not equal;
        alert("not equal");
      }
      
    }
      
    }
  ,[validPassword]);

  const navigate:NavigateFunction = useNavigate();

    const authDetails = async () =>{
      console.log("start auth details");
//בדיקת ולידציה לשם ולסיסמא
       if(validateUsername()){
        console.log("valid user name = true");
        try{
          alert("in try sign up!!!!!!!!")
            await signUpUser(username,password,email);
           //ניתן למחוק בהמשך לטפל בנתוני הדאטה
            console.log("before navigate after signUPUser");
            navigate('/registerPersonalDetails', { replace: true });
            console.log("after navigate");
        }catch{
          console.log("error in signup");
            //דיווח למשתמש על התקלה
           alert("/דיווח למשתמש על התקלה");
          }
       }
       else{
        console.log("valid user name = false");
        //דיווח למשתמש על בעיה בוולידציה
       }
       console.log("finish auth details");
    }
    
    const validateUsername = () =>{
        if(username.length<2){
            return false;
        }
        else{
           return true; 
        }
    }

  return (
    <div>
      <p>sigh up</p>
      <Link to="../login">signed up already? login!</Link>
      <form>
        <div>
          <label htmlFor="username">userName</label>
          <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input placeholder="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="validPassword">validate password</label>
          <input placeholder="validPassword" name="validPassword" type="password" value={validPassword} onChange={(e) => setValidPassword(e.target.value)} ></input>
        </div>
        <button type="button" onClick={authDetails}>sign up</button>
      </form>
    </div>
  );
};

export default SignUp;