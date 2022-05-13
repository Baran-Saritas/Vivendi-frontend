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
  cTarget,
  setCTarget,
}) {
  const { categories } = useSelector((state) => state.category);
  const { furnitures } = useSelector((state) => state.furniture);
  const { setInfos } = useSelector((state) => state.setInfo);
  const [label,setLabel] = React.useState("Furniture");
  const handleToggle = (value) => () => {
    const currentIndex = addedFurnitures.findIndex((i) => i.id === value.id);
    const newChecked = [...addedFurnitures];
    const currentIndexTarget = cTarget.findIndex((i) => i.id === value.id);
    const newCheckedTarget = [...cTarget];
    if (currentIndex === -1) {
      newChecked.push(value);
      setCTarget((d) => [...d, { t_id: value.id, table_name:label === "Furniture"?"Furniture":"Set"}]);
    } else {
      newChecked.splice(currentIndex, 1);
      newCheckedTarget.splice(currentIndexTarget, 1);
      setCTarget(newCheckedTarget);
    }
    console.log(newCheckedTarget);
    setAddedFurnitures(newChecked);
    console.log(newChecked);
  };
  return (
    <div>
      <div style={{justifyContent:"center",display:"flex",margin:"10px 0px 6px 0px", columnGap:"10px"}}>
      <Button onClick={() => setLabel("Set")} variant="outlined">
        <h3>Add Set</h3>
      </Button>
      <Button onClick={() => setLabel("Furniture")} variant="outlined">
        <h3>Add Furnitures</h3>
      </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>{label==="Furniture"? "All Furnitures":"All Set's"}</h2>
      </div>
      <Divider />
      <div
        style={{ marginTop: "15px", justifyContent: "center", display: "flex" }}
      >
        <List
          dense
          sx={{ width: "100%", maxWidth: 370, bgcolor: "background.paper" }}
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={ label==="Furniture"? (furnitures?.map((option) => option.name)) : (setInfos?.map((option) => option.name))}
            sx={{}}
            renderInput={(params) => (
              <TextField {...params} label="Seacrh Furniture" />
            )}
          />


          {
          label === "Furniture"?(  
          furnitures.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value.id}
                sx={{
                  margin: "10px 0px 10px 0px",
                  padding: "0px 6px 0px 6px ",
                }}
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
                        {value.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })) :(

            //BURAYI DÜZENLİ
             
            setInfos.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  key={value.id}
                  sx={{
                    margin: "10px 0px 10px 0px",
                    padding: "0px 6px 0px 6px ",
                  }}
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
                          {value.setInfoName}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })
          )
          }

        </List>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Button onClick={() => setState(false)} variant="outlined">
          <h3>Add Furnitures</h3>
        </Button>
      </div>
    </div>
  );
}
