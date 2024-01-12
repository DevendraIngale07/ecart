import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
const PAGES = ["SHOP", "MENS", "WOMENS", "KIDS", "LOG IN"]


const DrawerComponent = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          
          {
            PAGES.map((page, index) => (
              <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
            <ListItemIcon>
              <ListItemText>{page}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
            ))
          }
          
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "9rem" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
