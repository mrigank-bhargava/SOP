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

  const loginHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="wrapperEx wrapper">
      <span className="initiative">Exercises</span>
      <Link href="https://www.youtube.com/watch?v=TzFwjN_7Ir0" underline="none">
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://user-images.githubusercontent.com/69129797/160065132-1377f3d4-1d56-4f76-87a1-422c7376353d.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                How to Manage Diabetes with Yoga? | Dr. Hansaji Yogendra
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link href="https://www.youtube.com/watch?v=yijuZA_rUiA" underline="none">
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://user-images.githubusercontent.com/69129797/160064908-09e58b88-6b02-4ae8-9336-028503769dad.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Yoga for Diabetes | 10 Asanas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link href="https://www.youtube.com/watch?v=lkrY3VmGfGk" underline="none">
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://user-images.githubusercontent.com/69129797/160065570-aa63cccf-de9e-4726-8df1-3fc567ac9098.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                डायबिटीज के लिए योग I Yoga for Diabetes
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link href="https://www.youtube.com/watch?v=fmh58tykgpo" underline="none">
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mindbodywisdom.ch%2Fwp-content%2Fuploads%2F2015%2F11%2FYOGA-AND-FITNESS.jpg&f=1&nofb=1"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Yoga For Diabetes | Yoga With Adriene
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default Login;
