import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Story from "../story";
import { useSelector } from "react-redux";

const StoryDialog = ({ open, setOpen, data }) => {
  const theme = useTheme();
  const [storyExit, setStoryExit] = React.useState();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { storyEndDialog } = useSelector((state) => state.global);

  React.useEffect(() => {
    if (storyEndDialog == true) {
      setOpen("close");
    }
  }, [storyEndDialog]);

  React.useEffect(() => {
    console.log("data", data );
  },[data])
  return (
    <div>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            width: "100%",
          },
        }}
        fullScreen={fullScreen}
        open={open === "open"}
        onClose={() => setOpen(storyExit)}
        maxWidth="xl"
        fullWidth
        aria-labelledby="responsive-dialog-title"
      >
        <Story data={data} />
      </Dialog>
    </div>
  );
};

export default StoryDialog;
