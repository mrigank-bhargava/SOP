import React from 'react'
import "./style.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    let navigate = useNavigate();
    const [value, setValue] = React.useState();
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const submitHandler = () => {
        localStorage.setItem("value",value);
        navigate("/result");
    }
  return (
    <div className='wrapper'>
    <TextField id="outlined-basic" sx={{ m: 1, width: '35ch' }} onChange={handleChange} label="Enter your blood Glucose Level" variant="outlined" />
    <Button variant="contained" onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default Dashboard