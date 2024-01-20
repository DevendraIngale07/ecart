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
import "../Navbar/Navbar.css"
import LoginSignup from "../LoginSingUp/LoginSingup";
import user from "../../Assets/user.png"

  

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

  return (
    <>
      {drawer}
      <div style={{ maxWidth: "100%" }}>
        <AppBar position="static">
          <Toolbar>
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
            <div
              className="navLoginCart"
              style={{
                display: "flex",
                fontSize: "10px",
                alignItems: "center",
                fontWeight: "50px",
                gap: "15px",
                backgroundColor: "#dae5ed80",
                padding: "2px",
                marginRight: "10px",
                borderRadius: "50px",
                boxShadow: "3px 6px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Link to="/">
                <Button
                  color="inherit"
                  onClick={() => setLoginSignupOpen(true)}
                >
                  <img src={user} alt="" />
                </Button>
              </Link>
            </div>
            <LoginSignupPopup />
            <div
              className="cart"
              style={{
                backgroundColor: "#4A70BC",
                padding: "8px",
                marginLeft: "10px",
                borderRadius: "10px",
              }}
            >
              <Link to="/cart">
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

            <div className="bottom-nav">
              <div
        className="bottomnavLoginCart"
        style={{
          display: "flex",
          fontSize: "10px",
          alignItems: "center",
          fontWeight: "50px",
          gap: "15px",
          backgroundColor: "#dae5ed80",
          padding: "3px",
          marginRight: "10px",
          borderRadius: "50px",
          boxShadow: "3px 6px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Link to="/">
          <Button color="inherit" onClick={() => setLoginSignupOpen(true)}>
          <img src={user} alt="" />
          </Button>
        </Link>
      </div>
      <LoginSignupPopup />
      <div
        className="bottomcart"
        style={{
          backgroundColor: "#4A70BC",
          padding: "8px",
          marginLeft: "10px",
          borderRadius: "10px",
        }}
      >
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
      </div>
    </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
