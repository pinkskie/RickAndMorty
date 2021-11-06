import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { IconButton, ListItem, Button, Avatar, ListItemAvatar, ListItemText, Divider, List, ListItemSecondaryAction, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowIcon, PaletteIcon, VectorIcon } from "icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useUser } from "utils";
import { getProfile } from "utils/store/login/api.login";
import { setProfile } from "utils/store/login/actions.login";
import { toggleTheme } from "utils/store/theme.reducer";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  position: {
    padding: 16,
    marginBottom: 32
  },
  root: {
    display: "flex"
  },
  span: {
    color: "#5B6975",
    fontSize: 10,
    textTransform: "uppercase"
  }
}));

const Settings = () => {
  const [user,, signOut] = useUser();
  const { isLight, label } = useSelector(state => state.theme);
  const data = useSelector(state => state.user.profile);

  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile(user.userName);
        dispatch(setProfile(res.data));
        localStorage.setItem("profile", JSON.stringify(res.data));
      } catch (error) {
        console.error(error);
      }
    };
    if (!data) {
      fetchData();
    }
  }, [user, data]);
  
  return (
    <>
      <IconButton aria-label="delete" size="small" onClick={() => history.goBack()}  className={classes.position}>
        <ArrowIcon /> <span style={{marginLeft:24}}>Настройки</span>
      </IconButton>
      <ListItem className={classes.root}>
        <ListItemAvatar >
          <Avatar />
        </ListItemAvatar>
        <ListItemText   
          primary={data?.fullName}
          secondary={user.userName}
        />
      </ListItem>
      <div className={classes.position}>
        <Button 
          variant="outlined" 
          color="primary"
          fullWidth
          style={{marginTop:24}}
          type="button"
          onClick={() => history.push("/edit")}

        >
          Редактировать
        </Button>
        <Divider light style={{marginTop: 32, marginBottom: 32}} />
        <span className={classes.span}>Внешний Вид</span>
        <List>
          <ListItem className={classes.root} button onClick={() => dispatch(toggleTheme)}>
            <ListItemAvatar >
              <PaletteIcon isLight={isLight} />
            </ListItemAvatar>
            <ListItemText
              primary="Темная тема"
              secondary={label}
            />
            <ListItemSecondaryAction>
              <VectorIcon/>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem className={classes.root} button onClick={signOut}>
            <ListItemAvatar>
              <ExitToAppIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText primary="Выйти" />
            <ListItemSecondaryAction>
              <VectorIcon/>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider light style={{marginTop: 32, marginBottom: 32}}/>
        <span className={classes.span}>О приложении</span>
        <Typography variant="body2" component="p" style={{marginTop: 24}}>
          Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концентрированной темной материи.
        </Typography>
        <Divider light style={{marginTop: 32, marginBottom: 32}}/>
        <span className={classes.span}> Версия приложения</span>
        <Typography variant="body2" component="p" style={{marginTop: 24}}>
          Rick & Morty v1.0.0
        </Typography>
      </div>
    </>
  );
};

export default Settings;
