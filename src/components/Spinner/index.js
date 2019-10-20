import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: "0 auto"
  }
}));

const Spinner = props => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} {...props} />;
};

export default Spinner;
