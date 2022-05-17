import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  toIncreaseProductCount,
  toReduceProductCount,
} from "../../store/productCart/productCartSlice";

const CartTable = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productCart);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "10px" }}> </TableCell>
            <TableCell style={{ width: "200px" }} align="left">
              Product
            </TableCell>
            <TableCell align="center">Unit Price</TableCell>
            <TableCell
              style={{ width: "150px", justifyContent: "center" }}
              align="center"
            >
              Count
            </TableCell>
            <TableCell align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                <img
                  style={{ width: "80px" }}
                  src={row.images[0].imageSource}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    border: 1,
                    borderColor: "grey",
                    width: "125px",
                    margin: "10px",
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton>
                    {" "}
                    <AiOutlineMinus
                      onClick={() =>
                        dispatch(toReduceProductCount({ id: row.id }))
                      }
                      size={25}
                    />{" "}
                  </IconButton>
                  <h3>{row.count}</h3>
                  <IconButton>
                    {" "}
                    <AiOutlinePlus
                      onClick={() =>
                        dispatch(toIncreaseProductCount({ id: row.id }))
                      }
                      size={25}
                    />{" "}
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell align="center">
                {parseInt(row.count) * parseFloat(row.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
