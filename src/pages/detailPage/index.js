import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AiOutlinePlus, AiOutlineMinus, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import CustomCarousel from "../../component/carousel";
import { Button, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Divider from '@mui/material/Divider';
import SetDetailCard from '../../component/setdetailcard';
import ZoomProduct from '../../component/hoverZoomProductsMenu';
import { padding } from '@mui/system';

const DetailPage = () => {
  const [addFavorites, setaddFavorites] = useState(false);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "#f2f2f2 !important" }}>
      <div style={{ display: "flex", padding: "30px 10px 10px 0px" }}>
        <div style={{
          width: "68%",
          height: "auto",
          padding: "0"
        }}>
          <ZoomProduct />
        </div>

        <Box
          sx={{
            width: "30%",
            padding: "40px 0px 0px 20px",
            backgroundColor: "white"

          }}
        >
          <Typography component="div" variant="h4" sx={{
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            fontWeight: "100",
            color: "#444",
            margin: "5px 0px 0px 10px"
          }}>
            Fly Mishe Bed Set
          </Typography>

          <Typography component="div" variant="h7" sx={{
            fontWeight: "500",
            color: "#838383",
            margin: "10px 0px 0px 10px"
          }} >
            Product Code: 1000496646
          </Typography>

          <Typography component="div" variant="h4" sx={{
            color: "#444",
            fontFamily: "Roboto arial sans-serif",
            margin: "10px 0px 0px 10px",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            fontWeight: "100",
          }}>
            12500 $
          </Typography>


          <div style={{ width: "100%", padding: "10px", display: "flex", columnGap: "10px", marginTop: "20px" }}>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px", overflow: "hidden", borderRadius: "9999px" }}>
              <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/cms/2022/03/22/b86cdc48-b95c-4857-920c-1ba5b495d981_size142x80_cropCenter.png' />
            </div>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px", overflow: "hidden", borderRadius: "9999px" }}>
              <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/cms/2022/03/22/c6304027-55db-4b09-801a-2a0b670bfa0d_size142x80_cropCenter.png' />
            </div>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px", overflow: "hidden", borderRadius: "9999px" }}>
              <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/products/2021/09/08/11647/62391539-1b07-4e42-919e-a509b08b9eec_size142x80_cropCenter.jpg' />
            </div>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px", overflow: "hidden", borderRadius: "9999px" }}>
              <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/products/2021/09/08/12498/4d525213-97d6-4a9a-bd8c-ede89c10a29f_size142x80_cropCenter.jpg' />
            </div>
          </div>

          <Box sx={{ display: "flex", flexDirection: 'row', margin: "15% 0px 0px 10px", alignItems: "center" }}>

            <Box sx={{
              display: "flex",
              border: 1,
              borderColor: "grey",
              width: "165px",
              height:"63px",
              alignItems:"center",
              borderRadius: 10
              , justifyContent: "space-between"

            }}>
              <IconButton size="large"> <AiOutlineMinus /> </IconButton>
              <h3>0</h3>
              <IconButton size="large"> <AiOutlinePlus /> </IconButton>
            </Box>
            <Box sx={{
              marginLeft: "15%"
            }}>
              {/*
                addFavorites == true ? (
                  <AiFillHeart size={50} style={{ color: "red" }} onClick={() => setaddFavorites(!addFavorites)} />) : (
                  <AiOutlineHeart size={50} onClick={() => setaddFavorites(!addFavorites)} />)
                  */
              }
            </Box>
          </Box>

        { /*<Typography component="div" variant="h5" sx={{
            fontWeight: "100",
            color: "#444",
            margin: "20px 0px 0px 10px"
          }}>
            Stock Count: 0
          </Typography>  */}

        </Box>
      </div>


      <Box sx={{ display: "flex", padding: "30px", alignItems: "center", flexDirection: 'column' }}>
        <Typography component="div" variant="h4" sx={{
          fontWeight: "600",
          color: "#242433",
          margin: "15px 0px 20px 10px"
        }}>
          Fly Mishe
        </Typography>
        <Typography component="div" variant="h4" sx={{
          fontWeight: "100",
          color: "#242433",
          margin: "15px 0px 40px 10px"
        }}>Corner Sofa Set
        </Typography>
        <Divider sx={{ color: "black" }} style={{ width: '90%', marginBottom: '30px' }} variant="inset" />
        <Box sx={{
          width: "70%"
        }}>
          <SetDetailCard />
          <SetDetailCard />
          <SetDetailCard />
        </Box>
      </Box>

    </div>
  )
}
export default DetailPage;