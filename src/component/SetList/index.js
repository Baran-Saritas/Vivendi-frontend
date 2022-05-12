import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Divider, fabClasses, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function SetFurnitureList({
  setState,
  setAddedFurnitures,
  addedFurnitures,
}) {
  const { categories } = useSelector((state) => state.category);
  const handleToggle = (value) => () => {
    const currentIndex = addedFurnitures.findIndex((i) => i.id === value.id);
    const newChecked = [...addedFurnitures];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setAddedFurnitures(newChecked);
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>All Furnitures</h2>
      </div>
      <Divider />
      <div
        style={{ marginTop: "15px", justifyContent: "center", display: "flex" }}
      >
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={categories?.map((option) => option.categoryName)}
            renderInput={(params) => <TextField {...params} label="freeSolo" />}
          />
          {categories.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value.id}
                sx={{ marginBottom: "10px" }}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={
                      addedFurnitures.findIndex((i) => i.id === value.id) !== -1
                    }
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    id={labelId}
                    disableTypography
                    primary={
                      <Typography
                        variant="h5"
                        style={{ color: "rgba(0,0,0,.9)", fontSize: "26px" }}
                      >
                        {value.categoryName}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Button onClick={() => setState(false)} variant="outlined">
          <h3>Create Set</h3>
        </Button>
      </div>
    </div>
  );
}
