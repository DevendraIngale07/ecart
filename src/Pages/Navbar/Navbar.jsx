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
        <LoginSignup setLoginSignupOpen={setLoginSignupOpen} />
      </DialogContent>
    </Dialog>
  );

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
  const getUserDataFromLocalStorage = () => {
    try {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        return userData;
      }
      return null;
    } catch (error) {
      console.error("Error fetching user data from local storage:", error);
      return null;
    }
  };
  
  const userData = getUserDataFromLocalStorage();
  
  if (userData) {
    console.log("User data:", userData.name);
  } else {
    console.log("User data not found in local storage.");
  }
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
            <div className="navLoginCart">
              <Button
                color="inherit"
                onClick={() => setLoginSignupOpen(true)}
                startIcon={<FaRegUserCircle />}
              >
                {userData ? userData.name : "LogIN"}
              </Button>
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
      {/* BOTTTOM SEARCH BAR MEDIA QUERY */}
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
