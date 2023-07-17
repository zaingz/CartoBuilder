import { Dispatch } from "react";

export interface DataSource {
  id: string;
  label: string;
  type: string;
  connection: string;
  data: string;
  isAppliedAsLayer: boolean;
  fillColor?: number[];
  lineWidth?: number;
  pointRadius?: number;
}
export type DataSourceState = DataSource[];

export interface DataSourceAction {
  type: string;
  payload: DataSource;
}

export interface LayerContextProps {
  state: DataSourceState;
  dispatch: Dispatch<DataSourceAction>;
}
