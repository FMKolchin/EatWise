import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import { loginUser } from '../../API/user';

export const Login = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const authDetails = async () => {
    // בדיקת ולידציה לשם ולסיסמא
    if (validatePassword() && validateUsername()) {
      try {
        const data: string | null = await loginUser(username, password);
        navigate('/home', { replace: true });
      } catch (err: any) {
        // דיווח למשתמש על התקלה
        alert(err.message);
      }
    } else {
      // דיווח למשתמש על בעיה בוולידציה
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

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Link to="../signup">new here? sign up!</Link>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e:any) => setUsername(e.target.value)}
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
              onChange={(e:any) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button fullWidth variant="contained" color="primary" onClick={authDetails}>
          Login
        </Button>
      </form>
    </Container>
  );
};