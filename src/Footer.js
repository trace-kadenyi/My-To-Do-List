import { Paper } from "@material-ui/core";
import React from "react";

const Footer = () => {
    return (
        <Paper className="footer">
            <p 
                style={{ backgroundColor: "black" }}
            >
                Copyright &copy; <span><a href="https://github.com/TracK92" rel="noreferrer" target="_blank">Kadenyi</a></span> { new Date().getFullYear() }
            </p>
        </Paper>
    );
};

export default Footer;