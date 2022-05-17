import React from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactImageZoom from "react-image-zoom";
import SetDrawerHamburger from "../../component/hamburgerMenu";
import HamburgerList from "../../component/hamburgerMenu/hamburgerList";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import {IoIosMenu,IoMdClose} from "react-icons/io"
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
    img: "http://malaman.github.io/react-image-zoom/example/1.jpg",
  };
  return (
    <div>
      {/* <div style={{width:"300px",height:"200px"}}>
        
      <ReactImageZoom {...props} />
      </div> */}

      <div>
        <div className="dialog-item-2" onClick={() => toggleDrawer(true)}>
          {state ===true ?(<IoMdClose size={30}/>): (<IoIosMenu size={30}/>)}
        
        </div>
        <div className="furnitureDrawer"></div>
        <Drawer
          PaperProps={{
            paper: {
              width: 250,
            },
            sx: { width: "450px" },
          }}
          anchor={"left"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            PaperProps={{
              sx: { width: "100%" },
            }}
            sx={{ width: 400 }}
            role="presentation"
          >
            <HamburgerList setState={setState} />
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

// /https://s3.us-west-1.amazonaws.com/vivendi-image/9483fa5e-5f77-4b9f-ab6c-716902b7b547.png
