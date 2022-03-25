import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [value, setValue] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    setValue(parseInt(localStorage.getItem("value")));
  }, [setValue]);

  const renderItems = () => {
    if (value < 140) {
      return (
        <>
       
          <span className="result-text">You are fit and healthy</span>
        </>
      );
    }

    const dietHandler = () => {
      navigate("/diet");
    };

    const exerciseHandler = () => {
      navigate("/exercise");
    };

    if (value >= 140 && value < 180) {
      return (
        <>
       
          <span className="result-text-yellow">
            You are pre-diabetic. Make sure to follow the right diet and
            exercises listed below.
          </span>
          <div className="btn-div">
            <Button
              onClick={exerciseHandler}
              variant="contained"
              color="secondary"
            >
              Exercise
            </Button>
            <Button onClick={dietHandler} variant="contained" color="success">
              Diet
            </Button>
          </div>
        </>
      );
    }
    if (value >= 180) {
      return (
        <>
       
          <span className="result-text-red">You are diabetic.</span>
          <div className="btn-div">
            <Button variant="contained" color="secondary">
              Exercise
            </Button>
            <Button onClick={dietHandler} variant="contained" color="success">
              Diet
            </Button>
            <Button variant="contained" color="error">
              Call a doctor
            </Button>
          </div>
        </>
      );
    }
  };
  return <div className="wrapper">{renderItems()}</div>;
};

export default Result;
