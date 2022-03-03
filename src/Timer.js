import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'


const Timer = () => {
    let theTime = new Date().toLocaleTimeString();
    let theDate = new Date().toLocaleDateString();

    const [date, setDate] = useState(" m/d/yyy")
    const [time, setTime] = useState(" 00 : 00 ");

    const clickHandler = () => {
        const fa = document.querySelector('.fas');
        const btn = document.querySelector('.btn');

        fa.addEventListener('click', () => {
            if(btn.classList.contains('off')) {
                btn.classList.remove('off')
                setInterval(theDayTimeHandler, 1000)
                fa.classList.add('fa-toggle-on')
                fa.classList.remove('fa-toggle-off')
            } else {
                btn.classList.add('off')
                setDate(' m/d/yyy ')
                setTime(' 00 : 00 ')
                fa.classList.remove('fa-toggle-on')
                fa.classList.add('fa-toggle-off')
            }
        })

    }
    
    const theDayTimeHandler = () => {
        theDate = new Date().toLocaleDateString();
        setDate(theDate);              
        theTime = new Date().toLocaleTimeString();
        setTime(theTime);

    };


    return (
        <Paper className='timer' elevation={10} style={{backgroundColor: 'aliceblue'}}>
            <h1>Timer</h1>
            <form>
                <TextField
                    style={{ marginTop: '5px' }}
                    name='Today'
                    label='Today'
                    autoComplete='off'
                    fullWidth
                    value={date}
                    
                />
                 <TextField
                    style={{ marginTop: '5px'}}
                    name='Time'
                    label='Time'
                    autoComplete='off'
                    fullWidth
                    value={time} 
                    
                />
            </form>
            <button className='btn btn-secondary' onDoubleClick={clickHandler}>
                <i class="fas fa-toggle-off"
                    style={{ margin: 'auto' }}
                >                
                </i>
            </button>
    
            
        </Paper>
    );
};

export default Timer;