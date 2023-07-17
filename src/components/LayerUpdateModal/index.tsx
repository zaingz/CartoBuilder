import React, { FC } from "react";
import { Box, Modal, TextField, Button, Typography } from "@mui/material";

const LayerUpdateModal: FC<{
  open: boolean;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
}> = ({ open, handleClose, handleSubmit, handleChange, values }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: "1px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Layer Properties
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Fill Color"
            name="fillColor"
            value={values.fillColor}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Outline Size"
            name="lineWidth"
            value={values.lineWidth}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Radius"
            name="pointRadius"
            value={values.pointRadius}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LayerUpdateModal;
