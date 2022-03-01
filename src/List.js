import { Button, Paper } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


const List = ({ activity, date, time, id, delItem }) => {

  const clickHandler = () => {
    delItem(id)
  };

  
  return (
    <Paper className='list' elevation={10}>
        <div>
            <h2>{activity}</h2>
            <p>{date}</p>
            <p>{time}</p>
        </div>
        <Button 
          style={{ marginLeft: "120px" }}
          onClick={clickHandler}
        >
          <DeleteIcon style={{ color: "rgb(139,0,0)" }}/>
        </Button>
        
    </Paper>
  );
};

export default List



