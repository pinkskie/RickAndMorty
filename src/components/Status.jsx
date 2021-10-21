import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  status: {
    margin: 0,
    textTransform: "uppercase",
    fontSize: "10px",
    color: props => props.color,
    fontWeight: "bold",
  },
}));

const Status = ({ status, isCharacter = true }) => {
  const label = isCharacter ? ["Живой", "Мертый", "Неизвестно"][status] : `Cерия ${status}`;
  const color = isCharacter ? ["#43D049", "#EB5757", "#5B6975"][status] : "rgba(34, 162, 189, 0.87)";
  const classes = useStyles({color});

  return <Typography variant="body1" className={classes.status}>{label}</Typography>;
};

export default Status;