import { DataSourceAction, DataSourceState } from "./DataSource";

export default function dataSourceReducer(
  state: DataSourceState,
  action: DataSourceAction
) {
  switch (action.type) {
    case "ADD_LAYER":
      return state.map(layer =>
        layer.id === action.payload.id ? { ...layer, isAppliedAsLayer: true } : layer
      );
    case "REMOVE_LAYER":
      return state.map(layer =>
        layer.id === action.payload.id ? { ...layer, isAppliedAsLayer: false } : layer
      );
    case "UPDATE_LAYER":
      return state.map(layer =>
        layer.id === action.payload.id ? { ...layer, ...action.payload } : layer
      );
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}