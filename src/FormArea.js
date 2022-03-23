import { Fab, Paper, TextField } from "@material-ui/core";
import React from "react";
import AddIcon from '@material-ui/icons/Add';

const FormArea = ({ addItem, item, setItem }) => {
    

    const clickHandler = () => {
        if(!item.activity){
            alert("Please fill in the Activity");
        } else if(!item.date) {
            alert("Please fill in the Date");
        } else if(!item.time) {            
            alert("Please fill in the Time");
            
        } else {
                addItem(item);
                setItem({
                    activity: '', 
                    date: '', 
                    time: ''
                });
            } 
        }    
        

    function changeHandler(e) {
        const {name, value} = e.target
        setItem(preValues => {
            return {
                ...preValues, 
                [name]: value,
            }
        })
    }
    
    return  (
        <Paper className="formArea" style={{backgroundColor: "#F0E68C"}}>
            <form>
                <TextField 
                    style={{ marginTop: '10px' }}
                    onChange={changeHandler}
                    name='activity'
                    value={item.activity}
                    label='Activity'
                    fullWidth
                    autoComplete="off"
                    required
                    
                />
                <TextField 
                    style={{ marginTop: '20px' }}
                    onChange={changeHandler}
                    name='date'
                    type='date'
                    value={item.date}
                    fullWidth
                    autoComplete="off"
                    required
                />
                <TextField 
                    style={{ marginTop: '20px' }}
                    onChange={changeHandler}
                    name='time'
                    type='time'
                    value={item.time}
                    fullWidth
                    autoComplete="off"
                    required
                />
                <Fab
                    style={{ marginTop: '20px' }}
                    onClick={clickHandler}
                >
                    <AddIcon />
                </Fab>
            </form>
        </Paper>
    );
};

export default FormArea;


