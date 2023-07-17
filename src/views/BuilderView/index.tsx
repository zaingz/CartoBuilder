import { DataSourceContext } from "../../context/DataSourceContext";
import DataSourceMenu from "../../components/DataSourcesMenu";

import React, { FC, useContext } from "react";
import { Box, AppBar, Typography, Toolbar } from "@mui/material";

import { DeckGL } from "@deck.gl/react/typed";
import { StaticMap } from "react-map-gl";
import {
  CartoLayer,
  setDefaultCredentials,
  BASEMAP,
} from "@deck.gl/carto/typed";
import MapIcon from "@mui/icons-material/Map";
import { DataSource } from "../../context/DataSource";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 2,
  pitch: 0,
  bearing: 0,
};

setDefaultCredentials({
  accessToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfZ3YxbXE5bjAiLCJqdGkiOiIxNzAzNDEzMiJ9.kbTuKJ8FAY9DONJopfhaTmJcpE0kpYhfSyBhenlxKKE",
});

function dataSourceToCartoLayer(dataSource: DataSource) {
  return new CartoLayer({
    id: dataSource.id,
    type: dataSource.type as any,
    connection: dataSource.connection,
    data: dataSource.data,
    pointRadiusMinPixels: dataSource.pointRadius,
    getLineColor: [0, 45, 123, 200],
    getFillColor: dataSource.fillColor,
    lineWidthMinPixels: dataSource.lineWidth,
  });
}
const BuilderView: FC = () => {
  const { state } = useContext(DataSourceContext)!;
  const layers = state
    .filter((dataSource) => dataSource.isAppliedAsLayer)
    .map(dataSourceToCartoLayer);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <MapIcon sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap component="div">
            Carto Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          left: 0,
          top: 65,
          bottom: 0,

          zIndex: (theme) => theme.zIndex.drawer + 2,
        }}
      >
        <DataSourceMenu />
      </Box>

      <DeckGL
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        <StaticMap mapStyle={BASEMAP.POSITRON} />
      </DeckGL>
    </Box>
  );
};

export default BuilderView;
