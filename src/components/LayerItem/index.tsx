import React, { FC, useContext, useState } from "react";
import {

  ListItemIcon,
  ListItemText,
  Box,

  ListItemButton,
} from "@mui/material";
import { DataSource } from "../../context/DataSource";
import { DataSourceContext } from "../../context/DataSourceContext";
import LayerUpdateModal from "../LayerUpdateModal";
import EditIcon from '@mui/icons-material/Edit';

interface LayerItemProps {
  layer: DataSource;
}

const LayerItem: FC<LayerItemProps> = ({ layer }) => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(DataSourceContext)!;
  const [values, setValues] = useState({
    fillColor: layer.fillColor?.join(','),
    lineWidth: layer.lineWidth!,
    pointRadius: layer.pointRadius!,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedLayer = {
      ...layer,
      fillColor: values.fillColor?.split(',').map(Number),
      lineWidth: Number(values.lineWidth),
      pointRadius: Number(values.pointRadius),
    };
    dispatch({ type: "UPDATE_LAYER", payload: updatedLayer });
    handleClose();
  };

  return (
    <>
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <Box
            style={{
              width: 40,
              height: 40,
              background: `linear-gradient(10deg,  rgba(34,193,195,0.1) 0%, rgba(${layer.fillColor!}, 1) 100%)`,
            }}
          ></Box>
        </ListItemIcon>
        <ListItemText primary={'Layer'} secondary={layer.id}/>
        <EditIcon color="action"/>
      </ListItemButton>
      <LayerUpdateModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
      />
</>
  );
};

export default LayerItem;
