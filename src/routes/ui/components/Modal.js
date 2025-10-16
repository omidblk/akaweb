import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Alert } from "@mui/material";
import { Warning } from "@mui/icons-material";
import AdvancedModal from "./AdvancedModal";
import { EnhancedButton as Button } from "./EnhancedButton";
import IntlMessages from "../../../lang/components/IntlMessages";
import { useIntl } from 'react-intl';

const ModalView = () => {
  const Intl = useIntl()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // advanced modal conformation
 
  const variant = "error"; //success , warning , info , primary , secondary
  const AlertMessage = "message";
  const loading = false;
  const severity = "warning";
  const [openAdvanced, setOpenadvanced] = useState(false);
  const handleOpenAdvanced = () => setOpenadvanced(true);
  const handleCloseAdvanced = () => setOpenadvanced(false);
  const handleConfirm = () => console.log("confirmed");

  //   theme
  const theme = useTheme();
  return (
    <div className="flex flex-col items-center gap-8 bg">
      <h1 className="text-center">Modal</h1>
      <div className="flex flex-col gap-2">
        <Button variant="contained" onClick={handleOpen}>
          Open modal
        </Button>

        {/* AdvancedModal  -----  Confirmation Modal */}
        <Button className="" variant="contained" onClick={handleOpenAdvanced}>
          Open advanced modal
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modal-style"
          sx={{ borderColor: theme.palette.primary.main }}
        >
          <p>
            Tempor ut nostrud anim minim. Ullamco est sunt duis fugiat officia
            consequat amet fugiat id minim tempor velit sunt. Laborum velit do
            nulla cupidatat aliquip ullamco qui.
          </p>
        </Box>
      </Modal>

      <AdvancedModal
        open={openAdvanced}
        onClose={handleCloseAdvanced}
        title={Intl.formatMessage({ id: 'modal-title' })}
        variant={variant}
        size="large" // small , large , xlarge
        actions={
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              onClick={handleCloseAdvanced}
              disabled={loading}
            >
              
               <IntlMessages id={"modal-cancel-button-text"} />
            </Button>
            <Button
              variant="contained"
              color={variant === "error" ? "error" : "primary"}
              onClick={handleConfirm}
              loading={loading}
            >
              
              <IntlMessages id={"modal-confirm-button-text"} />
            </Button>
          </Box>
        }
      >
        <Box sx={{ textAlign: "center", py: 2 }}>
          
          {["warning","error"].includes(variant)  && (
            <Warning
            sx={{
              fontSize: 48,
              color: `${variant}.main`,
              mb: 2,
            }}
          />
          )}

          <Typography variant="h6" gutterBottom>
            
            <IntlMessages id={"modal-confirmation-text"}/>
          </Typography>

          {/* ------   ALERT    -------- */}
          {AlertMessage && (
            <Alert severity={severity} sx={{ mt: 2, textAlign: "right" }}>
              <IntlMessages id={"modal-alertMessage"}/>
            </Alert>
          )}
        </Box>
      </AdvancedModal>
    </div>
  );
};

export default ModalView;
