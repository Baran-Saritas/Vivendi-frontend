import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function OrderFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "rgba(0,0,0,.8)", fontWeight: 500 }}
        endIcon={
          <KeyboardArrowDownIcon
            style={{
              transform: `rotate(${open ? 180 : 0}deg)`,
              transition: "all .3s ease",
            }}
          />
        }
      >
        Sort By Price
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="testest"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Price-low to hight</MenuItem>
        <MenuItem onClick={handleClose}>Price-high to low</MenuItem>
        <MenuItem onClick={handleClose}>Average ratings</MenuItem>
        <MenuItem onClick={handleClose}>Best Seller</MenuItem>
        <MenuItem onClick={handleClose}>Newest</MenuItem>
      </Menu>
    </div>
  );
}
