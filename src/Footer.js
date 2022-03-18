import { Paper } from "@material-ui/core";
import React from "react";

const Footer = () => {
    return (
        <Paper className="footer">
            <p 
                style={{ backgroundColor: "black" }}
            >
                Copyright &copy; Kadenyi { new Date().getFullYear() }

                {/* Copyright &copy; <span><a href="https://www.w3schools.com/css/css_link.asp" rel="noreferrer" target="_blank">Kadenyi</a></span> { new Date().getFullYear() } */}
            </p>
        </Paper>
    );
};

export default Footer;