import React, { useEffect, useRef,useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineColumnWidth,AiOutlineColumnHeight} from 'react-icons/ai'
import { toIncreaseProductCount, toReduceProductCount } from "../../store/productCart/productCartSlice";

const FurnitureDetailCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex',padding:"20px",justifyContent:"space-between",marginBottom:"10px" }}>
      <div style={{width:"55%"}}>
      <img style={{width:"90%"}} src="https://media.gq-magazine.co.uk/photos/5fa3edfea6440a8c1c83079c/master/w_1920%2Cc_limit/FURNITURE511_1.jpg"/>
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'column', width:"45%"}}>
      <Typography component="div" variant="h4" sx={{
           fontWeight: "500",
           color: "#444",
           margin:"15px 0px 0px 10px"
         }}>
           Furniture Name
         </Typography>

         <Typography component="div" variant="h7"sx={{
           fontWeight: "500",
           color: "#838383",
           margin:"10px 0px 0px 10px"
         }} >
           Product Code: 1000496646
         </Typography>


         <Box sx={{flexDirection:"row",display:"flex",alignItems:"center", margin:"70px 0px 0px 10px"}}>
          <Box sx={{flexDirection:"row",display:"flex",alignItems:"center",marginLeft:"0px"}}>
          <Typography component="div" variant="h5" sx={{
                fontWeight: "500",
                color: "#242433"
              }}> 
                W
            </Typography>   <Typography component="div" variant="h6" sx={{
              fontWeight: "500",
              color: "#444",
              margin:"0px 0px 0px 4px"
            }}>
              350mm
            </Typography> 
          </Box>
          <Box  sx={{flexDirection:"row",display:"flex",alignItems:"center",marginLeft:"20px"}}>
          <Typography component="div" variant="h5" sx={{
                fontWeight: "500",
                color: "#242433"
              }}>
                H
            </Typography> 
            <Typography component="div" variant="h6" sx={{
              fontWeight: "500",
              color: "#444",
              margin:"0px 0px 0px 4px"
            }}>
              600mm
            </Typography> 
          </Box>
          <Box  sx={{flexDirection:"row",display:"flex",alignItems:"center",marginLeft:"20px"}}>    
              <Typography component="div" variant="h5" sx={{
                fontWeight: "500",
                color: "#242433"
              }}>
                D 
            </Typography>
          <Typography component="div" variant="h6" sx={{
              fontWeight: "500",
              color: "#444",
              margin:"0px 0px 0px 4px"
            }}>
              400mm
            </Typography> 
          </Box>
          </Box>
          <Box sx={{flexDirection:"row",display:"flex",alignItems:"center", margin:"40px 0px 0px 10px"}}>
             <Link style={{textDecoration:"none"}} href="#">Buy single?</Link>
          </Box>
      </Box>
    </Card>
  );
}
export default FurnitureDetailCard