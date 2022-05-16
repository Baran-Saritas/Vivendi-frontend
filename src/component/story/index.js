import { Button } from "@mui/material";
import { display, width } from "@mui/system";
import React, { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import { useDispatch, useSelector } from "react-redux";
import { setStory } from "../../store/global/globalSlice";
import CustomCard from "../card";
const Story = () => {

  const dispatch = useDispatch();

  const stories = [
    {
      content: (props) => (
        <div style={{ width: "100%", height: "100%", marginTop: "45px", zIndex: 9999, position: "relative" }}>
          <img style={{ width: "100%", height: "100%" }} src="https://jamiemckaye.com/media/posts/27/example-of-an-image.jpeg" />
          <div style={{ position: "absolute", bottom: "0px", width: "100%", height: "200px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "80%", display: "flex", height: "120px", zIndex: 999, position: "absolute" }}>

              <button className="button">
                <h2> REWIEW </h2>
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
              </button>

            </div>
          </div>
        </div>
      )
    }
    ,
    {
      content: (props) => (
        <div style={{ width: "100%", height: "100%", marginTop: "45px", zIndex: 9999, position: "relative" }}>
          <img style={{ width: "100%", height: "100%" }} src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
          <div style={{ position: "absolute", bottom: "0px", width: "100%", height: "200px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "80%", display: "flex", height: "120px", zIndex: 999, position: "absolute" }}>


              <button className="button">
                <h2> REWIEW </h2>
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
              </button>

            </div>
          </div>
        </div>
      )

    }
  ];


  return (
    <div>
      <Stories
        storyContainerStyles={{ margin: "0 auto" }}
        stories={stories}
        defaultInterval={3500}
        keyboardNavigation={true}
        onAllStoriesEnd={() =>
          dispatch(setStory({ value: true }))}
        onStoryStart={() => dispatch(setStory({ value: false }))}
        width={1100}
        height={648}
        isPaused={true}
      />
    </div>
  );
};
export default Story;
