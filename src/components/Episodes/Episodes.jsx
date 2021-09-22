import { Link, useParams } from "react-router-dom";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import { VectorIcon } from "icons";



const useStyles = makeStyles((theme) => createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    status: {
      margin: 0,
      textTransform: "uppercase",
      fontSize:'10px'
    },
  }));

const Episodes = ({data, variant = 'square' , character = false}) => {
    const classes = useStyles()


    return (
        <>
        <List>
        {data?.length ? data.map(item => (
          <ListItem to={`/${character ? 'charactersInfo' : 'episodesInfo' }/${item.id}`} component={Link} key={item.id} alignItems="center" button>
            <ListItemAvatar>
            <Avatar variant={variant} alt={item.imageName} src={item.imageName} style={{marginRight: 16}}/>
            </ListItemAvatar>
            <ListItemText
              primary={
                <div className={classes.root}>
                  {character ? (
                    <p className={classes.status}>{['Живой', 'Мертый', 'Неизвестно'][item.status]}</p>
                  ) : (
                    <p className={classes.status}>Cерия {item.series}</p>
                  )}
                  {item.name || item.fullName}  
                </div>
              }
              secondary={character ? `${item.race}, ${['Мужской','Женский'][item.gender]}` : dayjs(item.premiere).locale('ru').format('DD MMMM YYYY')}
            />
            <ListItemSecondaryAction>
              <VectorIcon/>
            </ListItemSecondaryAction>
          </ListItem>
        )) : null }
      </List>   
        </>
     );
}

export default Episodes;
