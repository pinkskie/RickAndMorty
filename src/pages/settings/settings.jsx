
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, ListItem, Button, Avatar, ListItemAvatar, ListItemText, Divider, List, ListItemSecondaryAction, Typography } from "@material-ui/core";
import { ArrowIcon, PaletteIcon, VectorIcon } from "icons";
import { useHistory } from "react-router-dom";

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
        color: '#5B6975',
        fontSize: 10,
        textTransform: 'uppercase'
    }
  }));

  
  const Settings = () => {
      const classes = useStyles()
      const history = useHistory();
      
      function handleClick() {
          history.goBack();
        }
    return (
        <>
            <IconButton aria-label="delete" size="small" onClick={handleClick}  className={classes.position}>
                <ArrowIcon /> <span style={{marginLeft:24}}>Настройки</span>
            </IconButton>
            <ListItem className={classes.root}>
                <ListItemAvatar >
                    <Avatar />
                    </ListItemAvatar>
                        <ListItemText   
                            primary={'Nysan Sultanbayev'}
                            secondary={'pinksky'}
                        />
            </ListItem>
            <div className={classes.position}>
            <Button 
                variant="contained" 
                color="secondary"
                fullWidth
                style={{marginTop:24}}
                type="button"
                // onClick={handleSubmit}
            >
                Редактировать
            </Button>
            <Divider light style={{marginTop: 32, marginBottom: 32}}/>
            <span className={classes.span}> Внешний Вид</span>
            <List>
                <ListItem className={classes.root}>
                    <ListItemAvatar >
                        <VectorIcon/>
                        </ListItemAvatar>
                            <ListItemText   
                                primary={'Темная тема'}
                                secondary={'Включена'}
                            />
                </ListItem>
                <ListItemSecondaryAction>
                    <VectorIcon/>
                </ListItemSecondaryAction>
            </List>
            <Divider light style={{marginTop: 32, marginBottom: 32}}/>
            <span className={classes.span}> О приложении</span>
            <Typography variant="body2" component="p" style={{marginTop: 24}}>
                Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.
            </Typography>
            <Divider light style={{marginTop: 32, marginBottom: 32}}/>
            <span className={classes.span}> Версия приложения</span>
            <Typography variant="body2" component="p" style={{marginTop: 24}}>
                Rick & Morty v1.0.0
            </Typography>
            </div>

        </>
     );
}

export default Settings;
