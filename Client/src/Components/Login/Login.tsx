import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Grid, Alert } from '@mui/material';
import { forgetPassword, loginUser } from '../../API/user';

import Slide from '@mui/material/Slide';
export const Login = (): JSX.Element => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alert, setAlert] = useState<{ open: boolean; message: string }>({ open: false, message: '' });
  const navigate = useNavigate();


  // ... (הכנסת ה-import של Slide)
  
  const [welcomeAdmin, setWelcomeAdmin] = useState<boolean>(false);
  
  const handleWelcomeAdminAnimation = () => {
    setWelcomeAdmin(true);
    setTimeout(() => {
      setWelcomeAdmin(false);
    }, 3000); // כדי שההודעה תוצג ל-3 שניות
  };
  


  const authDetails = async () => {
    if (validatePassword() && validateUsername()) {
      if (username === 'admin') {
        setIsAdmin(true);
        setAlert({ open: true, message: 'ברוך הבא מנהל'});
        navigate('/addArticle', { replace: true });
      } else {
        try {
          const data: string | null = await loginUser(username, password);
          navigate('/home', { replace: true });
        } catch (err: any) {
          setAlert({ open: true, message: 'אחד מהנתונים שגויים' });
        }
      }
    }
  };

  const validateUsername = () => {
    if (username.length < 2) {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      return false;
    }
    return true;
  };

  const sendMail = async () => {
    if (validateUsername()) {
      setAlert({ open: true, message: "נשלח למייל" });
      await forgetPassword(username, password);
    } else {
      setAlert({ open: true, message: "הכנס שם משתמש" });
    }
  };

  useEffect(() => {
    if (username === 'admin') {
      handleWelcomeAdminAnimation();
    }
  }, [username])

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Link to="../signup">new here? sign up!</Link>
      <button onClick={sendMail}>forget password</button>

      {alert.open && (
        <Alert severity="info" onClose={() => setAlert({ open: false, message: '' })}>
          {alert.message}
        </Alert>
      )}
{welcomeAdmin && isAdmin && (
  <Slide direction="up" in={welcomeAdmin} mountOnEnter unmountOnExit>
    <Alert color="success">
      ברוך הבא מנהל
    </Alert>
  </Slide>
)}

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <br />
        <Button
          sx={{ backgroundColor: '#31c48d' }}
          fullWidth
          variant="contained"
          color="primary"
          onClick={authDetails}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};