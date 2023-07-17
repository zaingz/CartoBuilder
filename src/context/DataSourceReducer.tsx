import { DataSourceAction, DataSourceState } from "./DataSource";

export default function dataSourceReducer(
  state: DataSourceState,
  action: DataSourceAction
) {
  switch (action.type) {
    case "ADD_LAYER":
      const layerToAdd = state.find((layer) => layer.id === action.payload.id);
      if (layerToAdd) {
        layerToAdd.isAppliedAsLayer = true;
      }
      return [...state];
    case "REMOVE_LAYER":
      const layerToRemove = state.find(
        (layer) => layer.id === action.payload.id
      );
      if (layerToRemove) {
        layerToRemove.isAppliedAsLayer = false;
      }

      return [...state];
    case "UPDATE_LAYER":
      console.log("Updating layer", action.payload);
      return state.map((layer) =>
        layer.id === action.payload.id ? { ...layer, ...action.payload } : layer
      );
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
