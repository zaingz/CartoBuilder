import React, { FC, useContext, useState } from "react";

import { Paper } from "@mui/material";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import StoreIcon from "@mui/icons-material/Store";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { DataSourceContext } from "../../context/DataSourceContext";
import StorageIcon from "@mui/icons-material/Storage";

import DataSourceList from "../DataSourceList";
import SelectedLayerList from "../SelectedLayerList";
import { DataSource } from "../../context/DataSource";

const DataSourceMenu: FC = () => {
  const { state, dispatch } = useContext(DataSourceContext)!;
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    let payload = state.find((layer: DataSource) => layer.id === value);

    if (currentIndex === -1) {
      newChecked.push(value);
      dispatch({ type: "ADD_LAYER", payload: payload! });
    } else {
      newChecked.splice(currentIndex, 1);
      if (payload) {
        payload.isAppliedAsLayer = false;
      }
      dispatch({ type: "REMOVE_LAYER", payload: payload! });
    }

    setChecked(newChecked);
  };

  const dataSourcesProp = state.map((dataSource) => {
    let icon = StorageIcon;
    switch (dataSource.id) {
      case "worldAirports":
        icon = FlightTakeoffIcon;
        break;
      case "retailStores":
        icon = StoreIcon;
        break;
      case "socialDemographics":
        icon = FamilyRestroomIcon;
        break;

      default:
        break;
    }
    return {
      ...dataSource,
      onToggle: handleToggle(dataSource.id),
      checked: checked.includes(dataSource.id),
      icon,
    };
  });

  return (
    <Paper sx={{ m: 3 }} elevation={3}>
      <DataSourceList dataSources={dataSourcesProp!} />
      <SelectedLayerList layers={state} />
    </Paper>
  );
};

export default DataSourceMenu;
