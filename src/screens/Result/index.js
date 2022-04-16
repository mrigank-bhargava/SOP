import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Result = () => {
  const [value, setValue] = useState();
  let navigate = useNavigate();
  const location = useLocation();
  let entry = location.state;

  useEffect(() => {
    setValue(parseInt(localStorage.getItem("value")));
  }, [setValue]);

  var a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("session")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(entry);
  // Alert the array value
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("session", JSON.stringify(a));

  console.log("SESSS", JSON.parse(localStorage.getItem("session")));

  let chars = JSON.parse(localStorage.getItem("session"));

  const map = {};
  const newArray = [];
  chars.forEach((el) => {
    if (!map[JSON.stringify(el)]) {
      map[JSON.stringify(el)] = true;
      newArray.push(el);
    }
  });

  localStorage.setItem("entries", JSON.stringify(newArray));

  const renderItems = () => {
    if (value < 140) {
      return (
        <>
          <img
            className="smalllogoBits"
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
          ></img>
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

    const doctorHandler = () => {
      navigate("/doctor");
    };

    if (value >= 140 && value < 180) {
      return (
        <>
          <img
            className="smalllogoBits"
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
          ></img>
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
          <img
            className="smalllogoBits"
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
          ></img>
          <span className="result-text-red">You are diabetic.</span>
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
            <Button variant="contained" color="error" onClick={doctorHandler}>
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
