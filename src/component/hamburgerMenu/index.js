import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import SetFurnitureList from "../SetList";
import { Card, CardContent, Divider, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HamburgerList from "./hamburgerList";

export default function SetDrawerHamburger() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => {
    setState(open);
  };

  return (
    <div className="furnitureDrawer">
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          zIndex:-1,
          marginTop: "20px",
        }}
      >
      </div>
      <Drawer
        PaperProps={{
          paper: {
            width: 250,
          },
          sx: { width: "450px" },
        }}
        anchor={"right"}
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          PaperProps={{
            sx: { width: "100%" },
          }}
          sx={{ width: 450 }}
          role="presentation"
        >
          <HamburgerList
            setState={setState}
          />
        </Box>
      </Drawer>
    </div>
  );
}
