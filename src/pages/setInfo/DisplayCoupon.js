import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFurniture } from "../../../store/furniture/furnitureSlice";
import CreateCouponModal from "./CreateCouponModal";

export default function DisplayCoupon() {
  const { furnitures } = useSelector((state) => state.furniture);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (furnitures.length) {
      let rws = [];
      furnitures.forEach((i) => {
        rws.push({ ...i, ...i.coupon });
      });
      setRows(rws);
    } else {
      dispatch(getFurniture());
    }
  }, [furnitures]);
  return (
    <div style={{ height: 500, width: "100%" }}>
      <Button
        variant="outlined"
        style={{ marginBottom: 20 }}
        onClick={() => setOpen(true)}
      >
        Create Coupon
      </Button>
      <CreateCouponModal open={open} setOpen={setOpen} />
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}

const columns = [
  { field: "name", headerName: "Name", editable: true, width: 250 },
  { field: "stock", headerName: "Stock", editable: true, width: 150 },
  { field: "discount", headerName: "Discount", editable: true, width: 150 },
  { field: "imageSource", headerName: "Image", editable: true, width: 250 },
  { field: "endDate", headerName: "End Date", editable: true, width: 250 },
  {
    field: "createdDate",
    headerName: "Created Date",
    editable: true,
    width: 250,
  },
];
