
import {
    MAP_TYPES,
  } from "@deck.gl/carto/typed";
import { DataSource } from "../context/DataSource";

  export const dataSources: DataSource[] = [
    {
      id: "worldAirports",
      label: "World Airports",
      type: MAP_TYPES.TABLE,
      connection: "carto_dw",
      data: "carto-demo-data.demo_tables.world_airports",
      fillColor: [125, 233, 124],
      lineWidth: 1,
      pointRadius: 2,
      isAppliedAsLayer: false

    },
    {
      id: "retailStores",
      label: "Retail Stores",
      type: MAP_TYPES.TABLE,
      connection: "carto_dw",
      data: "carto-demo-data.demo_tables.retail_stores",
      isAppliedAsLayer: false,
      fillColor: [190, 133, 120],
      lineWidth: 1,
      pointRadius: 2,
    },
    {
      id: "socialDemographics",
      label: "Social demographics",
      type: MAP_TYPES.TILESET,
      connection: "carto_dw",
      data: "carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup",
      isAppliedAsLayer: false,
      fillColor: [225, 90, 124],
      lineWidth: 1,
      pointRadius: 2,
    },
  ];