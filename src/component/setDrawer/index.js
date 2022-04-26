import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import SetFurnitureList from '../SetList';
import { Card, CardContent, Divider, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function SetDrawer() {

  const [state, setState] = React.useState(false);
  const [addedFurnitures, setAddedFurnitures] = React.useState([]);
  const toggleDrawer = (open) => {
    setState(open);
  };

  return (
    <div className='furnitureDrawer'>
      <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "20px" }}>

        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}> {addedFurnitures.length > 0? "Edit Furniture": "Add Furniture"}</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="dialog-item-2" onClick={() => toggleDrawer(true)}>
            {addedFurnitures.length > 0? <AiOutlineEdit size={50}/>:<AiOutlinePlus size={60}/>}
          </div>
        </Tooltip>


        {addedFurnitures.length > 0 ? (

          <div style={{ width: "100%", marginTop: "15px" }}>
            <h3>Added Furnitures</h3>
            <Divider />
            {addedFurnitures.map((value, i) => (

              <Card sx={{ display: 'flex', padding: "20px", boxShadow: "none" }}>
                <img style={{ width: "50%", height: "250px" }} src={value.imageUrl} />

                <Box sx={{ display: 'flex',disableRipple: true ,alignItems:"center"}}>
                  <CardContent sx={{ flex: '1 0 auto', width: '200px' }}>
                    <Typography component="div" variant="h5">
                      {value.categoryName}
                    </Typography>
                  </CardContent>
                </Box>

              </Card>

            ))}
            <Divider />
          </div>
        ) : null

        }
      </div>
      <Drawer
        PaperProps={{
          paper: {
            width: 250
          },
          sx: { width: "450px" },
        }}
        anchor={'right'}
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          PaperProps={{
            sx: { width: "100%" },
          }}
          sx={{ width: 450 }}
          role="presentation" >

          <SetFurnitureList addedFurnitures={addedFurnitures} setAddedFurnitures={setAddedFurnitures} setState={setState} />


        </Box>

      </Drawer>
    </div>

  );
}