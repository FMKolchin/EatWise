import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getAllArticles } from '../../API/admin';
import { useEffect, useState } from 'react';
import im1 from '../../../public/1.png';
import Header from '../Header/Header';
import img2 from '../../../public/1.png';
import img3 from '../../../public/eatwise-low-resolution-logo-color-on-transparent-background.png';
import img4 from '../../../public/eatwise-high-resolution-logo-white-on-transparent-background.png';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Article {
  _id: number;
  title: string;
  content: string;
  author: string;
  image: string;
}

export  const Article= () => {
  const images=[im1,img2,img3,img4];
  const [articles, setArticles] = useState<Article[]>([]);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const getArticles = async () => {
    try {
      const  data  = await getAllArticles();
      console.log(data);
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    getArticles();
  },[]); // Empty dependency array

  const handleReadMore = (articleId: number) => {
    setExpandedArticle(articleId === expandedArticle ? null : articleId);
  };

  return (
    <>
        <Header></Header>
    <br></br>
    <br></br>
    <br></br>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {articles && articles.length > 0 ? (
        articles.map((article: Article) => (
        <Card key={article?._id} sx={{ flex: '0 0 48%', m: 2, margin: '10px', transform: 'scale(0.9)' }}>
          <CardMedia
            component="img"
            height="140"
            // image={images[expandedArticle ??2]}
            sx={{ width: '100%' }}
          />
          <div>
            <CardHeader
              // avatar={
              //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //     {article.author?.charAt(0)}
              //   </Avatar>
              // }
              title={article?.title}
              subheader={article?.author}
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography style={{direction:'rtl'} }variant="body2" color="text.secondary">
                {
                article?.content.substr(0,600)+"..."
                }
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton> */}
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expandedArticle === article?._id}
                onClick={() => handleReadMore(article?._id)}
                aria-expanded={expandedArticle === article?._id}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedArticle === article?._id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph
          
  style={{
    direction: 'rtl',
    lineHeight: '2', // מרווח בין השורות
    fontSize: '16px', // גודל הפונט
  }}
  variant="body2"
  color="text.secondary"
>
                  
                  {article.content}</Typography>
                <Typography variant="caption" color="text.secondary">
                  סופר: {article?.author}
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        </Card>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
    </>
  );
};





