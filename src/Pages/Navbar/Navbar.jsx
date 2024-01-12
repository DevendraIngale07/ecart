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
import { TiThMenu } from "react-icons/ti";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import HeroSection from "../HomePage/HeroSection";
import { Dialog, DialogContent } from "@mui/material";

import LoginSignup from "../LoginSingUp/LoginSingup";
import ProductSection from "../ProductSectionPage/ProductSection";

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
              <img
                src={logo}
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
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
              className="nav-login-cart"
              style={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              <Link to="/">
                <Button
                  color="inherit"
                  onClick={() => setLoginSignupOpen(true)}
                >
                  Log In
                </Button>
              </Link>
              <LoginSignupPopup />
              <Link to="/cart">
                <img src={cart_icon} alt="" />
              </Link>
            </div>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, color: "#5887E8" }}
            >
              <TiThMenu />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <ProductSection />
      <HeroSection />
    </>
  );
};

export default Navbar;
