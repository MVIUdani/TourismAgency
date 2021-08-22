import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function ManagePackage() {
  const classes = useStyles();
  const buttonClass = styleButtons();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
        title="Heritage"
        subheader="Last Modified : July 13, 2021"
      />
  
      <Link to='/edit_package'><div className={buttonClass.root}><Button variant="contained" color="primary">Edit</Button></div></Link>
      <Link to='/delete_package'><div className={buttonClass.root}><Button variant="contained" color="secondary">Delete</Button></div></Link>


      <img src='../sigiriya.jpg' alt="" width="340" height="235"></img>
     
     <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Package Description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Package Details:</Typography>
          <Typography paragraph>
          With a history expanding over 3000years, Sri Lanka holds some of world’s ancient cities including Anuradhapura, Polonnaruwa and Digamadulla; 
          their once glorious townships, palaces, temples, monasteries, hospitals and theaters intricately carved and modeled out of stone lay and abandoned and forgotten with time amidst the soaring jungles.
          </Typography>
          <Typography paragraph>
          Of all the ancient cities of Lanka, the most famed and most exquisite is the Kingdom of Anuradhapura. Sri Lanka’s third and the longest serving capital and one of the oldest continuously inhabited cities in the world is also one of the most sacred cities of World Buddhists. 
          It was the capital of Sri Lanka from the Fourth Century BC up to the turn of the eleventh Century and was one of the most stable and durable centers of political power and urban life in South Asia.
  
          </Typography>
          <Typography paragraph>
          Sigiriya, a fifth century AD fortress and a water garden displays some of the most futuristic elements of landscaping and some of the oldest murals recorded in the country
          </Typography>
        </CardContent>
      </Collapse>
    </Card>







/*

    <Card className={classes1.root}>
    <CardHeader
     
      title="PackageName"
      subheader="Last Modified : September 14, 2016"
    />
    <CardMedia
      className={classes1.media}
      image="/static/images/cards/paella.jpg"
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
       Package Description
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    
      <IconButton
        className={clsx(classes1.expand, {
          [classes1.expandOpen1]: expanded1,
        })}
        onClick={handleExpandClick1}
        aria-expanded1={expanded1}
        aria-label1="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded1} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Package Details:</Typography>
        <Typography paragraph>
         Paragraph 1
        </Typography>
        <Typography paragraph>
          Paragraph 2
        </Typography>
        <Typography paragraph>
         Paragraph 3
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
*/

    
  );
}



/*
 avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

*/


/*


        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    */

        