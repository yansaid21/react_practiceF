import React from "react";
import "./LogInPage.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const LogInPage = () => {
  return (
    <div className="LogIn">
      <div className="LogInContainer">
        <div className="LogInTittle">Log In</div>

        <TextField
          className="UserName"
          required
          id="outlined-required"
          label="Email Address"
          color="primary"
        />
        <TextField
          className="UserPassword"
          required
          id="outlined-required"
          label="Password"
          color="primary"
        />
        <div className="Check-Section">
          <Checkbox />
          Remember Me
        </div>
        <Button className="LogInButton" variant="contained">
          Log In
        </Button>
        <div className=" LinksLogIn">
          <a href="#">Forgot password?</a>
          <a href="#">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
