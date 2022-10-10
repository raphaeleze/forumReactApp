import * as React from 'react';
import Createpost from './createpost';
import { useState, useEffect } from 'react';
import ThreadCard from './ThreadCard';

export default function ActionAreaCard() {

  const [threadList, setThreadList] = useState([{ title: 'test', body: 'hey' }])
  const URL = process.env.REACT_APP_API_URL

  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

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
            <ThreadCard title={item.title} body={item.creationDate} threadId={item.id} key={item.id}></ThreadCard>
          )
        })
      }
    </div>
  );
}
