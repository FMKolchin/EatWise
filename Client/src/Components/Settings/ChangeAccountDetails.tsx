import React, { useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../../Models/User";
import { selectors } from "../../Redux/userSlice/slice";
import { TextField, Button, Container, Typography, Grid, Box, Divider } from "@mui/material";
import { changeDetails } from "../../API/user";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

export const ChangeAccountDetails = () => {
  const navigate: NavigateFunction = useNavigate();
  const user: User = useSelector(selectors.getUser);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  
  const validateUsername = () => {
    if (username.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  const cancel = () => {
    navigate('/home', { replace: true })
  }

  const save = async () => {
    if (password.localeCompare(user.password)) {
      alert("סיסמה שגויה");
    } else {
      if (!(validateUsername() && newPassword.length > 8)) {
        try {
          await changeDetails(username, newPassword, email);
          alert("עודכן בהצלחה")
          navigate('/home', { replace: true })
        } catch {
          alert("error");
        }
      } else {
        alert("username or password is not valid")
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Header />
      <Box sx={{ mt: 3, mb: 2 }}>
        <Typography variant="h5" align="center">
          עדכון פרטי החשבון
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="username"
                label="שם משתמש"
                value={username}
                onChange={(e:any) => setUsername(e.target.value)}
                placeholder={user.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="כתובת אימייל"
                value={email}
                onChange={(e:any) => setEmail(e.target.value)}
                placeholder={user.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="password"
                label="סיסמה נוכחית"
                value={password}
                onChange={(e:any) => setPassword(e.target.value)}
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="newPassword"
                label="סיסמה חדשה"
                value={newPassword}
                onChange={(e:any) => setNewPassword(e.target.value)}
                type="password"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2 , backgroundColor: '#f78b3e' }}
            onClick={save}
          >
            אישור
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={cancel}
          >
            ביטול
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ChangeAccountDetails;
