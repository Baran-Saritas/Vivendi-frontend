import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AiOutlinePlus , AiOutlineMinus,AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import CustomCarousel from "../../component/carousel";
import { Button, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Divider from '@mui/material/Divider';
import SetDetailCard from '../../component/setdetailcard';
import ZoomProduct from '../../component/hoverZoomProductsMenu';
import { padding } from '@mui/system';

const DetailPage = () => {
  const [addFavorites,setaddFavorites]= useState(false);
  const dispatch = useDispatch();
  return (   
  <div style={{backgroundColor:"#f2f2f2 !important"}}>
    <div style={{display:"flex",padding:"30px"}}>
      <div style={{
        width:"68%",
        height:"auto",
        padding:"0"
      }}>
         <ZoomProduct/>
         {/* <CustomCarousel/> */}
      </div>

    <Box
      sx={{
        width:"30%",
        padding:"40px 0px 0px 20px",
        backgroundColor:"white"
        
      }}
     >
         <Typography component="div" variant="h4" sx={{
           fontWeight: "500",
           color: "#444",
           margin:"15px 0px 0px 10px"
         }}>
           Fly Mishe Bed Set
         </Typography>

         <Typography component="div" variant="h7"sx={{
           fontWeight: "500",
           color: "#838383",
           margin:"10px 0px 0px 10px"
         }} >
           Product Code: 1000496646
         </Typography>

         <Typography component="div" variant="h4"sx={{
           fontWeight: "400",
           color: "#444",
           fontFamily:"Roboto arial sans-serif",
           margin:"20px 0px 0px 10px"
         }}>
           12500 $
         </Typography>

         <Box sx={{ display:"flex",flexDirection: 'row',margin:"15% 0px 0px 10px",alignItems:"center"}}> 

          <Box sx={{
            display:"flex",
            border:1,
            borderColor:"grey",
            width:"175px",
            borderRadius:10
            ,justifyContent:"space-between"
            
          }}>
              <IconButton  size="large"> <AiOutlineMinus/> </IconButton>
              <h3>0</h3>
              <IconButton  size="large"> <AiOutlinePlus/> </IconButton>
          </Box>
          <Box sx={{
            marginLeft:"15%"
          }}>
            {
              addFavorites == true ?(
              <AiFillHeart size={50} style={{color:"red"}} onClick={() => setaddFavorites(!addFavorites)}/> ):(
              <AiOutlineHeart size={50} onClick={() => setaddFavorites(!addFavorites)}/>)
            }
          </Box>
         </Box>
          
         <Typography component="div" variant="h5" sx={{
           fontWeight: "100",
           color: "#444",
           margin:"80px 0px 0px 10px"
         }}>
           Stock Count: 0
         </Typography>

      </Box>
    </div>


    <Box sx={{display:"flex",padding:"30px",alignItems:"center",flexDirection: 'column',border:1}}>
     <Typography component="div" variant="h4" sx={{
           fontWeight: "600",
           color: "#242433",
           margin:"15px 0px 20px 10px"
         }}>
           Fly Mishe 
      </Typography>
      <Typography component="div" variant="h4" sx={{
           fontWeight: "100",
           color: "#242433",
           margin:"15px 0px 40px 10px"
         }}>
           Sağ-Sol Köşe Koltuk Takımı
      </Typography>
      <Divider sx={{color:"black"}} style={{width:'90%',marginBottom:'30px'}} variant="inset"/>
      <Box sx={{
        width:"70%"
      }}>
      <SetDetailCard/>
      <SetDetailCard/>
      <SetDetailCard/>
      </Box>
    </Box>
    
  </div> 
  )
}
export default DetailPage;