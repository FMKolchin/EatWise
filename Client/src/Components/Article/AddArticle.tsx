import { Container, Paper, Typography, Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { addArticle } from '../../API/admin';

export default function AddArticle() {
    
///לבדוק שהמשתמש שנכנס הוא אדמין
const [successMessage, setSuccessMessage] = useState<string>('');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // בדיקות תקינות ותקינות נוספות יש להוסיף כאן
    if (formData.title && formData.content && formData.author && formData.image) {
    //   onAddArticle(formData);
 try{
    await addArticle(formData.title, formData.content,formData.author,formData.image);
      // אפשר גם לאפס את הנתונים של הטופס לאחר הוספת המאמר
    
      
      setFormData({
        title: '',
        content: '',
        author: '',
        image: '',
      });
      setSuccessMessage('המאמר נוסף בהצלחה!');
      console.log(successMessage)
    }


catch(err:any){
alert("err");
}
}
  };
  return (
    <div>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Add Article
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={6}  // גובה מרחב גדול יותר
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Article
          </Button>
        </form>
      </Paper>

    </Container>
      {successMessage && (
  <Typography variant="subtitle1" color="success" sx={{ mt: 2 }}>
    {successMessage}
  </Typography>)}
  </div>

  );

}
