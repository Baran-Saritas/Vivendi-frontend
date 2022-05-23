import React from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactImageZoom from "react-image-zoom";
import SetDrawerHamburger from "../../component/hamburgerMenu";
import HamburgerList from "../../component/hamburgerMenu/hamburgerList";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { IoIosMenu, IoMdClose } from "react-icons/io";

import Zoom from "react-img-zoom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function ZoomDeneme() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => {
    setState(open);
  };
  const props = {
    width: 400,
    height: 250,
    zoomPosition: "original",
    zoomWidth: 400,
    img: "https://s3.us-west-1.amazonaws.com/vivendi-image/31edcce5-9a60-4b93-9d1d-9c6663c229d3.png",
  };
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          //width: "100%",
          width: "600px",
          height: "400px",
          justifyContent: "center",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: props.img,
            },
            largeImage: {
              src: props.img,
              width: 1200,
              height: 1800,
            },
          }}
        />
        {/*
<Zoom
  img="https://s3.us-west-1.amazonaws.com/vivendi-image/31edcce5-9a60-4b93-9d1d-9c6663c229d3.png"
  zoomScale={3}
  width={1000}
  height={600}
/>
    */}
        {/* <ReactImageZoom {...props} /> */}
      </div>
    </div>
  );
}

// /https://s3.us-west-1.amazonaws.com/vivendi-image/9483fa5e-5f77-4b9f-ab6c-716902b7b547.png
