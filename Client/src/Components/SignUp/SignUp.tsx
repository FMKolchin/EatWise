import React, { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { signUpUser } from "../../API/user";
import { Button, TextField, Grid, Container, Typography, Link as MuiLink } from "@mui/material";

const SignUp = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<string>("");
  
  useEffect(()=>{
    //check if password is equal and alert user if not
    for (let index = 0; index < validPassword.length; index++) {
      if(validPassword[index] !== password[index]) {
        //alert password not equal;
        alert("not equal");
      }
    }
  }, [validPassword]);

  const navigate: NavigateFunction = useNavigate();

  const authDetails = async () => {
    //בדיקת ולידציה לשם ולסיסמא
    if (validateUsername()) {
      try {
        alert("in try sign up!!!!!!!!")
        await signUpUser(username, password, email);
        //ניתן למחוק בהמשך לטפל בנתוני הדאטה
        navigate('/registerPersonalDetails', { replace: true });
      } catch {
        //דיווח למשתמש על התקלה
      }
    } else {
      //דיווח למשתמש על בעיה בוולידציה
    }
  };
    
  const validateUsername = () => {
    if (username.length < 2) {
      return false;
    } else {
      return true; 
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <MuiLink component={Link} to="../login" variant="body2">
        Already have an account? Log in
      </MuiLink>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e:any) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e:any) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e:any) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="validPassword"
              label="Validate Password"
              type="password"
              id="validPassword"
              value={validPassword}
              onChange={(e:any) => setValidPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={authDetails}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
