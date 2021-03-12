import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
function Person({ data }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={data.image} />
      </ListItemAvatar>
      <ListItemText primary={data.name} secondary={`${data.age} years`} />
    </ListItem>
  );
}

export default Person;
