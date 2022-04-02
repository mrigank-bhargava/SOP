import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const submitHandler = () => {
    localStorage.setItem("value", value);
    const glucose = value;
    const username = location.state.username;
    const password = location.state.password;

    navigate("/result", {
      state: {
        username: username,
        password: password,
        glucose: value,
      },
    });
  };
  return (
    <div className="wrapper">
      <img
        className="smalllogoBits"
        src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
      ></img>
      <TextField
        id="outlined-basic"
        sx={{ m: 1, width: "35ch" }}
        onChange={handleChange}
        label="Enter your blood Glucose Level"
        variant="outlined"
      />
      <div className="btn-div">
        <Button variant="contained" onClick={submitHandler}>
          Submit
        </Button>

        <Button
          onClick={() => {
            navigate("/entries");
          }}
          variant="contained"
          color="secondary"
        >
          View your previous entries
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
