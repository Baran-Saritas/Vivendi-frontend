import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { FormControl, InputLabel, MenuItem, Select, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateFnsUtils from '@date-io/date-fns';
import SelectImage from "../../component/SelectImage/SelectImage";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import SetDrawer from "../../component/setDrawer";
import { getFurniture } from "../../store/furniture/furnitureSlice";
import { postCampaign } from "../../store/campaign/campaignSlice";

export default function ProductsCampaign() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { furnitures } = useSelector((state) => state.furniture);
  const [values, setValues] = useState({
    campaignName: undefined,
    categoryId: undefined,
    title: undefined,
    description: undefined,
    endDate: undefined,
  });
  const [cTarget,setCTarget] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [images, setImages] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    //discount percentage eklenicek
    if (!values.campaignName) {
      setMessageText("Please fill Campaign Name field!");
      setOpenMessage(true);
      return;
    }
    if (!values.title) {
      setMessageText("Please fill Title Name field!");
      setOpenMessage(true);
      return;
    }
    if (!values.categoryId) {
      setMessageText("Please select a category!");
      setOpenMessage(true);
      return;
    }

    if (images.length < 1) {
      setMessageText("Please select one image!");
      setOpenMessage(true);
      return;
    }
    if (cTarget.length < 1) {
      setMessageText("Please select one Furniture!");
      setOpenMessage(true);
      return;
    }



    values.endDate = selectedDate.toString();
//    setValues({ ...values,endDate: selectedDate })

    let newData = [];
    images.forEach((i) => newData.push(JSON.parse(JSON.stringify(i))));
    newData.forEach((i) => {
      if (!i?.color) {
        i.color = "#ffffff";
      }
      delete i.id;
    });


     let data = { ...values, images: newData , cTargets:cTarget };
     console.log(data);
     data.endDate = selectedDate.toISOString().split(".")[0];
     dispatch(postCampaign(data));

  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openMessage}
        onClose={() => setOpenMessage(false)}
        message={messageText}
      />
      <div className="add-product-page">
        <div className="add-product-con">
          <div className="add-product-left">
            <div className="product-field">
              <label htmlFor="p-name">Campaign Name </label>
              <input
                type="text"
                id="p-name"
                name="campaignName"
                value={values.campaignName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-name">Title</label>
              <input
                type="text"
                id="p-name"
                name="title"
                value={values.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="product-field">
              <label htmlFor="p-categoryId">Category</label>
              
              <Select
    
                id="p-categoryId"
                defaultValue=""
                onChange={(e, val) =>{
                  setValues({ ...values, categoryId: e.target.value })
                  
                }}
              >
                {categories.map((i) => (
                  <MenuItem value={i.id} key={i.id}>
                    {i.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="product-field">
              <label htmlFor="p-desc">Description</label>
              <textarea
                rows="3"
                type="text"
                id="p-desc"
                value={values.description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
            <div className="product-field">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="product-field">
                <SetDrawer cTarget={cTarget} setCTarget={setCTarget} />
            </div>
          </div>
          <div className="add-product-right">
            <SelectImage images={images} setImages={setImages}/>
            <button type="submit" onClick={handleClick}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
