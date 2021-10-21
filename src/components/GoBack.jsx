
import { useHistory } from "react-router-dom";

import { makeStyles, IconButton } from "@material-ui/core";
import { ArrowIcon } from "icons";

const useStyles = makeStyles({
  button: {
    position: "absolute",
    top: 16,
    left: 8,
    zIndex: 1
  }
});

const GoBack = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <IconButton className={classes.button} onClick={() => history.goBack()}>
      <ArrowIcon />
    </IconButton>
  );
};

export default GoBack;