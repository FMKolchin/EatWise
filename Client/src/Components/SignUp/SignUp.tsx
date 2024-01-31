import React, { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { signUpUser } from "../../API/user";
import { Button, TextField, Grid, Container, Typography, Link as MuiLink, Alert } from "@mui/material";
import { get } from "jquery";

const SignUp = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<string>("");
  const [verifyMail, setVerifyMail] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ open: boolean; message: string }>({ open: false, message: "" });
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [validPasswordError, setValidPasswordError] = useState<boolean>(false);

  const API_KEY = 'live_377bc696e1ff270c9cd7';
  const API_URL = 'https://api.emailable.com/v1/verify';

  useEffect(() => {
    //check if password is equal and alert user if not
    for (let index = 0; index < validPassword.length; index++) {
      if (validPassword[index] !== password[index]) {
        //alert password not equal;
        setAlert({ open: true, message: "Passwords do not match" });
      }
    }
  }, [validPassword]);

  const navigate: NavigateFunction = useNavigate();

  const checkMail = async () => {
    // alert("in checkMail");
    try {
      const response = await fetch(`${API_URL}?email=${email}&api_key=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      console.log(data.state);
      if (data.state === "deliverable") {
        // alert("true");
        setVerifyMail(true);
      } else {
        // alert("false");
        setVerifyMail(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const authDetails = async () => {
    //בדיקת ולידציה לשם ולסיסמא
    if (validateUsername() && validateEmail() && validatePassword() && validateValidPassword()) {
      //  checkMail();
      // if(verifyMail){
      //   alert("mail is verify")
      try {
        await signUpUser(username, password, email);
        //ניתן למחוק בהמשך לטפל בנתוני הדאטה
        navigate('/registerPersonalDetails', { replace: true });
      } catch (err: any) {
        setAlert({ open: true, message: "אתה מחובר כבר עם חשבון מייל זה " });
        //  navigate('/login', { replace: true });
        // }
      }
      // else{
      //   alert("mail isnt correct")
      // }
    } else {
      setAlert({ open: true, message: "בבקשה מלא את כל השדות" });
    }
  };

  const validateUsername = () => {
    const isValid = username.length >= 2;
    setUsernameError(!isValid);
    return isValid;
  };

  const validateEmail = () => {
    // You can add a more sophisticated email validation here
    const isValid = email.length > 0;
    setEmailError(!isValid);
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 8;
    setPasswordError(!isValid);
    return isValid;
  };

  const validateValidPassword = () => {
    const isValid = validPassword === password;
    setValidPasswordError(!isValid);
    return isValid;
  };
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <MuiLink component={Link} to="../login" variant="body2">
        Already have an account? Log in
      </MuiLink>

      {alert.open && (
        <Alert severity="error" onClose={() => setAlert({ open: false, message: "" })}>
          {alert.message}
        </Alert>
      )}

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
              onChange={(e: any) => setUsername(e.target.value)}
              error={usernameError}
              helperText={usernameError ? "Required" : ""}
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
              onChange={(e: any) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Required" : ""}
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
              onChange={(e: any) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? "Required" : ""}
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
              onChange={(e: any) => setValidPassword(e.target.value)}
              error={validPasswordError}
              helperText={validPasswordError ? "Passwords do not match" : ""}
            />
          </Grid>
        </Grid>
        <br></br>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={authDetails}
          sx={{ backgroundColor: '#31c48d' }}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
