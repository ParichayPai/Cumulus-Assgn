import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 50
  },
  media: {
    height: 500,
  },
  body:{
    height: 100
  },
  learnMore: {
    float: "auto"
  }
});

export default function MovieCard(data) {
    const {movie} = data;      
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={movie.Poster}
                title="Movie"
            />
            <CardContent className={classes.body}>
            <Typography gutterBottom variant="h5" component="h2">
                { movie.Title.length < 25 ? movie.Title: `${movie.Title.substring(0,25)}...`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {`${movie.Plot.substring(0,100)}...`}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <Button size="small" color="primary" className={classes.learnMore}>
                Learn More
            </Button>
        </CardActions>
        </Card>
    );
}
