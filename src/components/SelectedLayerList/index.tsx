import React, { FC } from "react";

import { List, ListSubheader, Divider } from "@mui/material";
import LayerItem from "../LayerItem";

import { DataSource } from "../../context/DataSource";

interface SelectedLayerListProps {
  layers: DataSource[];
}

const SelectedLayerList: FC<SelectedLayerListProps> = ({ layers }) => {
  const appliedLayers = layers.filter(
    (dataSource: DataSource) => dataSource.isAppliedAsLayer
  );
  return (
    <React.Fragment>
      <Divider />
      <List
        sx={{ width: 320 }}
        subheader={
          <ListSubheader>Selected Layers {appliedLayers.length}</ListSubheader>
        }
      >
        {appliedLayers.map((_layer) => (
          <LayerItem key={_layer.id} layer={_layer} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default SelectedLayerList;
