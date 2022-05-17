import React from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactImageZoom from 'react-image-zoom';
export default function ZoomDeneme() {
  
const props = {width: 400, height: 250,zoomPosition :"original", zoomWidth: 400, img: "http://malaman.github.io/react-image-zoom/example/1.jpg"};
  return (
    <div>
      <div style={{width:"300px",height:"200px"}}>
        
      <ReactImageZoom {...props} />
      </div>
    </div>
  );
}

// /https://s3.us-west-1.amazonaws.com/vivendi-image/9483fa5e-5f77-4b9f-ab6c-716902b7b547.png