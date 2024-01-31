import { Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { sendContactUs } from "../API/user";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Header from "./Header/Header";

export const contactUs = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();
    const validateUsername = () => {
      if (username.length < 2) {
        return false;
      } else {
        return true; 
      }
    };
    const validateSubject = () => {
      if (subject.length < 2) {
        return false;
      } else {
        return true; 
      }
    };
    const validateContent = () => {
      if (content.length < 5) {
        return false;
      } else {
        return true; 
      }
    };
    const send=async ()=>{
       
        if(validateContent()&&validateSubject()&&validateUsername())
        {
          await sendContactUs(username,email,subject,content);
          navigate('/home', { replace: true });
        }
        else{
          alert("username/subject/content is nat valid")
        }

    }
return (
  <div>
      <Header></Header>
  <br></br>
  <br></br>
  <br></br>
    <Container component="main" maxWidth="xs">
    <Typography component="h1" variant="h5">
    צור קשר
    </Typography>
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
            name="email"
            label="email"
            type="email"
            id="email"
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="subject"
            label="subject"
            id="subject"
            value={subject}
            onChange={(e:any) => setSubject(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="content"
            label="content"
            name="content"
            value={content}
            onChange={(e:any) => setContent(e.target.value)}
          />
        </Grid>
      </Grid>
      <br></br>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={send}
        sx={{ backgroundColor: '#31c48d' }}
      >
       send
      </Button>
    </form>
  </Container>
  </div>
);
}