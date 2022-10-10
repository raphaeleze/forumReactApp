import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListItemSecondaryAction, TextField } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect, setThreadList } from "react";
import Listitems from "./ListItemsPost";
import ListitemsPost from "./ListItemsPost";

export default function ForumPosts() {

    const [postList, setPostList] = useState([{title: 'test', body:'hey'}])
    const URL = process.env.REACT_APP_API_URL
  
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Accept': 'application/json'}
    };
    useEffect(() => {
        fetch(`${URL}/forum/threads/1`, requestOptions)
          .then(res => res.json())
          .then(res => {
            setPostList(res)
          })
      }, []);


    return (
        <>      {
            postList.map((item, index) => {
              return (
                <ListitemsPost></ListitemsPost>
              )
            })
          }
           
           <Listitems></Listitems>

            <div >
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Comment"
                type="email"
                fullWidth
                variant="standard"
            />
            <Button variant="contained">Publish</Button>
            <Button>Cancel</Button>

            </div>

        </>

    );
}