import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'


const Timer = () => {
    let theTime = new Date().toLocaleTimeString();
    let theDate = new Date().toLocaleDateString();

    const [date, setDate] = useState(" m/d/yyy")
    const [time, setTime] = useState(" 00 : 00 ");

    const clickHandler = () => {
        const fa = document.querySelector('.far');
        const btn = document.querySelector('.btn');

        fa.addEventListener('click', () => {
            if(btn.classList.contains('slash')) {
                btn.classList.remove('slash')
                setInterval(theDayTimeHandler, 1000)
                fa.classList.add('fa-eye')
                fa.classList.remove('fa-eye-slash')
            } else {
                btn.classList.add('slash')
                setDate(' m/d/yyy ')
                setTime(' 00 : 00 ')
                fa.classList.remove('fa-eye')
                fa.classList.add('fa-eye-slash')
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
        <Paper className='timer' elevation={10}>
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
            <button className='btn btn-secondary' onClick={clickHandler}>
            <i class="far fa-eye-slash"
                style={{ margin: 'auto' }}
            ></i>
            </button>
    
            
        </Paper>
    );
};

export default Timer;