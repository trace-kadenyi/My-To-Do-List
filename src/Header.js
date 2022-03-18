import React from 'react';
import { Paper } from '@material-ui/core';
import logo from './logo.jpg'

const Header = () => {
    return (
        <Paper className='header' elevation={10} style={{ backgroundColor: '#F0E68C' }}>
            <img src={ logo } alt="logo"/>
            <h1>To-Do-List</h1>
        </Paper>
    );
};

export default Header;