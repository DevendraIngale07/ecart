import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  ImageList,
  ImageListItem,
  TextField,
  Grid,
  Dialog, DialogContent, DialogTitle
} from "@mui/material";
import DrawerComponent from "./DrawerComponent";
import ProductSection from "../ProductSection/ProductSection";
import LoginSignup from "../LoginSingUp/LoginSingup";
import {  } from '@mui/material';
const PAGES = ["SHOP", "MENS", "WOMENS", "KIDS"];
const IMAGE = [
  {
    img: "https://assets.aboutamazon.com/dims4/default/2b9bf2f/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F8c%2F1a%2Fa9461f02426b987e5211d82d49e2%2Fprimeday-logo-1200x800.png",
    title: "logo",
  },
];

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };
  
  const handleClose = () => {
    setShowLogin(false);
  };
  const handleShopClick = () => {
    
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#81356D" }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} sm={4}>
              <ImageList sx={{ width: 200 }}>
                {IMAGE.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={image.img}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid item xs={6} sm={8}>
              {isMatch ? (
                <>
                  <DrawerComponent />
                </>
              ) : (
                <>
                  <Tabs
                    sx={{ marginLeft: "auto" }}
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    indicatorColor="secondary"
                  >
                    {PAGES.map((page, index) => (
                      <Tab key={index} 
                      label={page}
                      onClick={page === "SHOP" ? handleShopClick : null}
                      />
                    ))}
                  </Tabs>

                  <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    InputProps={{
                      sx: { color: "#00000" },
                    }}
                    sx={{ marginLeft: "30rem", bottom: "38px", }}
                  />
                  <Button
                    sx={{
                      marginLeft: "4rem",
                      bottom: "38px",
                      color: showLogin ? "#000" : "#fff",
                      borderColor: showLogin ? "#000" : "#fff",
                      "&:hover": {
                        borderColor: showLogin ? "#000" : "#fff",
                      },
                    }}
                    variant="contained"
                    onClick={handleLoginClick}
                  >
                    {showLogin ? "CLOSE" : "LOG IN"}
                  </Button>

                  <Dialog open={showLogin} onClose={handleClose}>
                    <DialogTitle>{showLogin ? "LOGIN/SIGNUP" : ""}</DialogTitle>
                    <DialogContent>
                      <LoginSignup /> 
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ProductSection />
    </React.Fragment>
  );
};

export default Navbar;


