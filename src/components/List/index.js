import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const MainList = ({ items, loading, onSelect, withCheckbox }) => {
  return (
    <List>
      {items.map((item, index) => {
        const id = "id" in item ? item.id : index;
        return (
          <ListItem
            onClick={withCheckbox ? undefined : () => onSelect(item)}
            key={id}
          >
            {withCheckbox && (
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  checked={item.selected}
                  disabled={item.disabled}
                  value={item.value}
                  inputProps={{ "aria-labelledby": id }}
                  onChange={e => onSelect(e.target.checked, item)}
                />
              </ListItemIcon>
            )}
            {item.image && (
              <ListItemAvatar>
                <Avatar alt={item.text.primary} src={item.image} />
              </ListItemAvatar>
            )}
            <ListItemText id={id} primary={item.text.primary} />
          </ListItem>
        );
      })}
    </List>
  );
};

MainList.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
  loading: PropTypes.bool
};

export default MainList;
