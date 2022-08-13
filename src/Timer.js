import { Paper, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { FaClock } from 'react-icons/fa';


const Timer = ({ date, time, day, theDayTimeHandler }) => {

    useEffect(() => {
        setInterval(theDayTimeHandler, 1000)
    });
        
    
    return (
        <Paper className='timer' elevation={10} style={{backgroundColor: '#F0E68C'}}>
            <h1 className='clock'>Clock</h1><FaClock style={{ display: "flex", alignItems: "center", margin: "0 auto 10px", justifyContent: "center" }} />
            <form style={{ marginBottom: "20px" }}>
                <TextField
                    style={{ marginTop: '5px', padding: '5px'}}
                    name='Day'
                    label='Day'
                    autoComplete='off'
                    fullWidth
                    value={day} 
                        
                    />
                <TextField
                    style={{ marginTop: '5px', padding: "5px" }}
                    name='Date'
                    label='Date'
                    autoComplete='off'
                    fullWidth
                    value={date}
                    
                />
                 <TextField
                    style={{ marginTop: '5px', padding: '5px'}}
                    name='Time'
                    label='Time'
                    autoComplete='off'
                    fullWidth
                    value={time} 
                    
                />
            </form>
        </Paper>
    );
};

export default Timer;