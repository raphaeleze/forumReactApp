import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Createpost from './createpost';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/Avatar';

export default function threadCard() {




  return (

      <Card className="thread-card">
        <CardActionArea>
          <CardContent>
            <Avatar alt="Rodrigo G" src="components/images/avater.png" />
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This will be a post created by the user:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div style={{ width: '100%' }}>
            <Button size="small" color="primary">
              Delete 
              <DeleteIcon></DeleteIcon>
            </Button>
          </div>

          <FavoriteBorderIcon ></FavoriteBorderIcon>
        </CardActions>
      </Card>
      );
}
