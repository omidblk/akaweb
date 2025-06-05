import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useTheme } from "@mui/material/styles";



const ModalView = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//   theme   
const theme = useTheme()
  return (
    <div className="flex flex-col items-center gap-8 bg">
      <h1 className="text-center">Modal</h1>
      <div>
        <Button variant="contained" onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-style" sx={{ borderColor: theme.palette.primary.main }}>
            <p>
              Tempor ut nostrud anim minim. Ullamco est sunt duis fugiat officia
              consequat amet fugiat id minim tempor velit sunt. Laborum velit do
              nulla cupidatat aliquip ullamco qui.
            </p>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ModalView;
