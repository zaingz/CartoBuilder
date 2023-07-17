import React, { FC } from "react";

import {
  List,
  ListSubheader,
} from "@mui/material";
import DataSourceItem, { DataSourceItemProps } from "../DataSourceItem";

export interface DataSourceListProps {
  dataSources: DataSourceItemProps[];
}

const DataSourceList: FC<DataSourceListProps> = ({ dataSources }) => (
  <List
    subheader={<ListSubheader>Available Data Sources</ListSubheader>}
  >
    {dataSources.map((dataSource) => (
      <DataSourceItem key={dataSource.id} {...dataSource} />
    ))}
  </List>
);

export default DataSourceList;
