import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
    }
  }
}));

const Title = ({ children, secondary, to }) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <Typography variant="body1">{children}</Typography>
      {secondary && to && (
        <Typography variant="body2" color="secondary" component={Link} to={to}>{secondary}</Typography>
      )}
    </div>
  );
};

export default Title;