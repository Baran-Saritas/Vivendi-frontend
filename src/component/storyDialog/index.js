import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Story from '../story';

const StoryDialog = ({open,setOpen}) => {
    const [openD, setOpenD] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpenD(true);
    };

    const handleClose = () => {
        setOpenD(false);
    };

    return (
        <div>
            <Dialog
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        width:"1200px"
                    },
                }}
                fullScreen={fullScreen}
                open={open=== 'open'}
                onClose={() => setOpen('close')}
                aria-labelledby="responsive-dialog-title"
            >
                <Story />
            </Dialog>
        </div>
    );
}

export default StoryDialog