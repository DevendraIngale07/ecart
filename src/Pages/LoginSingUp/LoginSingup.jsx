import React, { useState, useEffect } from "react";
import axios from "axios";
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

const LoginSignup = (props) => {
  const [action, setAction] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false
  });
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleLoginClick = async () => {
    const apiUrl = "http://localhost:5000/login";

    try {
      let response = await axios.post(apiUrl, formData);

      if (response.data && response.data.userData) {
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.userData)
        );
        props.setLoginSignupOpen(false);
      } else {
        alert("Enter valid Email-id and password");
      }
    } catch (error) {
      console.alert("Error:", error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  useEffect(() => {
    if (loginClicked) {
      setLoginClicked(false);
    }
  }, [loginClicked]);

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

    const apiUrl = "http://localhost:5000/signup";

    try {
      const addUserResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);

      if (addUserResponse.ok) {
        alert("User added successfully!");
        setAction("Login");
        clearFormData();
      } else {
        console.error("Failed to add user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container className="container">
      <Typography
        variant="h4"
        className="header"
        style={{ display: "flex", alignItems: "center" }}
      >
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
        <Typography
          variant="body2"
          className="forgot-password"
          style={{ cursor: "pointer" }}
        >
          Lost Password? <Link href="#">Click Here!</Link>
          <br />
          <Link onClick={() => setAction("Sign Up")}>
            New to Flipkart? Create an account
          </Link>
        </Typography>
      )}
      {action === "Login" ? null : (
        <Typography
          variant="body2"
          className="forgot-password"
          style={{ cursor: "pointer" }}
        >
          Existing User? <Link onClick={() => setAction("Login")}>Log in</Link>
        </Typography>
      )}

      <div className="submit-container">
        {action === "Login" && (
          <Button
            variant="contained"
            className="submit"
            sx={{ top: "10px", gap: "5px" }}
            onClick={handleLoginClick}
          >
            LOG IN
          </Button>
        )}
        {action === "Sign Up" && (
          <Button
            variant="contained"
            className="submit"
            sx={{ top: "10px", marginLeft: "20px" }}
            onClick={() => {
              handleSubmit();
            }}
          >
            SIGN UP
          </Button>
        )}
      </div>
    </Container>
  );
};

export default LoginSignup;
