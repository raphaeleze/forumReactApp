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
import { OnDeviceTrainingTwoTone } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import ThreadCard from './ThreadCard';

export default function ActionAreaCard() {

  const [threadList, setThreadList] = useState([{title: 'test', body:'hey'}])
  const URL = process.env.REACT_APP_API_URL

  const requestOptions = {
    method: 'GET',
    headers: { 
      'Accept': 'application/json'}
  };

  // fetch(`${URL}/users/threads/`, requestOptions)
  // .then(res => res.json())
  // .then(res => {
  //   setThreadList(res)
  // })

  useEffect(() => {
    fetch(`${URL}/threads/`, requestOptions)
      .then(res => res.json())
      .then(res => {
        setThreadList(res)
      })
  }, []);

  return (

    <div className='pad-25'>
      <div className='threadTitleBar'>
        <h2>Threads</h2>
        <Createpost />
      </div>

      {
        threadList.map((item, index) => {
          return (
            <ThreadCard title={item.title} body={item.creationDate}></ThreadCard>
          )
        })
      }
      {/* <ThreadCard title="Hi!" body="hello, this is the body of the Card"></ThreadCard> */}

    </div>
  );
}
