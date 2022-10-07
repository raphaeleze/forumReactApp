import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/Avatar';

export default function ThreadCard(props) {

    return (

        <Card className="thread-card">
            <CardActionArea>
                <CardContent>
                    <Avatar alt="Rodrigo G" src="components/images/avater.png" />
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.body}
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
