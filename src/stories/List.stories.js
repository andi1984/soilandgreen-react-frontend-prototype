import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import List from "@bit/mui-org.material-ui.list";
import ListItem from "@bit/mui-org.material-ui.list-item";
import ListItemText from "@bit/mui-org.material-ui.list-item-text";

export default {
  title: "List"
};

export const defaultStyling = () => (
  <List>
    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Summer BBQ"
        secondary={
          <React.Fragment>
            {" — Wish I could come, but I'm out of town this…"}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemText
        primary="Oui Oui"
        secondary={
          <React.Fragment>
            {" — Do you have Paris recommendations? Have you ever…"}
          </React.Fragment>
        }
      />
    </ListItem>
  </List>
);
