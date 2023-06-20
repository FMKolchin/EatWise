
import { useState } from 'react';
import {Link, NavigateFunction, useNavigate} from 'react-router-dom';
import {loginUser} from  '../../API/user';



export const Login = ():JSX.Element => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate:NavigateFunction = useNavigate();

    const authDetails = async () =>{
//בדיקת ולידציה לשם ולסיסמא
       if(validatePassword() && validateUsername()){
        try{
            const data:string|null =  await loginUser(username, password);
            alert(data);
            console.log(data);//ניתן למחוק בהמשך לטפל בנתוני הדאטה
            navigate('/home', { replace: true });
        }catch(err:any){
            //דיווח למשתמש על התקלה
            alert(err.message);
        }
       }
       else{
        //דיווח למשתמש על בעיה בוולידציה
       }
    }
    
    const validateUsername = () =>{
        if(username.length<2){
            return false;
        }
        else{
           return true; 
        }
    }
    const validatePassword = () =>{
        if(password.length<8){
            return false;
        }
        return true;
    }
    

    return <div>
        <p>Login</p>
        <Link to="../signup">new here? sign up!</Link>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="button" onClick={authDetails} >login</button>
        </form>
    </div>
}

