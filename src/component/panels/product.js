import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Product from "../product";
import EditProdutView from "../product/EditProductView";
import AddCoupon from "../product/coupon/AddCoupon";
import DisplayCoupon from "../product/coupon/DisplayCoupon";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function FurniturePanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical furniture set tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Add Furniture" {...a11yProps(0)} />
        <Tab label="Update Furniture" {...a11yProps(1)} />
        <Tab label="Coupons" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Product />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EditProdutView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DisplayCoupon />
      </TabPanel>
    </Box>
  );
}
