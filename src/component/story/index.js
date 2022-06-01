import React, { useEffect } from "react";
import Stories from "react-insta-stories";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStory } from "../../store/global/globalSlice";
const Story = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { campaigns } = useSelector((state) => state.campaign);
  const stories = [
    {
      content: (props) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            zIndex: 9999,
            position: "relative",
          }}
        >
          <img
            style={{ width: "100%", marginTop: "35px", height: "100%" }}
            src="https://jamiemckaye.com/media/posts/27/example-of-an-image.jpeg"
          />
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                height: "100px",
                zIndex: 999,
                position: "absolute",
              }}
            >
              <button className="button">
                <h2> REWIEW </h2>
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (props) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            zIndex: 9999,
            position: "relative",
          }}
        >
          <img
            style={{ width: "100%", marginTop: "35px", height: "100%" }}
            src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          />
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              marginTop: "45px",
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                height: "100px",
                zIndex: 999,
                position: "absolute",
              }}
            >
              <button className="button">
                <h2> REWIEW </h2>
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    console.log(data);
  },[])
  let res = data?.map((i) => {
    return {
      duration: 3000,
      content: (props) => (
        <div
          key={i}
          onClick={() =>
            navigate(`/products/${i.width ? "detail" : "setDetail"}/${i.id}`)
          }
          style={{
            width: "100%",
            height: "100%",
            zIndex: 9999,
            position: "relative",
          }}
        >
          <img
            style={{ width: "100%", marginTop: "35px", height: "100%" }}
            src={i.coupon.imageSource}
            alt={i.id}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              marginTop: "45px",
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                height: "100px",
                zIndex: 999,
                position: "absolute",
              }}
            >
              <button className="button">
                <h2> REWIEW </h2>
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
              </button>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <>
      <div className="large-Story">
        <Stories
          storyContainerStyles={{ margin: "0 auto" }}
          stories={res}
          defaultInterval={res.length * 3000}
          keyboardNavigation={true}
          onAllStoriesEnd={() => dispatch(setStory({ value: true }))}
          onStoryStart={() => dispatch(setStory({ value: false }))}
          width={1100}
          height={628}
          isPaused={true}
        />
      </div>
      <div className="medium-Story">
        <Stories
          storyContainerStyles={{ margin: "0 auto" }}
          stories={res}
          defaultInterval={3500}
          keyboardNavigation={true}
          onAllStoriesEnd={() => dispatch(setStory({ value: true }))}
          onStoryStart={() => dispatch(setStory({ value: false }))}
          width={900}
          height={628}
          isPaused={true}
        />
      </div>
      <div className="small-Story">
        <Stories
          storyContainerStyles={{ margin: "0 auto" }}
          stories={res}
          defaultInterval={3500}
          keyboardNavigation={true}
          onAllStoriesEnd={() => dispatch(setStory({ value: true }))}
          onStoryStart={() => dispatch(setStory({ value: false }))}
          width={700}
          height={448}
          isPaused={true}
        />
      </div>
      <div className="xsmall-Story">
        <Stories
          storyContainerStyles={{ margin: "0 auto" }}
          stories={res}
          defaultInterval={3500}
          keyboardNavigation={true}
          onAllStoriesEnd={() => dispatch(setStory({ value: true }))}
          onStoryStart={() => dispatch(setStory({ value: false }))}
          width={400}
          height={400}
          isPaused={true}
        />
      </div>
    </>
  );
};
export default Story;
