import React, { FC } from "react";

import { ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";

export interface DataSourceItemProps {
  id: string;
  label: string;
  icon: React.ElementType;
  checked: boolean;
  onToggle: () => void;
}

const DataSourceItem: FC<DataSourceItemProps> = ({
  id,
  label,
  icon: Icon,
  checked,
  onToggle,
}) => (
  <ListItem>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText id={`switch-list-label-${id}`} primary={label} />
    <Switch
      edge="end"
      onChange={onToggle}
      checked={checked}
      inputProps={{
        "aria-labelledby": `switch-list-label-${id}`,
      }}
    />
  </ListItem>
);

export default DataSourceItem;
