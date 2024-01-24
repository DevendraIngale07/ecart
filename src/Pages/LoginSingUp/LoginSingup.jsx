import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

const LoginSignup = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleLoginClick = async () => {
    console.log("Login button clicked");
    setAction("Login");
    setLoginClicked(true);

    const userExists = await checkUserExists(formData.email, formData.password);
    if (userExists) {
      // console.log("User exists. Logging in...");
      alert("Welcome ...!");
    } else {
      // console.log("User does not exist. Sign up first.");
      alert("User does not exist. Please sign up first.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (loginClicked) {
    }
  }, [loginClicked]);

  const checkUserExists = async (email, password) => {
    const apiUrl = "http://localhost:3001/usersData";

    try {
      const response = await fetch(apiUrl);
      const userData = await response.json();

      const userExists = userData.some(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );

      return userExists;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
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
      const response = await fetch(apiUrl);
      const userData = await response.json();
      const emailExists = userData.some(
        (user) => user.email.toLowerCase() === formData.email.toLowerCase()
      );

      if (emailExists) {
        alert("Email already exists. Please use a different email address.");
        return;
      }

      const addUserResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (addUserResponse.ok) {
        alert("User added successfully!");
      } else {
        console.error("Failed to add user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="container">
      <Typography
        variant="h4"
        className="header"
        style={{ display: "flex", alignItems: "center" }}
      >
        {action}
        <Button
          style={{
            padding: "4px",
            border: "1px solid black",
            marginLeft: "320px",
            background: "#7E80BA",
            color: "black",
            width: "5.5rem",
          }}
          onMouseEnter={handleMenuOpen}
        >
          Account
        </Button>
      </Typography>

      <Typography></Typography>
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
          // onMouseEnter={handleMenuOpen}
        >
          LOG IN
        </Button>
        <Button
          variant={action === "Sign Up" ? "contained" : "outlined"}
          className={action === "Sign Up" ? "submit gray" : "submit"}
          sx={{ top: "10px", marginLeft: "20px" }}
          onClick={handleSubmit}
          // onMouseEnter={handleMenuOpen}
        >
          SIGN UP
        </Button>
        <Button></Button>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => setAction("Login")}>Log In</MenuItem>
        <MenuItem onClick={() => setAction("Sign Up")}>Sign Up</MenuItem>
      </Menu>
    </Container>
  );
};

export default LoginSignup;
