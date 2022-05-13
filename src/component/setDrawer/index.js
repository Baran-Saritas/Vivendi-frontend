import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import SetFurnitureList from "../SetList";
import { Card, CardContent, Divider, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function SetDrawer({ cTarget, setCTarget }) {
  const [state, setState] = React.useState(false);
  const [addedFurnitures, setAddedFurnitures] = React.useState([]);
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
        <Tooltip
          title={
            <span style={{ fontSize: 14, padding: 2 }}>
              {" "}
              {addedFurnitures.length > 0
                ? "Edit Furniture"
                : "Add furniture to the campaign"}
            </span>
          }
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="dialog-item-2" onClick={() => toggleDrawer(true)}>
            {addedFurnitures.length > 0 ? (
              <AiOutlineEdit size={40} />
            ) : (
              <AiOutlinePlus size={50} />
            )}
          </div>
        </Tooltip>

        {addedFurnitures.length > 0 ? (
          <div style={{ width: "100%", marginTop: "15px" }}>
            <h3>Added Furnitures</h3>
            <Divider />
            {addedFurnitures.map((value, i) => (
              <Card
                sx={{
                  display: "flex",
                  padding: "0px",
                  margin: "10px",
                  boxShadow: "none",
                  border: "1px solid",
                }}
              >
                {/* / <img style={{ width: "50%", height: "50px" }} src={value.imageUrl} /> */}
                <Box
                  sx={{
                    display: "flex",
                    disableRipple: true,
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto", width: "200px" }}>
                    <Typography component="div" variant="h5">
                      {value.name}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
            <Divider />
          </div>
        ) : null}
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
          <SetFurnitureList
            cTarget={cTarget}
            setCTarget={setCTarget}
            addedFurnitures={addedFurnitures}
            setAddedFurnitures={setAddedFurnitures}
            setState={setState}
          />
        </Box>
      </Drawer>
    </div>
  );
}
