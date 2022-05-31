import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import {
  Autocomplete,
  Button,
  Divider,
  fabClasses,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

export default function HamburgerList({ setState}) {
  const { furnitures } = useSelector((state) => state.furniture);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { headerFurnitureData, headerSetData, categories } = useSelector(
    (state) => state.global
  );

  React.useEffect(() => {
    dispatch(getFurnitureCategory());
  },[])
  return (
    <div>
      <Divider />
      <div
        style={{ marginTop: "200px", justifyContent: "center", display: "flex" }}
      >
        <List
          sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={furnitures?.map((option) => option.name)}
            renderInput={(params) => (
              <TextField {...params} label="Seacrh Furniture" />
            )}
          />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,.9)",
                      fontSize: "26px",
                      textAlign: "center",
                    }}
                  >
                    Products Menu
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />

        
          {categories.map((category, i) => (

                        <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
                        key={category.id}
              onClick={() => {
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}
                onClick={() => {
                  navigate(`/products/${category.id}/${category.name}`);
                  setState(false);
                }}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    {category.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
