import React from 'react';
import { useSpring, animated } from 'react-spring';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const AboutUs = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <>
        <Header></Header>
    <br></br>
    <br></br>
    <br></br>
    <animated.div style={fade}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            אודות "Eat-Wise"
          </Typography>
          <Typography variant="body1" paragraph>
            ברוכים הבאים ל"איט-וויז" – המערכת שתלווה אותך בדרכך לחיים בריאים ומאוזנים.
          </Typography>
          <Typography variant="body1" paragraph>
            "Eat-Wise" מספקת כלי חכם וידידותי שיסייע לך לנהל את סגנון החיים שלך באופן אופטימלי.
            המערכת מתאימה את צריכתך התזונתית וכמות השתייה היומית לפי הנתונים האישיים שלך.
          </Typography>
          <Typography variant="body1" paragraph>
            עם ממשק ידידותי, תוכל לנהל את המזון שלך בצורה חכמה, לעקוב אחרי התקדמותך, ולשפר את
            איכות החיים שלך.
          </Typography>
          <Typography variant="body1" paragraph>
             מציעה התאמה אישית, ניהול צריכה יומית, אפשרות לניהול שתיית המים, ומספקת מסד נתונים 
            מתקדם לשמירה על המידע האישי שלך בצורה מאובטחת.
          </Typography>
          <Typography variant="body1" paragraph>
          מידי שבוע מתפרסמים לאתר פוסטים שונים וטיפים יעילים לירידה במשקל ושמירה על אורח חיים בריא
          הפוסטים נכתבים בליווי דיאטנים ומומחים בתחום התזונה 
          </Typography>
      
        </Paper>
      </Container>
    </animated.div>
    </>
  );

};

export default AboutUs;


    

