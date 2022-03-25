import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const loginHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="wrapper">
      <span className="initiative">Non-Invasive Glucose Monitor By</span>
      <img className="logoBits" src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"></img>
      <span className="heading">Welcome</span>
      <div className="form">
        <TextField
          id="outlined-basic"
          sx={{ m: 1, width: "35ch" }}
          label="Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          sx={{ m: 1, width: "35ch" }}
          label="Password"
          variant="outlined"
        />
      </div>
      <Button variant="contained" onClick={loginHandler}>
        Login
      </Button>
    </div>
  );
};

export default Login;
