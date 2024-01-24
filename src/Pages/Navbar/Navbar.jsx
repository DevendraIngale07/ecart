import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Dialog, DialogContent } from "@mui/material";
import "../Navbar/Navbar.css";
import LoginSignup from "../LoginSingUp/LoginSingup";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const [loginSignupOpen, setLoginSignupOpen] = useState(false);

  const LoginSignupPopup = () => (
    <Dialog open={loginSignupOpen} onClose={() => setLoginSignupOpen(false)}>
      <DialogContent>
        <LoginSignup />
      </DialogContent>
    </Dialog>
  );
  const [loginClicked, setLoginClicked] = useState(false);

  const drawer = (
    <Drawer anchor="left" open={menuOpen} onClose={handleDrawerToggle}>
      <List>
        <ListItem className="drawer-list-item" button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem className="drawer-list-item" button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem className="drawer-list-item" button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem className="drawer-list-item" button>
          <ListItemText primary="Setting" />
        </ListItem>
      </List>
    </Drawer>
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Function to handle the hover event and open the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setLoginClicked(true);
  };

  // Function to handle the hover out event and close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setLoginClicked(false);
  };
  const handleLoginClick = async () => {
    console.log("Login button clicked");
    setLoginSignupOpen(true);
  };

  const handleSubmit = async () => {
    console.log("Sign Up button clicked");
    setLoginSignupOpen(true);
  };

  return (
    <>
      {drawer}
      <div className="navbar" style={{ maxWidth: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            {/* NAVBAR LOGO BAR STARAT  */}
            <div
              className="nav-logo"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
              <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
                Flipkart
              </p>
            </div>
            {/* SEARCH BAR STARAT  */}
            <div
              className="search_bar"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "800px",
                width: "100%",
              }}
            >
              <InputBase
                placeholder="Search"
                className="input"
                inputProps={{ "aria-label": "search" }}
                style={{
                  flex: 1,
                  padding: "3px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  background: "#fff",
                }}
              />
              <IconButton
                type="button"
                className="search_icon"
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                }}
              >
                <FaSearch />
              </IconButton>
            </div>
            {/* LOGIN BUTTON  STARAT  */}
            <div
              className="navLoginCart"
              style={{
                display: "flex",
                fontSize: "10px",
                alignItems: "center",
                fontWeight: "50px",
                gap: "15px",
                backgroundColor: "#20458e84",
                padding: "5px",
                width: "80px",
                marginRight: "10px",
                borderRadius: "10px",
                boxShadow: "3px 6px 8px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
            >
              <Button
                color="inherit"
                onClick={() => setLoginSignupOpen(true)}
                startIcon={<FaRegUserCircle />}
              >
                LogIN
              </Button>

              {/* Menu for drop-down */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {loginClicked ? (
                  <MenuItem onClick={handleLoginClick}>LOG IN</MenuItem>
                ) : (
                  [
                    <MenuItem key="login" onClick={handleLoginClick}>
                      LOG IN
                    </MenuItem>,
                    <MenuItem key="signup" onClick={handleSubmit}>
                      SIGN UP
                    </MenuItem>,
                  ]
                )}
              </Menu>
            </div>
            {/* CART BUTTON  STARAT  */}
            <div
              className="cart"
              style={{
                backgroundColor: "#4a70bc84",
                padding: "10px",
                marginLeft: "10px",
                borderRadius: "50px",
              }}
            >
              <Link to="/cartitems">
                <img src={cart_icon} alt="" />
              </Link>
            </div>
            <IconButton
              className="menu"
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, color: "#EAFB00" }}
            >
              <CiMenuKebab />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div
        style={{
          backgroundColor: "#0000",
        }}
      >
        <div
          className="bottom-search_bar"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "650px",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <InputBase
            placeholder="Search"
            className="input"
            inputProps={{ "aria-label": "search" }}
            style={{
              flex: 1,
              padding: "3px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              background: "#fff",
              display: "flex",
              alignItems: "center",
            }}
            startAdornment={<FaSearch style={{ marginRight: "8px" }} />}
          />
        </div>
      </div>

      <LoginSignupPopup />
    </>
  );
};

export default Navbar;
