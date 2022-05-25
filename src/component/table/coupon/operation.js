import { IconButton, Menu, MenuItem } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React, { useState } from "react";
import DeleteCoupon from "./DeleteCoupon";

export default function Operation({ row, deleteFunc, kind }) {
  const [anchor, setAnchor] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClose = () => setAnchor(null);
  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <SettingsOutlinedIcon />
      </IconButton>
      <DeleteCoupon
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        id={row.id}
        deleteFunc={deleteFunc}
      />
      <Menu
        anchorEl={anchor}
        open={!!anchor}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => setOpenDelete(true)}>Delete Coupon</MenuItem>
      </Menu>
    </>
  );
}
