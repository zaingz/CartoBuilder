import React, { useReducer, createContext, ReactNode } from "react";
import { LayerContextProps } from "./DataSource";
import dataSourceReducer from "./DataSourceReducer";
import { dataSources } from "../api/getData";

export const DataSourceContext = createContext<LayerContextProps | undefined>(
  undefined
);

interface LayerProviderProps {
  children: ReactNode;
}

export const DataSourceProvider: React.FC<LayerProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(dataSourceReducer, dataSources);

  return (
    <DataSourceContext.Provider value={{ state, dispatch }}>
      {children}
    </DataSourceContext.Provider>
  );
};
