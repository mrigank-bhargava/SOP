import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  localStorage.setItem("entry", JSON.stringify([{}, {}]));

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  let navigate = useNavigate();
  const loginHandler = () => {
    navigate("/dashboard", {
      state: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <div className="wrapper">
      <span className="initiative">Diabetes monitoring and care management system by EEE Department</span>
      <img
        className="logoBits"
        src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
      ></img>
      {/* <span className="initiative">EEE Department</span> */}
      <span className="heading">Welcome</span>
      <div className="form">
        <TextField
          id="outlined-basic"
          sx={{ m: 1, width: "35ch" }}
          label="Username"
          variant="outlined"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          sx={{ m: 1, width: "35ch" }}
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Button variant="contained" onClick={loginHandler}>
        Login
      </Button>
    </div>
  );
};

export default Login;
