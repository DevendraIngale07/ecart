import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage"; 

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");

  return (
    <Container className="container">
      <Typography variant="h4" className="header">
        {action}
      </Typography>
      <div className="underline"></div>
      <Grid container spacing={2} className="inputs">
        {action === "Login" ? null : (
          <Grid item xs={12} className="input">
            <PersonIcon />
            <TextField label="Name" fullWidth />
          </Grid>
        )}
        <Grid item xs={12} className="input">
          <EmailIcon />
          <TextField type="email" label="Email Id" fullWidth />
        </Grid>
        <Grid item xs={12} className="input">
          <LockIcon />
          <TextField type="password" label="Password" fullWidth />
        </Grid>
      </Grid>
      {action === "Sign Up" ? null : (
        <Typography variant="body2" className="forgot-password">
          Lost Password? <Link href="#">Click Here!</Link>
        </Typography>
      )}
      <div className="submit-container">
        
      <Button
        variant={action === "Login" ? "contained" : "outlined"}
        className={action === "Login" ? "submit gray" : "submit"}
        sx={{ top: "10px", gap: "5px" }}
        onClick={() => {
          setAction("Sign Up");
        }}
      >
        LOG IN
      </Button>
      <Button
        variant={action === "Sign Up" ? "contained" : "outlined"}
        className={action === "Sign Up" ? "submit gray" : "submit"}
        sx={{ top: "10px", marginLeft: "20px" }}
        onClick={() => {
          setAction("Login");
          navigate("/"); // Navigate to the home page when "Sign Up" button is clicked
        }}
      >
        SIGN UP
      </Button>
      </div>
    </Container>
  );
};

export default LoginSignup;
