import React, { useReducer, createContext, useMemo, ReactNode } from "react";
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

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <DataSourceContext.Provider value={value}>
      {children}
    </DataSourceContext.Provider>
  );
};