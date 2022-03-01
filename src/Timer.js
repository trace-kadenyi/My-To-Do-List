import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'


const Timer = () => {
    const [time, setTime] = useState({
        Today: 'm/d/yyyy', 
        Time: "0000hrs"
    });

    // const theDay = () => {
    //     let day = new Date().getDate();
    //     let month = new Date().getMonth();
    //     let year = new Date().getFullYear();
    //     let thisDay = `${month} - ${day} - ${year} `
    //     setTime(thisDay)
    // }
    // function theTime() {
        
    //     let hour = new Date().getHours();
    //     let minute = new Date().getMinutes();
        
    //     let now = `${hour} : ${minute}`

    //     setTime(now)
        
        
    // }

    return (
        <Paper className='timer' elevation={10}>
            <h1>Timer</h1>
            <form>
                <TextField
                    style={{ marginTop: '5px' }}
                    name='Today'
                    label='Today'
                    autoComplete='off'
                    fullWidth
                    value={time.Today}
                    
                />
                 <TextField
                    style={{ marginTop: '5px' }}
                    name='Time'
                    label='Time'
                    autoComplete='off'
                    fullWidth
                    value={time.Time}
                />
            </form>
            <button className='btn btn-secondary'>
            <i class="far fa-eye-slash"></i>
            </button>
    
            
        </Paper>
    );
};

export default Timer;