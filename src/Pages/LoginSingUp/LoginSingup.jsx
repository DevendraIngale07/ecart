import React, { useState,useEffect  } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  InputAdornment,
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleLoginClick = () => {
    console.log("Login button clicked");
    setAction("Login");
    setLoginClicked(true);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };
  useEffect(() => {
    if (loginClicked) {
      console.log("Before navigation");
      navigate("/");
      console.log("after navigation");
    }
  }, [loginClicked, navigate]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all the required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }


    const apiUrl = "http://localhost:3001/usersData";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User added successfully!");
        console.log("Before navigation");
        navigate("/");
        console.log("After navigation");
      } else {
        console.error("Failed to add user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" className="header">
        {action}
      </Typography>
      <form>
        <Grid container spacing={2} className="inputs">
          {action === "Login" ? null : (
            <Grid item xs={12} className="input">
              <PersonIcon />
              <TextField
                label="Name"
                fullWidth
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </Grid>
          )}
          <Grid item xs={12} className="input">
            <EmailIcon />
            <TextField
              type="email"
              label="Email Id"
              fullWidth
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12} className="input">
            <LockIcon />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Password"
              fullWidth
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={handleTogglePassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Button>
                  </InputAdornment>
                ),
              }}
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
      </form>
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
      onClick={handleLoginClick}
    >
      LOG IN
    </Button>
        <Button
          variant={action === "Sign Up" ? "contained" : "outlined"}
          className={action === "Sign Up" ? "submit gray" : "submit"}
          sx={{ top: "10px", marginLeft: "20px" }}
          onClick={handleSubmit}
        >
          SIGN UP
        </Button>
      </div>
    </Container>
  );
};

export default LoginSignup;
