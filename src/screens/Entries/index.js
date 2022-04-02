import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";

const Login = () => {
  let navigate = useNavigate();

  let items = JSON.parse(localStorage.getItem("entries"));

  return (
    <div className="wrapperEx wrapper">
      <span className="initiative">Entries</span>
      {items.map((item, index) => {
        return (
          <div className="entry-wrapper">
            <p className="entry">
              {index +
                " Username: " +
                item.username +
                " Password: " +
                item.password +
                " Glucose Level: " +
                item.glucose}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Login;
