import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { AiOutlinePlus , AiOutlineMinus,AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import CustomCarousel from '../../component/carousel/index'
import { Button, IconButton, Typography } from "@mui/material";

function createData(name, unitPrice,count , totalPrice, src) {
  return { name, unitPrice,count , totalPrice, src };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, "image/sehpa.jpg"),
  createData('Ice cream sandwich', 237, 9.0, 37,"image/sehpa.jpg"),
  createData('Eclair', 262, 16.0, 24, "image/sehpa.jpg"),
  createData('Cupcake', 305, 3, 67, "image/sehpa.jpg"),
  createData('Gingerbread', 356, 16.0, 49, "image/sehpa.jpg"),
];

const CartTable = () =>{
    return(
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{width:"10px"}}> </TableCell>
            <TableCell style={{width:"200px"}} align="left">Product</TableCell>
            <TableCell align="center">Unit Price</TableCell>
            <TableCell  style={{width:"150px",justifyContent:"center"}} align="center">Count</TableCell>
            <TableCell align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell align="right" component="th" scope="row">
                 <img style={{width:"80px",}} src={row.src}/>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.unitPrice}</TableCell>
              <TableCell align="center">
                    <Box sx={{
                        display:"flex",
                        border:1,
                        borderColor:"grey",
                        width:"125px",
                        margin:"10px",
                        borderRadius:10
                        ,justifyContent:"space-between"
                        
                    }}>
                        <IconButton > <AiOutlineMinus size={25}/> </IconButton>
                        <h3>{row.count}</h3>
                        <IconButton  > <AiOutlinePlus size={25}/> </IconButton>
                    </Box>
             </TableCell>
              <TableCell align="center">{row.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default CartTable