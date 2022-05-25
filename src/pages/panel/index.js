import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CategoryPanel from "../../component/panels/category";
import CampaignPanel from "../../component/panels/campaign";
import FurnitureSetPanel from "../../component/panels/furnitureSetInfo";
import FurniturePanel from "../../component/panels/product";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Base() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "93%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="vivendi panels"
        >
          <Tab label="Category" {...a11yProps(0)} />
          <Tab label="Furniture" {...a11yProps(1)} />
          <Tab label="Campaign" {...a11yProps(2)} />
          <Tab label="Set" {...a11yProps(3)} />
          <Tab label="Coupon" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CategoryPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FurniturePanel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CampaignPanel />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FurnitureSetPanel />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FurnitureSetPanel />
      </TabPanel>
    </Box>
  );
}
